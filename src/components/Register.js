import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "../api/axios";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL= '/register';

const Register = () =>  {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);
    
    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);
    
    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchPwdFocus, setMatchPwdFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');    
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button eanbled wit JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response.data);
            console.log(response.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 409)    {
                setErrMsg('Username Taken');
            }   else {
                setErrMsg('Registeration Failed')
            }
            setPwdFocus.current.focus();
        }
    }
    
    return (
        <>
        {success ? (
            <section>
                <h1>Success!</h1>
                <p>
                    <a href="login">Sign In</a>
                </p>
            </section>
        ): (
            <div className="Auth-form-container">
                <section>
                    <form className="Auth-form" onSubmit={handleSubmit}>
                        <div className="Auth-form-content">
                            <p 
                                ref={errRef}
                                className={errMsg ? "errmsg Auth-form-title" : "offscreen Auth-form-title"}
                                aria-live="assertive"    
                            >
                                {errMsg}
                            </p>
                            <h1 className="text-center">Register</h1>
                            <div className="form-group mt-3">
                                <label htmlFor="username">
                                    Username:
                                    <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setUser(e.target.value)}
                                    required
                                    aria-invalid={validName ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={() => setUserFocus(true)}
                                    onBlur={() => setUserFocus(false)}
                                    className="form-control mt-1"
                                />
                                <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} /> <br />
                                    - 4 to 24 characters.<br />
                                    - Must begin with a letter.<br />
                                    - Letters, numbers, underscores, hyphens allowed.
                                </p>
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="password">
                                    Password:
                                    <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPwd(e.target.value)}
                                    required
                                    aria-invalid={validPwd ? "false" : "true"}
                                    aria-describedby="pwdnote"
                                    onFocus={() => setPwdFocus(true)}
                                    onBlur={() => setPwdFocus(false)}
                                    className="form-control mt-1"
                                />
                                <p id="pwdnote" className={pwdFocus && pwd && !validPwd ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} /> <br />
                                    - 8 to 24 characters.<br />
                                    - Must include uppercase and lowercase letters<br />
                                    - A number and a special character.<br />
                                    - Allowed special characters: <br />
                                    ! @ # $ %
                                </p>
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="matchPassword">
                                    Confirm Password:
                                    <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                                </label>
                                <input
                                    type="password"
                                    id="matchPassword"
                                    onChange={(e) => setMatchPwd(e.target.value)}
                                    required
                                    aria-invalid={validMatch ? "false" : "true"}
                                    aria-describedby="matchnote"
                                    onFocus={() => setMatchPwdFocus(true)}
                                    onBlur={() => setMatchPwdFocus(false)}
                                    className="form-control mt-1"
                                />
                                <p id="matchnote" className={matchPwdFocus && matchPwd !== pwd ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} /> <br />
                                Password does not match.
                                </p>
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <button 
                                    className="btn btn-primary" 
                                    disabled={!validName || !validPwd || !validMatch ? true : false}
                                >
                                    Sign Up
                                </button>
                            </div>
                            <div>
                                <p className="text-center">
                                    Already registered?<br />
                                    <span className="line link-primary">
                                        <a href="login">Sign In</a>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        )}
        </>
    )
}

export default Register
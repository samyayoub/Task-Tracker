import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";

import axios from '../api/axios';
const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400)    {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401)    {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }

    }

    return (
        <div className="Auth-form-container">
            {success ? (
                <section>
                    <h3>You are logged in</h3>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section>
                    <form onSubmit={handleSubmit} className="Auth-form">
                        <div className="Auth-form-content">
                            <p 
                                ref={errRef} 
                                className={errMsg ? "errmsg Auth-form-title" : "offscreen Auth-form-title"}
                                aria-live="assertive"
                            >
                                {errMsg}
                            </p>
                            <h3 className="text-center">Sign In</h3>
                            <div className="form-group mt-3">
                                <label htmlFor='username'>Username:</label>
                                <input
                                    type="text"
                                    id="username"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setUser(e.target.value)}
                                    value={user}
                                    required
                                    className="form-control mt-1"
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor='password'>Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    required
                                    className="form-control mt-1"
                                />
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <button className="btn btn-primary">Sign In</button>
                            </div>
                            
                            <p className="text-center">
                                Need an Account?<br />
                                <span className="line link-primary">
                                    <a href="register">Sign up</a>
                                </span>
                            </p>

                            <p className="text-center mt-2">
                                Forgot <a href="#">password?</a>
                            </p>
                        </div>
                    </form>
                </section>
            )
            }
        </div>
    )

}

export default Login;
import Add from '../img/add.svg'

export default function Track() {
    
    return (
        <div className="trackContainer">
            <h1 className="trackText">
                Start Tracking your Next Task
            </h1>
            <img src={Add} alt="" className="addButton"/>
        </div>
    )
}
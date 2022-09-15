import { useHistory } from "react-router-dom";

const PopUp = ({cbfunction, lessonComplete}) => {
    const history = useHistory()
    return   (
        <div className="alert">
            <div className="alert-div"> 
                <p>{lessonComplete ? "congrats" : "Ohh NOOOOOOO"}</p>
                <button className="alert-btn" onClick={cbfunction}> close</button>
            </div>
        </div>
    )
}


export default PopUp;
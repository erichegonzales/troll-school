import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const PopUp = ({cbfunction, lessonComplete}) => {
    // const history = useHistory()
    return   (
        
        <div className="alert">
            <div className="alert-div"> 
                <p>{lessonComplete ? "congrats" : "Ohh NOOOOOOO"}</p>
                <button className="alert-btn" onClick={cbfunction}> close</button>
                {lessonComplete ? <Link to="/courses"><button>Courses</button></Link> : null}
            </div>
        </div>  
    )
}

export default PopUp;
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const PopUp = ({cbfunction, lessonComplete}) => {
    // const history = useHistory()
    return   (
        
        <div className="alert">
            <div className="alert-div"> 
          <p>{lessonComplete ? "Congratulations! You are ready for the next stage." : "Try again! ♥"}</p>
                <button className="alert-btn" onClick={cbfunction}> close</button>
                {lessonComplete ? <Link to="/courses"><button className="courses-btn">Courses Map</button></Link> : null}
            </div>
        </div>  
    )
}

export default PopUp;
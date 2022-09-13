
import { Link } from "react-router-dom"
const MathMapp = () => {




    return (
        <div className="mapp-screen">
            <div className="mapp-screen-container">
                <div className="islands island1 bg-image">
                    <Link to="/courses/math-mapp/quizzes" className="level level1"><div >1</div></Link>
                    <div className="level level2">3</div>
                    <div className="level level3">2</div>
                </div>
                <div className="islands island2 bg-image2" >
                    <div className="level level1">4</div>
                    <div className="level level2">5</div>
                    <div className="level level3">6</div>
                </div>
                <div className="islands island3 bg-image3">
                    
                    <div className="level level2">8</div>
                    <div className="level level3">7</div>
                </div>
            </div>
        </div>
    )
}


export default MathMapp
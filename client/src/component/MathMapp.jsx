import { Link } from "react-router-dom"
import { useEffect, useState } from "react"


const MathMapp = () => {

    const [questions, setQuestions] = useState([]);


//     useEffect(() => {
//     fetch("http://localhost:3000/questions")
//       .then((r) => r.json())
//       .then(setQuestions);
//   }, []);


    // console.log(questions[1].id)
    return (
        <div className="mapp-screen">
            <div className="mapp-screen-container">
          <div className="math-mapp-desc"><p>Math is everywhere. Practicing our math skills will help us in our adventures through all the lands.</p></div>
                <div className="islands island1 bg-image">
                    <Link to="/courses/quizzes/1" className="level level1"><div >1</div></Link>
                    <Link to="/courses/quizzes/2" className="level level2"><div >2</div></Link>
                    <Link to="/courses/quizzes/3" className="level level3"><div >3</div></Link>
                    {/* <div className="level level2">3< /div>
                    <div className="level level3">2</div> */}
                </div>
                <div className="islands island2 bg-image2" >
                    <Link to="/courses/quizzes/1" className="level level1"><div >4</div></Link>
                    <Link to="/courses/quizzes/1" className="level level2"><div >5</div></Link>
                    <Link to="/courses/quizzes/1" className="level level3"><div >6</div></Link>
                    {/* <div className="level level1">4</div>
                    <div className="level level2">5</div>
                    <div className="level level3">6</div> */}
                </div>
                <div className="islands island3 bg-image3">
                    <Link to="/courses/math-mapp/questions/1" className="level level2"><div >7</div></Link>
                    <Link to="/courses/math-mapp/questions/1" className="level level3"><div >8</div></Link>
                    {/* <div className="level level2">8</div>
                    <div className="level level3">7</div> */}
                </div>
            </div>
        </div>
    )
}


export default MathMapp
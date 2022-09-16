import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const MathMapp = ({ user }) => {
  const [description, setDescription] = useState("")
  const [progress, setProgress] = useState([])

  useEffect(() => {
    const getDescription = async () => {
      let req = await fetch("http://localhost:3000/courses/1")
      let res = await req.json()
      setDescription(res.description)
    }
    getDescription()

    const getInfo = async () => {
      let req = await fetch(`http://localhost:3000/users/${user.id}/list`)
      let res = await req.json()
      let req2 = await fetch("http://localhost:3000/courses/1")
      let res2 = await req2.json()
      const math = []
      for (let index in res.quizzes) {
        let quiz = res.quizzes[index]
        switch (quiz.course) {
          case "Math":
            math.push(quiz.quiz)
            break
          default:
            break
        }
      }
      let finished = []
      for (let i = 0; i < res2.quizzes.length; i++) {
        if (math.includes(res2.quizzes[i].id)) {
          finished.push(i + 1)
        }
      }
      setProgress(finished)
    }
    getInfo()
  }, [])

  // console.log(questions[1].id)
  return (
    <div className="mapp-screen">
      <div className="mapp-screen-container">
        <div className="math-mapp-desc">
          <p>{description}</p>
        </div>
        <div className="islands island1 bg-image">
          <Link to="/courses/1/quizzes/1" className="level level1">
            <div>{progress.includes(1) ? <img
              className="course-star"
              src="https://www.clipartmax.com/png/full/286-2866206_star-small-stars-yellow-transparent.png"
              alt="A star for completing a course"
            ></img> : 1}</div>
          </Link>
          <Link to="/courses/1/quizzes/2" className="level level2">
            <div>{progress.includes(2) ? <img
              className="course-star"
              src="https://www.clipartmax.com/png/full/286-2866206_star-small-stars-yellow-transparent.png"
              alt="A star for completing a course"
            ></img> : 2}</div>
          </Link>
          <Link to="/courses/1/quizzes/3" className="level level3">
            <div>{progress.includes(3) ? <img
              className="course-star"
              src="https://www.clipartmax.com/png/full/286-2866206_star-small-stars-yellow-transparent.png"
              alt="A star for completing a course"
            ></img> : 3}</div>
          </Link>
          {/* <div className="level level2">3< /div>
                    <div className="level level3">2</div> */}
        </div>
        <div className="islands island2 bg-image2">
          <Link to="/courses/1/quizzes/1" className="level level1">
            <div>4</div>
          </Link>
          <Link to="/courses/1/quizzes/1" className="level level2">
            <div>5</div>
          </Link>
          <Link to="/courses/1/quizzes/1" className="level level3">
            <div>6</div>
          </Link>
          {/* <div className="level level1">4</div>
                    <div className="level level2">5</div>
                    <div className="level level3">6</div> */}
        </div>
        <div className="islands island3 bg-image3">
          <Link to="/courses/math-mapp/questions/1" className="level level2">
            <div>7</div>
          </Link>
          <Link to="/courses/math-mapp/questions/1" className="level level3">
            <div>8</div>
          </Link>
          {/* <div className="level level2">8</div>
                    <div className="level level3">7</div> */}
        </div>
      </div>
    </div>
  )
}

export default MathMapp


import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const SpellingMapp = () => {
  const [description, setDescription] = useState("")

  useEffect(() => {
    const getDescription = async () => {
      let req = await fetch('http://localhost:3000/courses/2')
      let res = await req.json()
      setDescription(res.description)
    }
    getDescription()
  }, [])


  return (
    <div className="mapp-screen">
      <div className="mapp-screen-container">
        <div className="spelling-mapp-desc"><p>{ description }</p></div>
        <div className="islands island4 bg-image4">
          <Link to="/courses/quizzes/3" className="level level1"><div >9</div></Link>
          <Link to="/courses/quizzes/4" className="level level2"><div >10</div></Link>
          {/* <div className="level level4">3</div>
                    <div className="level level3">2</div> */}
        </div>
        <div className="islands island5 bg-image5" >
          <Link to="/courses/math-mapp/questions/1" className="level level2"><div >11</div></Link>
          <Link to="/courses/math-mapp/questions/1" className="level level3"><div >12</div></Link>
          <Link to="/courses/math-mapp/questions/1" className="level level5"><div >13</div></Link>
          {/* <div className="level level2">4</div>
                    <div className="level level3">5</div>
                    <div className="level level5">6</div> */}
        </div>
        <div className="islands island6 bg-image6">
          <Link to="/courses/math-mapp/questions/1" className="level level2"><div >14</div></Link>
          <Link to="/courses/math-mapp/questions/1" className="level level3"><div >15</div></Link>
          <Link to="/courses/math-mapp/questions/1" className="level level6"><div >16</div></Link>
          {/* <div className="level level2">8</div>
                    <div className="level level3">7</div>
                    <div className="level level6">7</div> */}
        </div>
      </div>
    </div>
  )
}


export default SpellingMapp
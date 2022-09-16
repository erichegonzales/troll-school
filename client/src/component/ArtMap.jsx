
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const ArtMap = ({ user }) => {

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
        <div className="spelling-mapp-desc"><p>{description}</p></div>
        <div className="islands island4 bg-image13">
          <Link to="/courses/art-mapp/questions/1" className="level level2"><div >1</div></Link>
          <Link to="/courses/art-mapp/questions/1" className="level level3"><div >2</div></Link>
          <Link to="/courses/art-mapp/questions/1" className="level level1"><div >3</div></Link>
          {/* <div className="level level4">3</div>
                    <div className="level level3">2</div> */}
        </div>
        <div className="islands island5 bg-image8" >
          <Link to="/courses/art-mapp/questions/1" className="level level2"><div >3</div></Link>
          <Link to="/courses/art-mapp/questions/1" className="level level3"><div >4</div></Link>
          <Link to="/courses/art-mapp/questions/1" className="level level1"><div >5</div></Link>
          {/* <div className="level level2">4</div>
                    <div className="level level3">5</div>
                    <div className="level level5">6</div> */}
        </div>
        <div className="islands island6 bg-image9">
          <Link to="/courses/art-mapp/questions/1" className="level level1"><div >6</div></Link>
          <Link to="/courses/art-mapp/questions/1" className="level level3"><div >7</div></Link>

        </div>
      </div>
    </div>
  )
}



export default ArtMap
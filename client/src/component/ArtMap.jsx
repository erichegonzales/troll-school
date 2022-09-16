
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import {Canvas} from "./Canvas"

const ArtMap = () => {

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
      <div id="canvas">
        <h2>Best way to learn art is to practice! Right click and choose "Save Image As" to save a copy of your drawing to your computer.</h2>
      <Canvas  />
      </div>
  )
}



export default ArtMap
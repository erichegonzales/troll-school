import {useState} from 'react'

function Profile() {

const [user, setUser] =useState("")
// const [progress, setProgress] =useState([1, 2, 3, 4])
const [spellingProgress, setSpellingProgress] =useState([1, 2])
const [mathProgress, setMathProgress] =useState([1, 2, 3])
const [artProgress, setArtProgress] =useState([])
const [historyProgress, setHistoryProgress] =useState([])

  return (
    <div id='profile-component'>
      <div id="profile-greeting">
      Hello {user}! Here is where you can see your lesson progress. For every lesson you complete, you get a star!
      </div>
      <ul id='progress-list'>
        {/* Courses complete:
      {
        progress.map(course => {
          return(
            // <div>
              <img class="course-star" src="https://www.clipartmax.com/png/full/286-2866206_star-small-stars-yellow-transparent.png" alt="A star for completing a course"></img>
            // </div>
          )
        })
      } <br/> */}
        Spelling Lessons:
        {
        spellingProgress.map(course => {
          return(
            // <div>
              <img class="course-star" src="https://www.clipartmax.com/png/full/286-2866206_star-small-stars-yellow-transparent.png" alt="A star for completing a course"></img>
            // </div>
          )
        })
      } <br />
        Math Lessons:
        {
            mathProgress.map(course => {
              return(
                // <div>
                  <img class="course-star" src="https://www.clipartmax.com/png/full/286-2866206_star-small-stars-yellow-transparent.png" alt="A star for completing a course"></img>
                // </div>
              )
            })
          } <br/>
          Art Lessons:
          {
        artProgress.map(course => {
          return(
            // <div>
              <img class="course-star" src="https://www.clipartmax.com/png/full/286-2866206_star-small-stars-yellow-transparent.png" alt="A star for completing a course"></img>
            // </div>
          )
        })
      } <br/>
      History Lessons:
      {
        historyProgress.map(course => {
          return(
            // <div>
              <img class="course-star" src="https://www.clipartmax.com/png/full/286-2866206_star-small-stars-yellow-transparent.png" alt="A star for completing a course"></img>
            // </div>
          )
        })
      } <br/>
      </ul>
      
    </div>
  );
}

export default Profile;

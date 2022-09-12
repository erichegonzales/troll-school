import {useState} from 'react'

function Profile() {

const [user, setUser] =useState("")
const [progress, setProgress] =useState([1, 2, 3, 4])

  return (
    <div>
      <div id="profile-greeting">
      Hello {user}! Here is where you can see your lesson progress. For every lesson you complete, you get a star!
      </div>
      <ul>
      {
        progress.map(course => {
          return(
            // <div>
              <img class="course-star" src="https://www.clipartmax.com/png/full/286-2866206_star-small-stars-yellow-transparent.png" alt="A star for completing a course"></img>
            // </div>
          )
        })
      }
      </ul>
      
    </div>
  );
}

export default Profile;

import {useState} from 'react'
import { WiredCard } from 'wired-elements'; 
import "wired-elements";
 


function Profile() {

const [user, setUser] =useState("Kid who Made a Profile")
const [userProfilePic, setUserProfilePic] =useState("https://www.pngrepo.com/png/380324/512/costume-ghost-goblin-halloween-horror.png")
const [spellingProgress, setSpellingProgress] =useState([1, 2])
const [mathProgress, setMathProgress] =useState([1, 2, 3])
const [artProgress, setArtProgress] =useState([])
const [historyProgress, setHistoryProgress] =useState([])

const [studentsHelped, setStudentsHelped] =useState([{"name": "Drippo", "img": "https://media.istockphoto.com/vectors/cartoon-green-troll-in-the-clothes-of-a-prehistoric-man-isolated-on-vector-id1287432652?b=1&k=20&m=1287432652&s=612x612&w=0&h=87xP41Bj38yf2SpRXVYTmg7jjO3gZl1U7FYFbKrUExY="},
 {"name": "Gorbella", "img":"https://img.freepik.com/premium-vector/female-troll-holding-big-club-illustration-concept_6460-854.jpg"},
 {"name": "Murp", "img":"https://us.123rf.com/450wm/cthoman/cthoman1507/cthoman150704153/42751595-a-cartoon-illustration-of-an-ugly-gremlin-looking-crazy-.jpg?ver=6"}])
const [magicItems, setMagicItems] =useState(["Shiny Rock", "Stinky Boat", "Schopenhauer State Bionic Teleportation Device"])

  return (
    <div id='profile-component'>
      <div id='profile-name-and-pic'>
        <img id="user-pic" src={userProfilePic} /> <br />
        {user}
      </div>
     
      <div>
       <wired-card id="profile-greeting" elevation="3">
        <h2>Hello {user}! </h2>
      Here is where you can see your lesson progress. For every lesson you complete, you get a star!
      </wired-card>
      <wired-card id="students-card">
        Students Helped:
        <div id="students"> 
         {studentsHelped[0].name} <br />
         <img className="student-pic"src={studentsHelped[0].img} />
         {studentsHelped[1].name} <br />
         <img className="student-pic"src={studentsHelped[1].img} /> <br />
         {studentsHelped[2].name} <br />
         <img className="student-pic"src={studentsHelped[2].img} />
         </div>
      </wired-card>
      
      <ul id='progress-list'>
        Spelling Lessons:
        {
        spellingProgress.map(course => {
          return(
              <img className="course-star" src="https://www.clipartmax.com/png/full/286-2866206_star-small-stars-yellow-transparent.png" alt="A star for completing a course"></img>
          )
        })
      } <br />
        Math Lessons:
        {
            mathProgress.map(course => {
              return(
                  <img className="course-star" src="https://www.clipartmax.com/png/full/286-2866206_star-small-stars-yellow-transparent.png" alt="A star for completing a course"></img>
              )
            })
          } <br/>
          Art Lessons:
          {
        artProgress.map(course => {
          return(
              <img className="course-star" src="https://www.clipartmax.com/png/full/286-2866206_star-small-stars-yellow-transparent.png" alt="A star for completing a course"></img>
          )
        })
      } <br/>
      History Lessons:
      {
        historyProgress.map(course => {
          return(
            // <div>
              <img className="course-star" src="https://www.clipartmax.com/png/full/286-2866206_star-small-stars-yellow-transparent.png" alt="A star for completing a course"></img>
            // </div>
          )
        })
      } <br/>
      </ul>   
        <div id='magic-items'>
        Magic Items: {magicItems[0]}, {magicItems[1]}, {magicItems[2]}
        </div>
      </div>
      
    </div>
  );
}

export default Profile;

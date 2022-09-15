import Login from './Login'
import LessonTemplate from './LessonTemplate'

const HomePage = () => {
  return (
    <div className="home-page">

      
 
      <div className='home-page-container'>
        <div className='welcome-image'>
          <img src="troll1.png" alt="troll1" className='troll'/>
        </div>
        <div className='welcome-message'>
          <h2>WELCOME TO TROLL SCHOOL! </h2>

          <p>  The best way to understand a subject you're learning is to teach it to someone else. <br /> <br />
            Troll School is a remote learning application for young learners to practice fundamental school subjects. <br /><br />
            Our lessons are presented as opportunities to guide friendly troll creatures through their own educational journeys. <br />
            Our users gain a stronger, more lasting grasp of their lessons by taking on the role of a helpful mentor.

            <br /> <br />  <small>Ready to begin? Click the orange button to create a user profile.</small> </p>
          
          <div className='welcome-message button'>create</div>
        </div>

      </div>
    </div>
  );
}

export default HomePage;

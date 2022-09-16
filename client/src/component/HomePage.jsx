import Login from './Login'
import LessonTemplate from './LessonTemplate'

const HomePage = () => {
  return (
    <div className="home-page">
      <div className='home-page-container'>
        <div className='welcome-image'>
          <img src="troll-flower.png" alt="troll1" className='troll'/>
        </div>
        <div className='welcome-message'>
          <h2>WELCOME TO TROLL SCHOOL! </h2>

          <p>A remote learning app for young students.<br /><br />
          The best way to learn a new subject is to teach it to someone else. <br /> <br />
            
            Our lessons are presented as opportunities to guide friendly troll creatures through their own educational journeys. <br /> <br />
            Our users gain a stronger, more lasting grasp of their lessons by taking on the role of a helpful mentor.

            <br /> <br />  <small>Ready to begin? Click the orange button to create a user profile.</small> </p>
          
          <div className='welcome-message button'>create</div>
        </div>

      </div>
    </div>
  );
}

export default HomePage;

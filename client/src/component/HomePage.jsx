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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ea repudiandae optio nemo facere sint dolorem vel ipsum exercitationem esse rerum quae voluptates at, in unde ad error dolores nostrum.</p>
          
          <div className='welcome-message button'>create</div>
        </div>

      </div>
    </div>
  );
}

export default HomePage;

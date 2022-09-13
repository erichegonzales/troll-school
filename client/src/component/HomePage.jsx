import Login from './Login'

const HomePage = () => {
  return (
    <div className="home-page">
      <div className='home-page-container'>
        <div className='welcome-image'>
          <img src="https://o.remove.bg/downloads/eec5d83a-0559-48e6-9490-9b4e253dfc37/imagens-creek-trolls-creek-troll-a-little-positivity-11562911157rnx6onkfxm-removebg-preview.png" alt="troll1" className='troll'/>
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

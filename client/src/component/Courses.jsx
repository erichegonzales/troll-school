import { Link } from "react-router-dom"

const Courses = () => {
  return (
    <div className="coures-page">
      <div className="category-container">
        
          <Link to="/courses/math-mapp">
            <div className="category cat-1">Math</div>
          </Link>
          <Link to="/courses/math-mapp">
            <div className="category cat-2"> Spelling</div>
          </Link>
        
          <Link to="/courses/math-mapp">
            <div className="category cat-3">Art</div>
          </Link>
          <Link to="/courses/math-mapp">
            <div className="category cat-4">History</div>
          </Link>
        </div>
      </div>
    
  );
} 

export default Courses;

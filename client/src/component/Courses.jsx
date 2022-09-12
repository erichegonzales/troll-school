import { Link } from "react-router-dom"

const Courses = () => {
  return (
    <div>
      <div className="category-container">
        <div className="category-container-row">
          <Link to="/courses/math-mapp">
            <div className="category cat-1">Math</div>
          </Link>
          <div className="category cat-2"> Spelling</div>
        </div>
        <div className="category-container-row">
          <div className="category cat-3">Art</div>
          <div className="category cat-4">History</div>
        </div>
      </div>
    </div>
  );
}

export default Courses;

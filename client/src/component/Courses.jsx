import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const handleCourseHover = () => {
}

const Courses = () => {
  return (
    <div className="course-page">
      <div className="category-container">
          <Link to="/courses/math-mapp">
            <div className="category cat-1" onMouseOver={handleCourseHover}>Math</div>
          </Link>
          <Link to="/courses/spelling-mapp">
            <div className="category cat-2"> Spelling</div>
          </Link>
          <Link to="/courses/art-mapp">
            <div className="category cat-3">Art</div>
          </Link>
          <Link to="/courses/history-mapp">
            <div className="category cat-4">History</div>
          </Link>
        </div>
      </div>
  );
} 

export default Courses;

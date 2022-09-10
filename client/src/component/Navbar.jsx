import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="nav-btn">
                <Link to="/">Home</Link>
            </div>
            <div className="nav-btn">
                <Link to="/courses">Courses</Link>
            </div>
            <div className="nav-btn">
                <Link to="/profile">Profile</Link>
            </div>
            <div className="nav-btn">
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}



export default Navbar
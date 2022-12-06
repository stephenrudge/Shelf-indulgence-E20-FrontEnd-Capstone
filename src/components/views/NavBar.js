import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () =>{
    const navigate = useNavigate()

    return(
        <ul className="navbar">
        <li className="navbar__item active">
                <Link className="navbar__link" to="/home">Home</Link>
            </li>
        <li className="navbar__item active">
            <Link className="navbar__link" to="/finishedBooks">Finished Books</Link>
        </li> 
        
        <li className="navbar__item active">
            <Link className="navbar__link" to="/addBook">Add Book</Link>
        </li> 
        {
            localStorage.getItem("capstone_user")
                ? <li className="navbar__item navbar__logout">
                    <Link className="navbar__link" to="" onClick={() => {
                        localStorage.removeItem("capstone_user")
                        navigate("/", {replace: true})
                    }}>Logout</Link>
                </li>
                : ""
        }
    </ul>
    )
}
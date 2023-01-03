import { Link } from "react-router-dom";



const Navbar = () => {
    return ( 

        <div> 

          <nav className="navbar">
            <h2 className="primary-color">Notes App</h2>
            <div>

                <Link to="/">Home</Link>
                <Link to="" className="ml-3">New Note</Link>
            </div>
            </nav>  
        </div>
     );
}
 
export default Navbar;
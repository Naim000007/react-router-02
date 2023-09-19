import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <Link to='/'>Home</Link>
            <Link to='/friends'>Friends</Link>
            <Link to = '/post'>Post</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    );
};

export default Header;
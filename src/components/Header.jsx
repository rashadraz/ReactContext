import { Link } from "react-router-dom";
import './styles.css';



function Header() {
  return (
    <div>
        <span className="header">React context api Tutorial</span>
        <ul className="nav">
            <li className="prod">
                <Link to="/">Home Page</Link>
            </li>
            <li className="prod1">
                <Link to="/cart">Cart Page</Link>
            </li>
        </ul>
    </div>
  )
}
export default Header;

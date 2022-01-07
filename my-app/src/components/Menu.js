import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import '../css/main.css';
function Menu() {
    return (
      <div className="menu">
        <p>Qiaochu Wang/ Web developer</p>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/resume">Resume</Link>
        <Link className="link" to="/contact">Contact Me</Link>
        <Link className="link" to="/hire">Hire Me!</Link>
      </div>
    )
}

export default Menu;
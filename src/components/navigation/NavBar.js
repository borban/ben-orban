import React, {Component} from 'react';
import NavButton from "./NavButton";
import "./NavBar.css";

class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <NavButton label="Home" path="/home"/>
                <NavButton label="Skills" path="/skills"/>
                <NavButton label="Experience" path="/experience"/>
                <NavButton label="Accomplishments" path="/accomplishments"/>
                <NavButton label="GitHub" path="/github"/>
            </div>
        );
    }
}

export default NavBar;
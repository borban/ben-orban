import React from 'react';
import './NavButton.css';
import {Link} from "react-router-dom";

const NavButton = props => {
    return (
        <Link className="NavButton" to={props.path}>
            {props.label}
        </Link>
    );
};

export default NavButton;

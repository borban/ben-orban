import React, {Component} from 'react';
import NavButton from "./NavButton";

class Layout extends Component {

    render() {
        const navHome = () => {
            alert("Navigated Home!")
        };

        return (
            <div>
                <NavButton label="Home" navigate={navHome}/>
                <NavButton label="Skills" navigate={navHome}/>
                <NavButton label="Experience" navigate={navHome}/>
                <NavButton label="Accomplishments"navigate={navHome}/>
                <NavButton label="GitHub" navigate={navHome}/>
            </div>
        );
    }
}

export default Layout;
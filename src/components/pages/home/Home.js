import React, {Component} from 'react';
import './Home.css';
import Overview from "./Overview";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Overview/>
            </div>
        );
    }
}

export default Home;
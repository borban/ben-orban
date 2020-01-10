import React, {Component} from 'react';
import './Home.css';
import MainBanner from "./MainBanner";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <MainBanner>My quote</MainBanner>
            </div>
        );
    }
}

export default Home;
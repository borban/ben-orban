import React, {Component} from 'react';
import './Home.css';
import MainBanner from "./MainBanner";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <MainBanner>This is the main banner...</MainBanner>
            </div>
        );
    }
}

export default Home;
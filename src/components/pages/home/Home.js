import React, {Component} from 'react';
import './Home.css';
import Banner from "../../common/Banner";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Banner>“I have been impressed with the urgency of doing. Knowing is not enough; we must apply.
                    Being willing is not enough; we must do.” – Leonardo da Vinci</Banner>
            </div>
        );
    }
}

export default Home;
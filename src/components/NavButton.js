import React, {Component} from 'react';
import './NavButton.css';

class NavButton extends Component {
    render() {
        return (
            <div className="NavButton" onClick={this.props.navigate}>
                {this.props.label}
            </div>
        );
    }
}

export default NavButton;

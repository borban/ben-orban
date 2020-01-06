import React, {Component} from 'react';
import NavBar from "./NavBar";
import Content from "./Content";
import {Route, Switch} from "react-router";
import Home from "./Home";
import Skills from "./Skills";
import Experience from "./Experience";
import Accomplishments from "./Accomplishments";
import GitHub from "./GitHub";

class Layout extends Component {

    render() {
        return (
            <div>
                <NavBar/>
                <Content>
                    <Switch>
                        <Route path="/skills" component={Skills}/>
                        <Route path="/experience" component={Experience}/>
                        <Route path="/accomplishments" component={Accomplishments}/>
                        <Route path="/github" component={GitHub}/>
                        <Route path="/home" component={Home}/>
                    </Switch>
                </Content>
            </div>
        );
    }
}

export default Layout;
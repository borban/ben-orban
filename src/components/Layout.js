import React, {Component} from 'react';
import NavBar from "./NavBar";
import Content from "./Content";
import {Route, Switch} from "react-router";
import "./Layout.css";
import Loading from "./Loading";

const Home = React.lazy(() => import("./Home"));
const Skills = React.lazy(() => import("./Skills"));
const Experience = React.lazy(() => import("./Experience"));
const Accomplishments = React.lazy(() => import("./Accomplishments"));
const GitHub = React.lazy(() => import("./GitHub"));

class Layout extends Component {

    render() {
        return (
            <div className="Layout">
                <NavBar/>
                <Content>
                    <Switch>
                        <Route path="/skills" component={Loading(Skills)}/>
                        <Route path="/experience" component={Loading(Experience)}/>
                        <Route path="/accomplishments" component={Loading(Accomplishments)}/>
                        <Route path="/github" component={Loading(GitHub)}/>
                        <Route path="/home" component={Loading(Home)}/>
                    </Switch>
                </Content>
            </div>
        );
    }
}

export default Layout;
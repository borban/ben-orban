import React, {Component} from 'react';
import NavBar from "../navigation/NavBar";
import Content from "./Content";
import {Route, Switch} from "react-router";
import "./Layout.css";
import Loading from "./Loading";
import Footer from "./Footer";

const Home = React.lazy(() => import("../pages/Home"));
const Skills = React.lazy(() => import("../pages/Skills"));
const Experience = React.lazy(() => import("../pages/Experience"));
const Accomplishments = React.lazy(() => import("../pages/Accomplishments"));
const GitHub = React.lazy(() => import("../pages/GitHub"));

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
                <Footer/>
            </div>
        );
    }
}

export default Layout;
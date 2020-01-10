import React, {Component} from 'react';
import NavBar from "../navigation/NavBar";
import Content from "./Content";
import {Route, Switch} from "react-router";
import "./Layout.css";
import Loading from "./Loading";
import Footer from "./Footer";
import ContentLine from "./ContentLine";

const Home = React.lazy(() => import("../pages/home/Home"));
const Skills = React.lazy(() => import("../pages/skills/Skills"));
const Experience = React.lazy(() => import("../pages/experience/Experience"));
const Accomplishments = React.lazy(() => import("../pages/accomplishments/Accomplishments"));
const GitHub = React.lazy(() => import("../pages/github/GitHub"));

class Layout extends Component {

    render() {
        return (
            <div className="Layout">
                <NavBar/>
                <ContentLine/>
                <Content>
                    <Switch>
                        <Route path="/skills" component={Loading(Skills)}/>
                        <Route path="/experience" component={Loading(Experience)}/>
                        <Route path="/accomplishments" component={Loading(Accomplishments)}/>
                        <Route path="/github" component={Loading(GitHub)}/>
                        <Route path="/home" component={Loading(Home)}/>
                        <Route path="/" component={Loading(Home)}/>
                    </Switch>
                </Content>
                <Footer/>
            </div>
        );
    }
}

export default Layout;
/*
 * File: Skeleton.jsx
 * Author: Bach Tran (batr.schip@gmail.com)
 * License: GPL-3.0
 * File contains the main skeletal structure
 * of the single page application, including
 * the NavBar.
 */
import React from 'react'
import TopNavbar from "./Navbar/TopNavbar";
import './styles.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from "./Pages/Home";
import {About} from "./Pages/About";
import {NoMatch} from "./Pages/NoMatch";

/**
 * The skeletal structure of the canvas.
 * This directly interacts with the App component.
 * Contains: Sidebar, Navbar
 * @since 1.0
 * @author Bach Tran
 * @licence GPL-3.0
 */

const items = [
    {name: 'Home', label: 'home'},
    {name: 'Contribute', label: 'contribute'},
    {name: 'Query', label: 'query'},
    {name: 'Settings', label: 'settings'},
    {name: 'Language', label: 'language'},
    {name: 'About', label: 'about'}
];

class Skeleton extends React.Component {
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <TopNavbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route component={NoMatch} />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default Skeleton;
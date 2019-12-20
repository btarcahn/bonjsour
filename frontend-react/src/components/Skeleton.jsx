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
import Sidebar from "./Sidebar/Sidebar";
import './styles.css'
import SignupForm from "./SignupForm";
class Skeleton extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <TopNavbar />
                    <Sidebar />
                </div>
                <div className="Center-navigation">
                    <SignupForm />
                </div>
            </div>
        );
    }
}

export default Skeleton;
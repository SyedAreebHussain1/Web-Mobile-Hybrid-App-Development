import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import Home from "../containers/Home";
import About from "../containers/About";

class AppRouter extends Component{
    render(){
        return(
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </Router>
        )
    }
}
export default AppRouter

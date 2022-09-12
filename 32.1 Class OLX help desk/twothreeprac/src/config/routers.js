import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "../conatiners/Home";
import Chat from "../conatiners/Chat";
class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/chat' component={Chat} />
                </Switch>
            </Router>
        )
    }
}
export default AppRouter
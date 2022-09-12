import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../containers/Home/index';
import Chat from '../containers/Chat';
// react-router-dom ka old version hum use kar rahy ha "react-router-dom": "4.3.1",
class AppRouter extends Component {
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
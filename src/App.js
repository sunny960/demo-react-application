import React, {Component} from 'react';
import './style/custom.css';
import {Router, Route} from 'react-router-dom';
import {history} from "./utils/history";
import {Redirect, Switch} from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { ThemeProvider } from 'styled-components'


import {dispatchAction} from "./utils";
import {connect} from "react-redux";
import Home from "./modules/home";
import Team from "./modules/team";
import Franchise from "./modules/franchise";
import About from "./modules/about";
import Theme from './theme'



class App extends Component {

    render() {

        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <ThemeProvider theme={Theme}>
                <Router history={history}>
                    <Switch>
                        <Route exact path={'/'} component={Home}/>
                        <Route exact path={'/team'} component={Team}/>
                        <Route exact path={'/franchise'} component={Franchise}/>
                        <Route exact path={'/about'} component={About}/>
                        <Redirect exact from='*' to="/"/>
                    </Switch>
                </Router>
                </ThemeProvider>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
};
export default connect(mapStateToProps, {dispatchAction})(App);
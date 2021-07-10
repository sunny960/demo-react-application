import React, {Component} from 'react';
import './style/stylesheet.css';
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
import Program from "./modules/programs";
import Session from "./modules/session";
import ResidentialFitnessCollaboration from "./modules/residentialFitnessCollaboration";
import PersonalTrainingPage from "./modules/personalTrainingPage";



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
                        <Route exact path={'/program'} component={Program}/>
                        <Route exact path={'/session'} component={Session}/>
                        <Route exact path={'/residential-fitness'} component={ResidentialFitnessCollaboration}/>
                        <Route exact path={'/personal-training'} component={PersonalTrainingPage}/>
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
import React, {Component} from 'react';
import './style/stylesheet.css';
import {Router, Route} from 'react-router-dom';
import {history} from "./utils/history";
import {Redirect, Switch} from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {ThemeProvider} from 'styled-components'
import Home from "./modules/home";
import Theme from './theme'


class App extends Component {

    render() {

        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <ThemeProvider theme={Theme}>
                    <Router history={history}>
                        <Switch>
                            <Route exact path={'/'} component={Home}/>
                            <Redirect exact from='*' to="/"/>
                        </Switch>
                    </Router>
                </ThemeProvider>
            </MuiThemeProvider>
        );
    }
}
export default App
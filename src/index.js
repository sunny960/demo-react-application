import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './App';
import './assets/styles/custom.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import store from './store.js';

function DemoWebApp() {
    return (
        <Provider store={store}>
            <Routes/>
        </Provider>
    );
}


ReactDOM.render(<DemoWebApp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/**
 * Created by kk on 2018/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers'
import App from './App';

import './index.css';
import './components/style/side.css';

const store = createStore (
    reducers
);

ReactDOM.render(

    <Provider store={store}>
        <Router>
            <App></App>
        </Router>
    </Provider>
    ,

    document.querySelector('#root')
);
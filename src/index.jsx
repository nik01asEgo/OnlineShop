import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'material-symbols';
import App from './components/App.jsx';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './store/store'

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Router>
                <App />
            </Router>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)
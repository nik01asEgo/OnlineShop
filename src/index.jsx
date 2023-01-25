import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'material-symbols';
import App from './components/App.jsx';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { bookmark } from './store/reducers/bookmark.js'

const defaultState = {
    bookMark: 0,
};

const store = createStore(bookmark);

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
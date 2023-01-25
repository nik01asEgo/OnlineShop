import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'material-symbols';
import App from './components/App.jsx';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
    bookMark: 0,
};

const reduser = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_BOOK_MARK":
            return { ...state, bookMark: state.bookMark + action.payload }

        case "DEL_BOOK_MARK":
            return { ...state, bookMark: state.bookMark ? state.bookMark - action.payload : 0 }
        default:
            return state
    }
}
const store = createStore(reduser);

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
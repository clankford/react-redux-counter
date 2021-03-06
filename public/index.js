import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// Redux Store
import store from './store';
// Components
import App from './components/App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('content')
);

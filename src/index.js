import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import { store } from './store/configureStore';

import './icomoon/style.css';
import './bootstrap_material.css';
import './style.scss';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

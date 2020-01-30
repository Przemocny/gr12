import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import reducer from './stores/mainStore'


import './style.scss';
import './reset.css';
import './main.css';

import App from './App';

const store = configureStore({
    reducer:{
        main:reducer
    }
})

const ReduxApp = ()=>{
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}


ReactDOM.render(<ReduxApp />, document.getElementById('root'));

import React from 'react'
import ReactDOM from 'react-dom'

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import  middleware from './middleware';
import reducer from './reducers'

import './index.css'
import App from './components/App'

const store = createStore(reducer, middleware)

console.log(store.getState())

ReactDOM.render(
    <Provider store ={store}>
      <App />
    </Provider>
    , document.getElementById('root'))
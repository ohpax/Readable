import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
//import rootReducer from '../reducers/root_reducer';
import rootReducer from './Reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const store = () =>createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store()}>
    <App />
</Provider>, document.getElementById('root'));

registerServiceWorker();

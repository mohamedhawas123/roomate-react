import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import flatReducer from './store/reducer/flats'
import { createStore, combineReducers, compose  ,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
  flats: flatReducer
})


const store = createStore(rootReducer, composeEnhances(applyMiddleware(thunk)))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { createStore } from 'redux'
// import reducer from './reducers'
import store from './store/store'

// const store = createStore(reducer)

const render = () => ReactDOM.render(
	<App />, 
	document.getElementById('sceneContainer')
);

render()
store.subscribe(render)

registerServiceWorker();
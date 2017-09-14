import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import toDoApp from './reducers/rootReducer';

const store = createStore(toDoApp);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

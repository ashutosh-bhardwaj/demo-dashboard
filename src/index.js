import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CreateStore from './redux';

const initialStore = {
  phones: [
    {
      model: 'Iphone 7',
      price: 699,
      id: 1110,
      status: 'old',
    },
    {
      model: 'Iphone 8',
      price: 799,
      id: 1111,
      status: 'old',
    },
  ],
  auth: {
    loggedIn: false,
  },
};

const store = CreateStore(initialStore);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

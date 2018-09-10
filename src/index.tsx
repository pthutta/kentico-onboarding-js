require.context('../public/', true);
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import * as ReactDom from 'react-dom';
import * as React from 'react';
import { Provider } from 'react-redux';
import { App } from './components/App';
import { appStore } from './store/appStore';

ReactDom.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById('app-root'));

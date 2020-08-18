import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'upkit/dist/style.min.css';
import Home from './pages/Home';
import { listen } from './app/listener';
import { Provider } from 'react-redux';

import UserAddress from './pages/UserAddress';
import UserAddressAdd from './pages/UserAddressAdd';
import Register from './pages/Register';
import RegisterSuccess from './pages/RegisterSuccess';
import Login from './pages/Login';
import store from './app/store';
import {getCart} from './api/cart';

function App() {

  React.useEffect(() => {
    listen();
    getCart();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/alamat-pengiriman/tambah">
            <UserAddressAdd/>
          </Route>
          <Route path="/alamat-pengiriman">
            <UserAddress/>
          </Route>
          <Route path="/register/berhasil" component={RegisterSuccess}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

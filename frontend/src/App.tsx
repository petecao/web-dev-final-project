import React from 'react';
import './App.css';
import { BrowserRouter, Route, Router, Switch, useHistory } from 'react-router-dom';
import Home from './Home';
import Registration from './Registration';
import Login from './Login';
import Logout from './Logout';
import Profile from './Profile';
import StockData from './StockInfo';
import PageNotFound from './PageNotFound';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/register' component={Registration} />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <Route path='/profile/' component={Profile} />
          <Route path='/stock/:stockId' component={StockData} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;

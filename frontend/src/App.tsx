import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Registration from './Registration';
import Login from './Login';
import Logout from './Logout';
import Search from './Search';
import Profile from './Profile';
import StockInfo from './StockInfo';
import PageNotFound from './PageNotFound';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component ={Home} />
          <Route path='/register' component ={Registration} />
          <Route path='/login' component ={Login} />
          <Route path='/logout' component ={Logout} />
          <Route path='/search' component ={Search} />
          <Route path='/profile/' component ={Profile} />
          <Route path='/stock/:stockId' component ={StockInfo} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

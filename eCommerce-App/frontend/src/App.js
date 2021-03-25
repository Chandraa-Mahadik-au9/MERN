import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header.js';
import Search from './components/Search.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Product from './pages/Product.js';
import Cart from './pages/Cart.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';

const App = () => {
  return (
    <div className="App">
      <Header />
      <hr />
      <Search />
      <hr />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/product/:id' component={Product} />
      <Route path='/cart/:id?' component={Cart} />
      <Route exact path='/' component={Home} />
      <Footer />
    </div>
  );
}

export default App;

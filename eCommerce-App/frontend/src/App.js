import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header.js';
import Search from './components/Search.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Product from './pages/Product.js';

const App = () => {
  return (
    <div className="App">
      <Header />
      <hr />
      <Search />
      <hr />
      <Route exact path='/' component={Home} />
      <Route path='/product/:id' component={Product} />
      <Footer />
    </div>
  );
}

export default App;

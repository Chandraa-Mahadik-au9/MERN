import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Welcome To Deals Wagon.</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;

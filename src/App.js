import React from 'react';
// import Header from './components/Header.js';
// import Hero from './components/Hero'
// import Browse from './components/Browse';
// import Arrived from './components/Arrived.js';
// import Clients from './components/Clients.js';
import { Header, Hero, Browse, Arrived, Clients, Aside, Footer } from './components/index.js';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Browse />
      <Arrived />
      <Clients />
      <Aside/>
      <Footer/>
    </div>
  );
}

export default App;

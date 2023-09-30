import React from 'react';
// import Header from './components/Header.js';
// import Hero from './components/Hero'
// import Browse from './components/Browse';
// import Arrived from './components/Arrived.js';
// import Clients from './components/Clients.js';
import { Header, Hero, Browse, Arrived, Clients, Aside, Footer } from './components/index.js';
function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(function(){
    (async function(){
      const response = await fetch('https://bwacharity.fly.dev/items', {
        headers:{
          "Content-Type" : "application/json",
          "accept" : "application/json",
        }
      });
      const {nodes} = await response.json();
      setItems(nodes);
    })()
  },[]);
  return (
    <div className="App">
      <Header />
      <Hero />
      <Browse />
      <Arrived items={items}/>
      <Clients />
      <Aside/>
      <Footer/>
    </div>
  );
}

export default App;

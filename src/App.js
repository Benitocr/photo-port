import React from 'react';
import './App.css';
import Nav from './components/nav';
import About from './components/about';

function App() {
  return (
   <div>
     <Nav></Nav>
     <main>
       <About></About>
     </main>
   </div>
  );
}

export default App;

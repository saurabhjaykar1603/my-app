import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Project from './views/Project/Project';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

     <Navbar/>
  
     <Project/>

  </>
);


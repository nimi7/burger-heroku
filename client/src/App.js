import React from 'react';
// import { Dropdown } from 'react-bootstrap';
import './App.css';
import GetData from './GetData'
import HomePage from './Burger/Components/Home/HomePage'
import BurgerProfile from './Burger/Burgers/BurgerProfile'
import Navbar from './Burger/Components/Navbar/navbar'
import Footer from './Burger/Components/Footer/Footer'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';




library.add(faPlay);


function App() {


  return (
    <>
    <Navbar/>

     <BrowserRouter>
      
     
        <Switch>

          <Route path="/" exact component={HomePage} />
          <Route path='/Burgers/:id' exact component={BurgerProfile} />
          <Route path="/GetData" exact component={GetData} />

          
        </Switch>
      
      </BrowserRouter>
      <Footer/>
    </>
  );
};

export default App;

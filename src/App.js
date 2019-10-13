import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Section from './components/Section'
import Preorder from './components/Preorder'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Navbar/>
              <Slider/>
              <Section/>
              <Preorder/>
              <Newsletter/>
              <Footer/>
              
            </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
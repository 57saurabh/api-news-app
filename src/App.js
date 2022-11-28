import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import CountryNews from './component/CountryNews';
import  {BrowserRouter as Router, Routes ,Switch, Route, BrowserRouter} from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
    <div>
      <Router>
      <Navbar/>
       <Routes>
      <Route path='/' element={<News/>} />
      <Route path="/news/:id"  exact element={<CountryNews/>} />
   </Routes>  
      </Router>
    </div>
      )
  }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
  <div className="container-fluid">
    <a className="navbar-brand" href="/ ">Daily News</a>
   
    <div className="navbar" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/news/in' className="nav-link" >India</Link>
        </li>
        <li className="nav-item">
          <Link to='/news/us' className="nav-link" >USA</Link>
        </li>
        <li className="nav-item">
          <Link to='/news/ru' className="nav-link" >Russia</Link>
        </li>
       </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
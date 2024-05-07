import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">BookApp</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <Link to="login"> <a class="nav-link active" aria-current="page" href="#">Login</a></Link>  
      <Link to="reg">
      <a class="nav-link" href="#">Register</a>
      </Link>  
      <Link to="booking">
      <a class="nav-link" href="#">Dashboard</a>
      </Link>
      <Link to="admin">
      <a class="nav-link" href="#">admindashboard</a>
      </Link>

      <Link to="calender">
      <a class="nav-link" href="#">calender</a>
      </Link>
      <Link to="calender1">
      <a class="nav-link" href="#">calender1</a>
      </Link>
      </div>
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Nav

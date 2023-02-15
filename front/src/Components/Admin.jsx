import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {  Table } from 'semantic-ui-react'
import { Button} from 'semantic-ui-react'
import axios from 'axios';
import { Link,Routes,Route,BrowserRouter } from 'react-router-dom'




const Admin = () => {
  return (
    <>
<div>
<nav className="navbar navbar-expand-lg bg-warning">
  <div className="container-fluid">
    <a className="navbar-brand" >Employee App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="empform">Employee Form</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</div>

<div className="alert alert-danger" role="alert">
  <h3>Admin zone</h3>
</div>


    </>
  )
}

export default Admin
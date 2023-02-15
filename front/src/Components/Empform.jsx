import React from 'react'

const Empform = () => {
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

<div className="alert alert-dark" role="alert">
  <h3>Employee Form</h3>
</div>

<form>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label className="text-decoration-underline">Name</label>
      <input type="text" className="form-control" id="inputEmail4" placeholder="Name"/>
    </div></div>

    <div className="form-row">
    <div className="form-group col-md-6">
      <label className="text-decoration-underline">Designation</label>
      <input type="text" className="form-control" id="inputEmail4" placeholder="Designation"/>
    </div></div>
    
    <div className="form-row">
    <div className="form-group col-md-6">
      <label className="text-decoration-underline">Location </label>
      <input type="text" className="form-control" id="inputEmail4" placeholder="Location "/>
    </div></div>

    <div className="form-row">
    <div className="form-group col-md-6">
      <label className="text-decoration-underline">Salary </label>
      <input type="number" className="form-control" id="inputEmail4" placeholder="Salary "/>
    </div></div>
  <br/>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>



    </>
  )
}

export default Empform
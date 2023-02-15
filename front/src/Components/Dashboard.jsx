import axios from 'axios'
import React from 'react'
import Empform from './Empform'
import { useEffect } from 'react';
import { useState } from 'react'

const Dashboard = () => {

  const [empData, setEmpData] = useState([]);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
                .then((response) => {
                    setEmpData(response.data);
                })
        
    }, [])


  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg bg-warning">
          <div class="container-fluid">
            <a class="navbar-brand" >Employee App</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link disabled" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="empform">Employee Form</a>
                </li>
              </ul>

            </div>
          </div>
        </nav>
      </div>

      <div class="alert alert-dark" role="alert">
        <h3>Employee Dashboard (Home)</h3>
      </div>


      {/* div.container>div.row>div.col.col-12.col-sm-12.col-md-12.col-lg-12.col-xl-12.col-xxl-12 */}

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">




            {empData.map(
              (item, key) => {
                return <div className="row g-3">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    {/* Card begins */}
                    <div class="card" >
                      <div class="card-body">
                        <h5 class="card-title">{item.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{item.id}</h6>
                        <p class="card-text">{item.email}</p>
                        <p class="text-uppercase">{item.company.name}</p>
                        <a href="#" class="card-link">{item.website}</a>
                      </div>
                    </div>
                    {/* Card ends */}
                  </div>
                </div>

              }
            )}








          </div>
        </div>
      </div>

    </>
  )
}

export default Dashboard
import React from "react";
import { Link } from "react-router-dom";
import Img from '../Assets/img1.jpeg';
import './Login.css'

function Login() {
  
  return (
    <section className="vh-100" id="page">
  <div className="container-fluid" >
    <div className="row">
      <div className="col-sm-6 text-white">

        <div className="px-5 ms-xl-4">
          <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{color: '#709085'}}></i>
          <span className="h1 fw-bold mb-0">WorkFolio</span>
        </div>

        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form style={{width: '23rem'}}>

            <h3 className="fw-normal mb-3 pb-3" style={{letterspacing:' 1px'}}>Log in</h3>

            <div data-mdb-input-init className="form-outline mb-4">
              <input type="email" id="form2Example18" className="form-control form-control-lg" />
              <label className="form-label" for="form2Example18">Email address</label>
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <input type="password" id="form2Example28" className="form-control form-control-lg" />
              <label className="form-label" for="form2Example28">Password</label>
            </div>

            <div className="pt-1 mb-1  justify-content-start  ">
              <button data-mdb-button-init data-mdb-ripple-init className="btn btn-info btn-lg btn-block" type="button" id="signin">Signin</button>
            </div>

            
            <p id="sp-nav">Don't Have an Account? <Link to="/Registration">Sign Up</Link></p>

          </form>

        </div>

      </div>
      <div className="col-sm-6 px-0 d-none d-sm-block">
        <img src={Img}
          alt="Login " className="w-100 vh-100" style={{objectFit:' cover', objectPosition: 'left'}}/>
      </div>
    </div>
  </div>
</section>
    
      
 
  );
}

export default Login;
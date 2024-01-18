import React from "react";
import "./style/LandingPage.css";
import { Link } from "react-router-dom";
import Image from "../assets/store.jpeg"

function LandingPage() {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary"> */}
      <div className="container-fluid text-center">
        <a className="navbar-brand" href="#">
          Pascal-Mart
        </a>
      </div>
      {/* description */}
      <div className="lp-desc" style={{display:'flex',height:'400px'}}>
        <div className="lp-desc-left" style={{width:'30%',marginTop:'100px'}}>
            <h1 className="lp-desc-name-h1" style={{color:'#0081B4',textAlign:'center',fontWeight:'700'}}>Pascal Mart</h1>
            <p className="lp-desc-name-p" style={{color:'#0081B4',textAlign:'center',fontWeight:'700',fontSize:'20px'}}>Elevate your everyday essentials at Pascal Mart, your go-to store for convenience and quality. From fresh groceries to household necessities, find everything you need in one convenient location. Experience hassle-free shopping and exceptional service at Pascal Mart – making your daily routine a breeze.</p>
        </div>
        <div className="lp-desc-right"style={{width:'70%'}}>
            <div className="lp-desc-right-img">
                <img src={Image} alt="..." />
            </div>
        </div>
      </div>

      <div className="lp-feature text-center">
        <h1 className="lp-feature-h1 text-center">OUR FEATURES</h1>
      </div>
      <div className="lp-main" style={{ display: "flex", marginTop: "50px", marginBottom:'80px'}}>
        <div className="lp-main-0" style={{ width: "20%" }}></div>
        <div
          className="lp-main-20"
          style={{ width: "20%", textAlign: "center" }}
        >
            <Link to='/edit'>
            <button type="button" className="btn btn-outline-primary">
            Edit User
          </button>
            </Link>
          
        </div>
        <div
          className="lp-main-40"
          style={{ width: "20%", textAlign: "center", marginTop: "200px" }}
        >
            <Link to='/transaction'>
            <button type="button" className="btn btn-outline-primary">
            Start Transaction
          </button>
            </Link>
          
        </div>
        <div
          className="lp-main-60"
          style={{ width: "20%", textAlign: "center" }}
        >
            <Link to='/recap'>
            <button type="button" className="btn btn-outline-dark" style={{color:'black'}}>
            Recap
          </button>
            </Link>
          
        </div>
        <div className="lp-main-80" style={{ width: "20%" }}></div>
      </div>

      <div className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="#" className="nav-link px-2  ">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2  ">Edit User</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2  ">Start Transaction</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2  ">Input Data</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2  ">About</a></li>
    </ul>
    <p className="text-center" style={{color:'#0081B4'}}>© 2024 PascalMart, Inc</p>
  </div>
    </>
  );
}

export default LandingPage;

import React from 'react'
import "../../../assets/css/LandingPage.css";
import { Link } from "react-router-dom";
import Image from "/img/store.png"


const HomeContent = () => {
  return (
    <><div className="container-fluid text-center">
    <a className="brandApp" href="#">
      Pascal-Mart
    </a>
  </div>
  {/* description */}
    <div className="lp-desc p-4 d-flex">
        <div className="lp-desc-left" style={{width:'50%'}}>
            <h1 className="lp-desc-name-h1" style={{color:'#0081B4',textAlign:'center',fontWeight:'700'}}>Pascal Mart</h1>
            <p className="lp-desc-name-p" style={{color:'#0081B4',textAlign:'center',fontWeight:'700',fontSize:'20px'}}>Elevate your everyday essentials at Pascal Mart, your go-to store for convenience and quality. From fresh groceries to household necessities, find everything you need in one convenient location. Experience hassle-free shopping and exceptional service at Pascal Mart – making your daily routine a breeze.</p>
        </div>
        <div className="lp-desc-right ms-4" style={{width:'45%'}}>
                <img src={Image} alt="..." />
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
        <Link to='/edit-user'>
        <button type="button" className="tombol btn btn-outline-primary">
        Edit User
      </button>
        </Link>
      
    </div>
    <div
      className="lp-main-40"
      style={{ width: "20%", textAlign: "center", marginTop: "200px" }}
    >
        <Link to='/input-data'>
        <button type="button" className="tombol btn btn-outline-primary">
        Start Transaction
      </button>
        </Link>
      
    </div>
    <div
      className="lp-main-60"
      style={{ width: "20%", textAlign: "center" }}
    >
        <Link to='/recap'>
        <button type="button" className="tombol btn btn-outline-dark">
        Recap
      </button>
        </Link>
      
    </div>
    <div className="lp-main-80" style={{ width: "20%" }}></div>
  </div>
</>
  )
}

export default HomeContent
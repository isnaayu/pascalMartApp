import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary justify-content-center border-bottom pb-3 mb-3">
      <ul className='navbar-nav mr-auto'>
        <li className="nav-item">
        <Link className="px-2 LinkNav" to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
        <Link className="px-2 LinkNav" to={"/editUser"}>Edit User</Link>
        </li>
        <li className="nav-item">
        <Link className="px-2 LinkNav" to={"/input-data"}>Input Data</Link>
        </li>
        <li className="nav-item">
        <Link className="px-2 LinkNav" to={"/recap-trx"}>Recap Transaction</Link>
        </li>
        <li className="nav-item">
        <Link className="px-2 LinkNav" to={""}>About</Link>
        </li>
        <li className="nav-item">
        <Link className="px-2 LinkNav" to={"/login"}>Logout</Link>
        </li>
      </ul>
    </Navbar>
    </>
  )
}

export default Header
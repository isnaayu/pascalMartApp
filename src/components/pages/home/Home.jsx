import React from 'react'
import HomeContent from './HomeContent'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import WithAuth from '../auth/withAuth'

const Home = () => {
  return (
    <>  
    <HomeContent/>
    <Header/>
    <Footer/>
    </>
  )
}

export default WithAuth(Home)
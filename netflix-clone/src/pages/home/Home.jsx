import React from 'react'

import Footer from '../../components/footer/Footer'
import Header from '../../components/Header/Header'
import Banner from '../../components/banner/Banner'
import Rowlist from '../../components/Rows/Row list/Rowlist'

function Home() {
  return (
    <>
        <Header/>
        <Banner/>
        <Rowlist/>
        <Footer/>
    </>
  )
}

export default Home
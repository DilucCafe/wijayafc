import React from 'react'
import Navbar from './Components/Navbar'
// import Masthead from './Components/Masthead'
import Services from './Components/Services'
import Products from './Components/Products'
import Teams from './Components/Teams'
// import Contacts from './Components/Contacts'
import ProductModal from './Components/ProductModal'
import Footer from './Components/Footer'
import Carousel from './Components/Carousel'

function App() {
  return (
    <>
    <body id="page-top">
        <Navbar />
        {/* <Masthead /> */}
        <Carousel />
        <Services />
        <Products />
        <Teams />
        {/* <Contacts /> */}
        <ProductModal />
        <Footer />
    </body>
    </>
  )
}

export default App

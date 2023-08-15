import React ,{useState}from 'react'
import Header from '../component/Header'
import Collections from '../component/Collections'
import Footer from '../component/Footer'
import Banner from '../component/Banner'
import { Gents,Ladies } from '../data';
import WomenCollection from '../component/WomenCollection'

const MainPage = () => {
    const [gensState,setgensState]=useState(Gents)
    const [womensState,setwomensState]=useState(Ladies)
    
  return (
    <div>
        <Header/>
        <Banner/>
        <Collections gentsfashion={gensState}/>
        <WomenCollection ladiesfashion={womensState}/>
        <Footer/>

    </div>
  )
}

export default MainPage
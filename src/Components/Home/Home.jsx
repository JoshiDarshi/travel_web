import React,{useEffect} from 'react'
import './home.css'
import sea from './sea.mp4'
import {GrLocation} from 'react-icons/gr'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {TbApps} from 'react-icons/tb'
import {BsListTask} from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'



function Home() {
  useEffect(()=>{
    Aos.init({duration:2000 })
    },[])
  return (
    <section className='home'>
       <div className='overlay'></div>
        <video src={sea} muted autoPlay loop type="video/mp4"></video>
        <div className="homecontent container">
         <div className="textDiv">
         <span data-aos="fade-up" className='smallText'>
            Our Pacakges
         </span>
         <h1 className="homeTitle">
          Search Your Holiday
         </h1>
         </div>
         <div data-aos="fade-up" className="cardDiv grid">
           <div className="destinaionInput">
            <label htmlFor="city">
             Search Your Destination 
            </label>
            <div className="input flex">
             <input type='text' placeholder='Enter Name Here...'/>
             <GrLocation className='icon'/>
            </div>
           </div>
           <div className="dateInput">
            <label htmlFor="date">
             Search Your Date
            </label>
            <div className="input flex">
             <input type='date' placeholder='Enter Date Here...'/>
             
            </div>
           </div>
           <div className="priceInput">
            <div className="label_total">
            <label htmlFor="price">
             Max Price
            </label>
            <h3 className="total">$5000</h3>
            </div>
            
            <div className="input flex">
             <input type='range' max="5000" min="1000"/>
             
            </div>
           </div>
         </div>
         <div data-aos="fade-up" className="homeFooterIcons flex">
            <div className="rightIcons">
            <FiFacebook className="icon"/>
              <AiOutlineInstagram className="icon"/>
              <FaTripadvisor className="icon"/>
            </div>
            <div className="leftIcons">
              
              <TbApps className="icon"/>
              <BsListTask className="icon"/>
            </div>
         </div>
        </div>
       
    </section>
  )
}

export default Home
import React,{useEffect} from 'react'
import './footer.css'
import video_2 from './video_2.mp4'
import { FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Footer() {
  useEffect(()=>{
    Aos.init({duration:2000 })
    },[])
  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video_2} loop muted autoPlay type="video/mp4" />
      </div>
      <div className="secContent container">
        <div className="contactDiv">
          <div data-aos="fade-up" className="text">
            <small>Keep in Touch</small>
            <h2>Travel With Us</h2>
          </div>
          <div className="inputDiv flex">
            <input data-aos="fade-up" type='text' placeholder='Enter Your Email Address' />
            <button data-aos="fade-up" className='btn flex' type='submit'>
              Send<FiSend className='icon' />
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href='#' className='logo flex'>
                <MdOutlineTravelExplore className='icon' />
                Travel.
              </a>
            </div>
            <div className="footerParagraph" data-aos="fade-up">
              Many people travel for different purposes. Whether it is for a business trip or a holiday trip, we see people travelling often. Some people prefer a hilly area for travelling while the others like travelling to places with beaches.
            </div>
            <div className="footerSocial" data-aos="fade-up">
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>
          </div>
          
          <div className="footerLinks grid">
            {/* group one */}
            <div className="linkGroup" data-aos="fade-up" data-aos-duration='3000'>
              <span className="groupTitle">
                Our Agency
                </span>
                <li className="footerList flex">
                  <FaChevronRight className='icon' />
                  Services
                </li>
                <li className="footerList flex">
                  <FaChevronRight className='icon' />
                  Insurance
                </li>
                <li className="footerList flex">
                  <FaChevronRight className='icon' />
                  Agency
                </li>
                <li className="footerList flex">
                  <FaChevronRight className='icon' />
                  Tourism
                </li>
                <li className="footerList flex">
                  <FaChevronRight className='icon' />
                  Payment
                </li>
              
            </div>
            {/* group two */}
            <div className="linkGroup" data-aos="fade-up" data-aos-duration='4000'>
              <span className="groupTitle">
                PATNERS
                </span>
                <li className="footerList flex">
                  <FaChevronRight className='icon' />
                  Booking
                </li>
                <li className="footerList flex">
                  <FaChevronRight className='icon' />
                  RentCars
                </li>
                <li className="footerList flex">
                  <FaChevronRight className='icon' />
                  HostelWorld
                </li>
                <li className="footerList flex">
                  <FaChevronRight className='icon' />
                  Trivago
                </li>
                <li className="footerList flex">
                  <FaChevronRight className='icon' />
                  TripAdvisior
                </li>
              
            </div>
            {/* group three */}
            <div className="linkGroup" data-aos="fade-up" data-aos-duration='5000'>
              <span className="groupTitle">
                LAST MINUTE
                </span>
                <li className="footerList flex">
                  <FaChevronRight className='icon' />
                  London
                </li>
                <li className="footerList flex">
                  <FaChevronRight className='icon' />
                  California
                </li>
                <li className="footerList flex">
                  <FaChevronRight className='icon' />
                  Indonesia
                </li>
                <li className="footerList flex">
                  <FaChevronRight className='icon' />
                  New York
                </li>
                <li className="footerList flex">
                  <FaChevronRight className='icon' />
                  BaliSingapore
                </li>
              
            </div>
          </div>
          
        <div className="footerDiv flex">
          <small>BEST WEBSITE TO TRAVEL</small>
          <small>COPYRIGHTS RESERVED@2023</small>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
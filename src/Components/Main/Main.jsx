import React,{useEffect} from 'react'
import './main.css'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'

import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img1,
    descTitle: 'Singapore Forest',
    location: 'Singapore',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Explore the most popular forest trails in Singapore with hand-curated trail maps and driving directions as well as detailed reviews and photos from hikers, campers and nature lovers like you.'

  },
  {
    id: 2,
    imgSrc: img2,
    descTitle: 'Niagara',
    location: 'Niagara Falls',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'Niagara Falls (/naɪˈæɡərə/) is a group of three waterfalls at the southern end of Niagara Gorge, spanning the border between the province of Ontario in Canada and the state of New York in the United States'

  },
  {
    id: 3,
    imgSrc: img3,
    descTitle: 'Paris',
    location: 'Street 12',
    grade: 'CULTURAL RELAX',
    fees: '$1700',
    description: 'Paris, France capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.'

  },
  {
    id: 4,
    imgSrc: img4,
    descTitle: 'London',
    location: 'London Bridge',
    grade: 'CULTURAL RELAX',
    fees: '$3000',
    description: 'Several bridges named London Bridge have spanned the River Thames between the City of London and Southwark, in central London. It is the oldest road-crossing location on the river. '

  },
  {
    id: 5,
    imgSrc: img5,
    descTitle: 'Switzerland',
    location: 'Lane',
    grade: 'CULTURAL RELAX',
    fees: '$3500',
    description: 'Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. Its cities contain medieval quarters, with landmarks like capital Bern’s Zytglogge clock tower and Lucerne’s wooden chapel bridge. '

  },
  {
    id: 6,
    imgSrc: img6,
    descTitle: 'Kedarnath',
    location: 'Kedarnath Temple',
    grade: 'HEAVEN ON EARTH',
    fees: '$500',
    description: 'Kedarnath is a town and Nagar Panchayat in Rudraprayag district of Uttarakhand, India, known primarily for the Kedarnath Temple. '

  },
  {
    id: 7,
    imgSrc: img7,
    descTitle: 'TungNath',
    location: 'TungNath Temple',
    grade: 'HEAVEN ON EARTH',
    fees: '$650',
    description: 'Tungnath is one of the highest Shiva temples in the world and is the highest of the five Panch Kedar temples located in the Rudraprayag district, in the Indian state of Uttarakhand.'
  },
  {
    id: 8,
    imgSrc: img8,
    descTitle: 'Dubai',
    location: 'Burj Khalifa',
    grade: 'Tallest Building',
    fees: '$650',
    description: 'The Burj Khalifa is a skyscraper in Dubai, United Arab Emirates. It is the worlds tallest building.'
  },
  {
    id: 9,
    imgSrc: img9,
    descTitle: 'Amazon',
    location: 'Amazon Rain Forest',
    grade: 'Rain Forest',
    fees: '$1550',
    description: 'The Amazon rainforest, covering much of northwestern Brazil and extending into Colombia, Peru and other South American countries, is the world’s largest tropical rainforest, famed for its biodiversity.'
  }
]
function Main() {
   
  useEffect(()=>{
    Aos.init({duration:2000 })
    },[])
  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 className="tittle" data-aos="fade-right">
          Most Visited Destinations
        </h3>
      </div>
      <div className="secContent grid">
        {
          Data.map(({ id, imgSrc, descTitle, location,
            grade, fees, description }) => {
            return (
              <div 
              data-aos="fade-up"
              key={id} className='singleDestination'>
                <div className="imgDiv">
                  <img src={imgSrc} alt={descTitle} />
                </div>
                <div className="cardInfo" style={{padding:10}}>
                  <h4 className="descTitle">
                    {descTitle}
                  </h4>
                  <span className='continent flex'>
                    <HiOutlineLocationMarker className='icon' />
                    <span className='name'>{location}</span>
                  </span>
                  <div className="fees flex">
                  <div className="grade">
                    <span>{grade}<small>+1</small></span>
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                  </div>
                  <div className="desc" style={{color:'gray',fontSize:14}}>
                    <p>{description}</p>
                  </div>
                  <button className='btn flex' style={{marginTop:10}}>
                   Details<HiOutlineClipboardCheck className='icon' style={{alignSelf:'center',fontSize:18}}/>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main
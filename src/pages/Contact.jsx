import React from 'react'


import Gmap from '../assets/Gmap.png'

const Contact = () => {
  return (
    <div>


      <div className='mx-auto text-center my-8'>
        <h1>Contact and Location</h1>
        <h3>Clean and hip locale, with a variety of services. Everything but hair.</h3>
      </div>

      <div className='mx-auto w-4/5'>
        <img src={Gmap} alt="gmap" />
      </div>


      <div className='flex flex-row justify-between items-center'>
        <div>
          <h2>Address: </h2>
          <h4> 9630 Westview Drive <br /> Coral Springs, FL 33076</h4>
          <h2>Phone Number:</h2>
          <h4>(954) 575-3366</h4>
        </div>

        <div>
          <h2>Business Hours:</h2>
          <h2>Monday - Saturday</h2>
          <h4> 9:00am - 7:00pm</h4>
          <h2>Sunday</h2>
          <h4>10:00am - 5:00pm</h4>
        </div>
      </div>



        <div className='my-12'>
          <h2>What is around the area?</h2>
          <h4>Winn Nail Spa is located in Coral Springs on the SW corner of University Drive & Westview Drive in the North Springs plaza, between a Target and a Ross. The North Springs Plaza also has a Payless Shoes and Great Clips hair salon. North Springs Plaza is across from the Regal Magnolia 16 Theater.</h4>
        </div>

    </div>
  )
}

export default Contact
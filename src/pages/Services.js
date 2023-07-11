import React from 'react'


import Table1 from '../components/Table1'
import Table2 from '../components/Table2'
import Table3 from '../components/Table3'
import Table4 from '../components/Table4'
import Table5 from '../components/Table5'
import Table6 from '../components/Table6'
import Table7 from '../components/Table7'


export default function Services() {
  return (
    <div>
      {/* services title */}
      <div className='title-div my-16'>
        <h1 className='text-center leading-4'>Services and Prices</h1>
        <h3 className='text-center leading-4'>All of the products we use are guaranteed brand name and high quality.</h3>
        <h3 className='text-center leading-4'>Prices do not include gratuity/tips.</h3>
      </div>

      {/* services types description */}
      <div className='flex flex-col md:flex-row md:space-x-4 md:justify-around'>
        <div className='flex flex-col space-y-8'>
          <div className='max-w-[600px]'>
            <h2>Regular Manicure: $20</h2>
            <p>Manicure includes nail trimming, shaping, buffing, cuticle grooming & conditioning. Lotion massage & color polish of your choice.</p>
            <h4>Min. Duration: 20 mins</h4>
          </div>

          <div className='max-w-[600px]'>
            <h2>Signature Manicure: $26</h2>
            <p>Regular manicure with added hand & arm massage, natural sugar crystal scrub to exfoliate all dry skin. Followed by finishing lotion, and color polish of your choice.</p>
            <h4>Min. Duration: 25 mins</h4>
          </div>

          <div className='max-w-[600px]'>
            <h2>Gel Manicure: $35</h2>
            <p>Regular manicure with the benefit of gel polish. Does not chip, lasts up to two weeks, and no need for drying time! Provides a strong natural nail protection with a glossy finish.</p>
            <h4>Min. Duration: 30 mins</h4>
          </div>
          <div className='max-w-[600px]'>
            <h2>Royal Manicure: $35</h2>
            <p>All the benefits of a manicure, plus an exfoliating hand massage to remove dry and dead skin This reveals new & smooth skin. Followed by a paraffin wax treatment, hot towels, and with a glass of wine.</p>
            <h4>Min. Duration: 30 mins</h4>
          </div>
        </div>




        <div className='flex flex-col space-y-8 mt-8 md:mt-0 '>
          <div className='max-w-[600px]'>
              <h2>Regular Pedicure: $30</h2>
              <p>Pedicure includes nail trimming, shaping, buffing, cuticle grooming & conditioning. Lotion massage & color polish of your choice.</p>
              <h4>Min. Duration: 25 mins</h4>
            </div>

            <div className='max-w-[600px]'>
              <h2>Signature Pedicure: $37</h2>
              <p>This selection has a sugar crystal scrub to exfoliate and smooth down your skin, as well as a cooling gel to alleviate muscle pain.</p>
              <h4>Min. Duration: 30 mins</h4>
            </div>

            <div className='max-w-[600px]'>
              <h2>Winn Deluxe Pedicure: $47</h2>
              <p>An upgraded version of the Signature Pedicure to soften your skin and ease you into relaxation. This set includes a longer leg massage, a hot towel wrap, natural sugar crystal scrub, moisturizing masque, and a bath salt soak all in your preferred fragrance of either Cucumber, Grapefruit, Lavender, Ocean, or Tangerine.</p>
              <h4>Min. Duration: 45 mins</h4>
            </div>

            <div className='max-w-[600px]'>
              <h2>Royal Deluxe Pedicure: $57</h2>
              <p>Rejuvenate your skin with our most hydrating selection, leaving your skin supple and silky soft. You receive everything that our Winn Deluxe Pedicure has to offer in your preferred fragrance of either Cucumber, Grapefruit, Lavender, Ocean, or Tangerine with an additional paraffin wax treatment.</p>
              <h4>Min. Duration: 45 mins</h4>
            </div>

            <div className='max-w-[600px]'>
              <h2>Royal Hot Stone Pedicure: $67</h2>
              <p>The ultimate experience of relaxation, the hot stone massage helps to increase circulation and loosen tension in your muscles. Includes everything that will come with our Royal Deluxe pedicure in your preferred fragrance of either Cucumber, Grapefruit, Lavender, Ocean, or Tangerine.</p>
              <h4>Min. Duration: 50 mins</h4>
            </div>




        </div>


      </div>







      {/* tables */}

      <div className='my-16'>
        <div className='mt-4 w-full'>
          <h1 className='text-center'>Natural Nail Treatments</h1>
          <Table1 />
        </div>

        <div className='mt-4 w-full'>
          <h1 className='text-center'>Enhancements</h1>
          <Table2 />
        </div>

        <div className='mt-4 w-full'>
          <h1 className='text-center'>Kids Menu (10 and Under)</h1>
          <Table3 />
        </div>

        <div className='mt-4 w-full'>
          <h1 className='text-center'>Additional Services For Nails</h1>
          <Table4 />
        </div>

        <div className='mt-4 w-full'>
          <h1 className='text-center'>Waxing</h1>
          <Table5 />
        </div>

        <div className='mt-4 w-full'>
          <h1 className='text-center'>Tints & Eyelash Extensions</h1>
          <Table6 />
        </div>

        <div className='mt-4 w-full'>
          <h1 className='text-center'>Facials</h1>
          <Table7 />
        </div>





      </div>








    </div>
  )
}

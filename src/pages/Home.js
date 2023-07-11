import React from 'react'

import Hero from '../components/Hero'

import Carousel1 from '../components/carousel';

import { Link } from 'react-router-dom';





export default function Home() {
  return (
    <div>
      <div className='w-3/5 max-w-[980px] mx-auto '>
       <Hero />
      </div>


      <div className='my-12 w-3/5 mx-auto'>
        <h2 className='text-4xl text-red-800 my-4'>Make Every Visit Unforgettable</h2>
        <p className='text-2xl'>Winn Nail Spa provides a fresh environment to have a relaxing experience and look your best. Everything except hair and makeup, our professional staff will help reinvent you.</p>
      </div>
      
      <div className='w-3/5 mx-auto flex flex-col lg:flex-row space-x-8 my-8'>
        <div>
          <Carousel1 />
        </div>
        <div className='my-auto'>
          <h3 className='text-2xl mb-8'>Manicures, Pedicures, and Nail Enhancements</h3>
          <p>With over 1,000 colors to choose from, our experienced technicians will make your nails look like a work of art. Various options of natural nail treatments or nail enhancments.</p>
          <div className='mt-12 text-xl'>
            <Link>List of Services &#62;</Link>
          </div>
        </div>
      </div>

      <div className='w-3/5 mx-auto flex flex-col lg:flex-row space-x-8 my-8'>
        <div>
          <Carousel1 />
        </div>
        <div className='my-auto'>
          <h3 className='text-2xl mb-8 text-[#f26722]'>Facials and Eyelash Extensions</h3>
          <p>Prepare for a night out with a flirtatious set of lashes. Or give yourself the healthy glow that you always desired with facials using Nu Skin products.</p>
          <div className='mt-12 text-xl'>
            <Link>List of Services &#62;</Link>
          </div>
        </div>
      </div>

      <div className='w-3/5 mx-auto flex flex-col lg:flex-row space-x-8 my-8'>
        <div>
          <Carousel1 />
        </div>
        <div className='my-auto'>
          <h3 className='text-2xl mb-8'>Waxing</h3>
          <p>Reveal a new layer of yourself with Beauty Image wax, provided with our warm care. This wax has a smooth application and works well with most sensitive skin types.</p>
          <div className='mt-12 text-xl text-[#f69564] hover:text-[#f26722]'>
            <Link>List of Services &#62;</Link>
          </div>
        </div>
      </div>
    






    </div>
  )
}

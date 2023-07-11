import React from 'react'

import yelp from '../assets/social_icon/yelp.webp'
import google from '../assets/social_icon/google+.webp'
import facebook from '../assets/social_icon/facebook.webp'

import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className='flex flex-col sm:flex-row justify-center sm:justify-around bg-rose-400 items-center space-y-2 p-4'>
        <div className='translate-x-4'>
          <p>North Springs Plaza</p>
          <p>9630 Westview Drive</p>
          <p>Coral Springs, FL 33076</p>
          <p>(954)575-3366</p>
        </div>
        <div>
          <ul className='flex flex-row space-x-2 items-center justify-center'>
            <li>
              <Link>
                <img src={yelp} alt="yelp" />
              </Link>
            </li>
            <li>
              <Link>
                <img src={google} alt="google" />
              </Link>
            </li>
            <li>
              <Link>
                <img src={facebook} alt="facebook" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

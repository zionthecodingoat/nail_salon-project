import React from 'react'

import aboutus1 from '../assets/aboutus1.webp'
import aboutus2 from '../assets/aboutus2.webp'


import { Disclosure, Transition } from '@headlessui/react'


const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <h4 className='w-4/5 md:w-3/5 text-center mx-auto'>Ready to feel relaxed, rejuvenated and refreshed; spend the day with Winn Nail Spa, the therapeutic center that can address all your beauty and pampering needs.</h4>

      <div></div>
      <br />
      <br />


      <h1>Featured on City News Magazine for Coral Springs & Parkland</h1>

      <div className='flex flex-row space-x-4 justify-center'>
        <div>
          <img src={aboutus1} alt="aboutus" />
        </div>

        <div>
          <img src={aboutus2} alt="aboutus" />
        </div>
      </div>


      <div className='w-full mx-auto text-left my-16'>
        <Disclosure
          defaultOpen={true}
        >
          <Disclosure.Button className="py-2 w-full">
            <h3 className='disclosure-btn'>What services do you offer?</h3>
          </Disclosure.Button>
          <Transition
            enter="transition duration-600 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-600 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel>
              <h4>
              We provide manicures, pedicures, a variety of nail enhancements, facials, waxing, eyelash extensions, and other specialties. For more, please check our services page.
              </h4>
            </Disclosure.Panel>
          </Transition>
        </Disclosure>
        <Disclosure
          defaultOpen={true}
        >
          <Disclosure.Button className="py-2 w-full">
            <h3 className='disclosure-btn'>Do you accept walk-ins?</h3>
          </Disclosure.Button>
          <Transition
            enter="transition duration-600 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-600 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel>
              <h4>
              Yes, walk-ins are welcome. You can also make appointments on the phone, in person, or online. When you booked an appointment, please call in advance if you cannot make it, so we are able to fit in another customer as all technicians are paid in commission. 
              </h4>
            </Disclosure.Panel>
          </Transition>
        </Disclosure>
        <Disclosure
          defaultOpen={true}
        >
          <Disclosure.Button className="py-2 w-full">
            <h3 className='disclosure-btn'>Is this the only Winn Nail Spa?</h3>
          </Disclosure.Button>
          <Transition
            enter="transition duration-600 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-600 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel>
              <h4>
              This is the first, and currently, only available Winn Nail Spa location. But the business hopes to expand and have other centers available in the future. To find our location, please check the contact page.
              </h4>
            </Disclosure.Panel>
          </Transition>
        </Disclosure>
        <Disclosure
          defaultOpen={true}
        >
          <Disclosure.Button className="py-2 w-full">
            <h3 className='disclosure-btn'>What brands do you use?</h3>
          </Disclosure.Button>
          <Transition
            enter="transition duration-600 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-600 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel>
              <h4>
              For our nail services, we use top brands like OPI, Essie, Gelish, CND, LND, ANC, and DND in over 1,000 colors to choose from.
              <br /> <br />
              For our facials, we use Nu Skin and Beauty Image for our waxings. Beauty Image wax has a smoother application than other wax brands and works for most sensitive skin types. 
              </h4>
            </Disclosure.Panel>
          </Transition>
        </Disclosure>
      </div>


    </div>
  )
}

export default About
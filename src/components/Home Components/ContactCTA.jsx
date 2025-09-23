import React from 'react'
import Heading from '../Heading'
import img12 from '../../assets/projects/12.jpg'
import { Link } from 'react-router-dom'

const ContactCTA = () => {
  return (
    <div>
            <div className='lg:mt-7 mt-5 text-xl'>
                <Heading text={"Ready to power your world?"} />
                <div className='flex lg:flex-row flex-col justify-between items-center md:gap-8 lg:gap-0 gap-2'>
                    <div className='w-full h-full flex justify-center'>
                        <img src={img12} alt="de-janees" className='rounded-xl w-[22rem]  h-[32rem]' />
                    </div>
                    <div className='w-full mt-6 md:mt-0 text-left'>
                        <p className='text-zinc-900 md:text-xl text-lg lg:leading-loose leading-8'>
                            At De Janees, we don&apos;t just deliver energy — 
                            we deliver growth, sustainability, and peace of mind. Whether you&apos;re a homeowner, 
                            business, or community, our solutions are built to keep you running reliably.
                            <span className='mt-4'> <Link to="/contact-us" className='text-company-blue underline font-bold'>Contact Us</Link></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ContactCTA
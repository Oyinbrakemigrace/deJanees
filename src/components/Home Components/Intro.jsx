import React from 'react'
import Heading from '../Heading'
import Stats from './Stats'

const Intro = () => {
  return (
    <div>
       <Heading text="Welcome to De-Janees Concepts Limited" />
        <p className='text-zinc-900 md:text-xl text-lg lg:leading-loose leading-8'>
        De-Janees Concepts Limited develops and manages end-to-end energy infrastructure generation, 
        transmission, distribution and metering-delivering green, reliable power that drives growth 
        and improves quality of life across Nigeria.
      </p>
        <Stats />
      </div>
  )
}

export default Intro

import React from 'react'
import Heading from '../Heading'

const Intro = () => {
  return (
    <div>
       <Heading text="Welcome to De-Janees Concepts Limited" />
        <p className='text-zinc-900 md:text-xl text-lg lg:leading-loose leading-8'>
        De-Janees Concepts Limited develops and manages end-to-end energy infrastructure generation, 
        transmission, distribution and metering-delivering green, reliable power that drives growth 
        and improves quality of life across Nigeria.
      </p>
      <div className='grid lg:grid-cols-4 grid-cols-2 lg:place-items-center place-items-start gap-6 mt-10 border p-4 rounded-2xl border-company-blue'>
       <div className='flex flex-col'>
        <span className='font-extrabold text-3xl text-company-blue'>10MW</span> <span>Saki Project</span>
       </div>
        <div className='flex flex-col '>
        <span className='font-extrabold text-3xl text-company-blue'>500,000+</span> <span>People powered</span>
       </div>
       <div className='flex flex-col'>
        <span className='font-extrabold text-3xl text-company-blue '>$5M+</span> <span>executed projects</span>
       </div>
        <div className='flex flex-col'>
        <span className='font-extrabold text-3xl text-company-blue'>100%</span> <span>Client satisfaction</span>
       </div>
      </div>
      </div>
  )
}

export default Intro

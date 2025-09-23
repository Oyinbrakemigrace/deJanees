import React from 'react'

const Heading = ({text}) => {
  return (
     <h1 className='text-3xl lg:text-4xl text-company-blue lg:text-center text-left font-bold mb-6'>
            {text}
        </h1>
  )
}

export default Heading

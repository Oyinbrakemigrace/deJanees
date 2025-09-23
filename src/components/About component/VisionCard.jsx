import React from 'react'

const VisionCard = ({title, description}) => {
  return (
     <div className='border-company-blue border rounded-2xl p-6 shadow-md'>
        <h2 className='text-3xl font-bold text-company-blue mb-6'>{title}</h2>
        <p className='text-zinc-900 md:text-xl text-lg lg:leading-loose leading-8 pt-2'>
        {description}
        </p>
      </div>
  )
}

export default VisionCard

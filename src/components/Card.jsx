import React from 'react'

const Card = ({ icon, title, desc }) => {
    return (
        <div className='bg-slate-200 border border-company-blue text-zinc-900 rounded-xl shadow-md px-3 py-7 space-y-4 flex flex-col justify-center items-center'>
            <div className='text-5xl text-company-blue'>
                {icon}
            </div>
            <h2 className='text-2xl font-bold capitalize whitespace-nowrap text-company-blue'>{title}</h2>
            <p className='leading-relaxed'>
                {desc}
            </p>
        </div>
    )
}

export default Card
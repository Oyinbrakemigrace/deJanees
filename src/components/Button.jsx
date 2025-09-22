import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ href, btnText }) => {
    return (
        <button>
            <Link to={href} className='bg-company-blue hover:bg-company-blue/80 md:text-2xl text-sm  text-slate-100 rounded-md lg:py-4 lg:px-20 px-7 py-3'>
                {btnText}
            </Link>
        </button>
    )
}

export default Button
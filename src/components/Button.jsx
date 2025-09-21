import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ href, btnText }) => {
    return (
        <button>
            <Link to={href} className='bg-company-blue hover:bg-company-blue/80 text-slate-100 rounded-md lg:py-4 lg:px-20 px-5 py-3'>
                {btnText}
            </Link>
        </button>
    )
}

export default Button
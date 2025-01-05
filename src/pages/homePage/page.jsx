import React from 'react'
import { Link } from 'react-router-dom'
import '../../index.css'

const HomePage = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='bg-gray-200 flex flex-wrap justify-center items-center mt-10 h-14 gap-4 sm:gap-8 xl:gap-20 px-4 py-4 rounded-3xl'>
                <Link to="" className='link-hover'>
                    T-shirt
                </Link>
                <Link to="" className='link-hover'>
                    Şort
                </Link>
                <Link to="" className='link-hover'>
                    Pantolon
                </Link>
                <Link to="" className='link-hover'>
                    Çanta
                </Link>
                <Link to="" className='link-hover'>
                    Ceket
                </Link>
                <Link to="" className='link-hover'>
                    Sweatshirt
                </Link>
            </div>
        </div>
    )
}

export default HomePage
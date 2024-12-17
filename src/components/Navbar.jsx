import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full h-14 bg-black text-white flex justify-center items-center'>
            <nav className='mx-auto px-4 h-full flex justify-center items-center'>
                <ul className='flex justify-center items-center gap-x-28'>
                    <li>
                        Anasayfa
                    </li>
                    <li>
                        Kategoriler
                    </li>
                    <li>
                        Favoriler
                    </li>
                    <li>
                        İletişim
                    </li>
                    <li>
                        Giriş Yap
                    </li>
                    <li>
                        Çıkış Yap
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar
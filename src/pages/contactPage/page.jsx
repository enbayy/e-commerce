import React from 'react'

const ContactPage = () => {
    return (
        <div>
            <div className="w-full h-screen flex justify-center items-center bg-gray-100">
                <form className="bg-white shadow-lg rounded-lg p-8 w-1/3">
                    <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">İletişim Formu</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                            İsim
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Adınızı girin"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            E-posta
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="E-posta adresinizi girin"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                            Mesaj
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            placeholder="Mesajınızı buraya yazın"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <div className="flex justify-center w-full">
                        <button
                            type="submit"
                            className="flex justify-center w-1/2 bg-green-600 text-white py-2 rounded-lg hover:bg-black transition duration-200"
                        >
                            Gönder
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactPage
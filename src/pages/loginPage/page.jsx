import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-gray-100">
            <form className="bg-white shadow-lg rounded-lg p-8 w-1/3">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Giriş Yap</h2>
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
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                        Şifre
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Şifrenizi girin"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-black transition duration-200"
                    >
                        Giriş Yap
                    </button>
                </div>
                <p className="text-center mt-4 text-sm text-gray-600">
                    Hesabınız yok mu? <Link to="/registerPage" className="text-blue-500 hover:underline">Kayıt Ol</Link>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;
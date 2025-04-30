import React, {useContext, useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {AuthEnterpriseContext} from "../../services/AuthEnterpriseContext.jsx";
import {routes} from "../../routesName.js";

const LoginEnterprise = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const { login } = useContext(AuthEnterpriseContext);
    const  navigate=useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const success = await login(credentials);

        if (success)    navigate("/"+routes.entreprise.dashboard)
    }

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }
    return (
        <div
            className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 overflow-hidden">
        <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">Login to Account</h2>
            <p className="text-center text-gray-500 mb-6">Please enter your email and password to continue</p>

            <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email
                        address:</label>
                    <input type="email" id="email" name="email" placeholder="you@example.com" onChange={handleChange}
                           className="w-full px-4 py-2 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"/>
                </div>

                <div>
                    <div className="flex justify-between items-center mb-1">
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                        <Link to="/entreprise/forget-password" className="text-sm text-green-600 hover:underline">Forget Password?</Link>
                    </div>
                    <input type="password" id="password" name="password" placeholder="••••••••" onChange={handleChange}
                           className="w-full px-4 py-2 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"/>
                </div>

                <div className="flex items-center">
                    <input id="remember" type="checkbox"
                           className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-green-400"/>
                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">Remember Password</label>
                </div>

                <button type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md">
                    Sign In
                </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
                Don’t have an account?
                <Link to="/entreprise/creation-account" className="text-green-600 hover:underline font-medium">Create Account</Link>
            </p>
        </div>
        </div>)
}
export default LoginEnterprise

import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPasswordClient = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-400 to-blue-500 overflow-hidden">
            <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">Reset Your Password</h2>
                <p className="text-center text-gray-500 mb-6">Enter your email to receive reset instructions</p>

                <form className="space-y-5">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email address:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
                    >
                        Send Reset Instructions
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Remember your password?{' '}
                    <Link to="/login/client" className="text-blue-600 hover:underline font-medium">
                        Return to Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPasswordClient;
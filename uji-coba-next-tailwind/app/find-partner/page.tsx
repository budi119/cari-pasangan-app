import React from 'react';

const Page = () => {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen text-center"
        >
            {/* Logo */}
            <span className="text-6xl font-semibold text-redplt mb-8">
                FindUrLover
            </span>

            {/* Input & Buttons */}
            <div className="w-full max-w-md">
                <input
                    type="text"
                    placeholder="Search for love..."
                    className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
                />
                <div className="flex space-x-2 justify-center">
                    <button
                        className="px-4 py-2 bg-redplt font-bold text-white rounded-full hover:bg-darkredplt"
                    >
                        Search
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Page;

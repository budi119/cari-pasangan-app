import React from 'react'

const page = () => {
    return (
        <div className='container flex justify-center mx-auto mt-20 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <div className="p-16">
                <div className="p-8 mt-24">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                            <div>
                                <p className="font-bold text-gray-700 text-xl">7663</p>
                                <p className="text-gray-400">Visits</p>
                            </div>
                            <div>
                                <p className="font-bold text-gray-700 text-xl">8630</p>
                                <p className="text-gray-400">View</p>
                            </div>
                            <div>
                                <p className="font-bold text-gray-700 text-xl">55,239</p>
                                <p className="text-gray-400">Likes</p>
                            </div>
                        </div>
                        <div className="relative">
                            <img className="object-cover w-48 h-48 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCHwpU4yyNcyYGp5pbezdyw-LWRj9gi9V19g&s" alt="Highlight People" />

                        </div>
                        <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                            <button className="text-white py-2 px-4 rounded bg-blue-700 hover:bg-blue-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">  Edit Profile</button>
                            <button className="text-white py-2 px-4 rounded bg-red-700 hover:bg-red-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">  Delete Account</button>
                        </div>
                    </div>
                    <div className="mt-20 text-center border-b pb-12">
                        <h1 className="text-4xl font-medium text-gray-700">Vonny Felicia, <span className="font-light text-gray-500">24</span></h1>
                        <p className="font-light text-gray-600 mt-3">Bogor, Jawa Barat - Indonesia</p>
                        <p className="mt-8 text-gray-500">Brand Ambassador E-Sport Onic</p>
                        <p className="mt-2 text-gray-500">+62 0821 6666 6666</p>
                    </div>
                    <div className="mt-12 flex flex-col justify-center">
                        <p className="text-gray-600 text-center font-light lg:px-16">Saya berkiprah di dunia esports, saya memiliki banyak talenta lain seperti bernyanyi, modelling, dan bahkan berakting. Saya pernah membintangi film layar lebar serta tampil di podcast populer bersama tokoh-tokoh seperti Jonathan Liandi. Saya juga memiliki adik, Sheryl Jesslyn (Sze), yang juga aktif sebagai brand ambassador esports.</p>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default page
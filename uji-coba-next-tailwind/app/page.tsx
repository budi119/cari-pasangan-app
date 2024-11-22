import React from 'react';

const HomePage = () => {
  return (
    <div className='mt-19'>
      {/* banner utama */}
      <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 mt-10 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Find Your True Lover Now!</h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Have a partner with the same hobby?, same place of work? Why not? Together we head towards a harmonious future with your dream partner!</p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="/find-partner" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Find a partner
            </a>
            <a href="/about" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
              Learn more
            </a>
          </div>
        </div>
      </section>
      {/* end banner utama */}
      {/* halaman utama */}
      <div className='container mt-20 mb-20 mx-auto'>
        <div className='flex flex-row'>
          <div className="basis-1/2 mx-auto">
            <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4 pr-2">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Highlight People</h5>
                <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                  View all
                </a>
              </div>
              <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="https://cdn.idntimes.com/content-images/duniaku/post/20230203/300587459-644512820424460-4842282226378900658-n-1c2be0cf6d19d21f4eceaf315e8f37ea.jpg" alt="Highlight People" />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Vonny Felicia
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          Hobi Memasak dan tertarik dengan pria SIGMA anjayayyyy
                        </p>
                      </div>
                      <div>
                        <button type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512">
                            <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                          </svg>
                          <span className="sr-only">Icon description</span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="py-4 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="https://cdn.idntimes.com/content-images/duniaku/post/20230203/300587459-644512820424460-4842282226378900658-n-1c2be0cf6d19d21f4eceaf315e8f37ea.jpg" alt="Highlight People" />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Vonny Felicia
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          Hobi Memasak dan tertarik dengan pria SIGMA anjayayyyy
                        </p>
                      </div>
                      <div>
                        <button type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512">
                            <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                          </svg>
                          <span className="sr-only">Icon description</span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="basis-1/8">
            {/* isi disini pa adit yang kemaren dibuat */}
          </div>
        </div>
      </div>
      {/* end halaman utama */}
      {/* footer */}
      <div className='text-center mt-20 mb-10'>
        <h5 className='text-gray-400'>FindUrLover Copyright 2024 <br />Dibuat oleh Budi & Adit</h5>
      </div>
      {/* end footer */}
    </div>
  );
}

export default HomePage;

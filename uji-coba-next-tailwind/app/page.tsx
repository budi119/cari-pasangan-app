import React from 'react';
import CardUser from '../components/ui/CardUser';
import People from '../components/ui/People';


const HomePage = () => {
  return (
    <div className='mt-19'>
      {/* banner utama */}
      <section className="bg-center bg-blueplt">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 mt-10 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Find Your True Lover Now!</h1>
          <p className="mb-8 text-lg font-medium capitalize text-white lg:text-xl sm:px-16 lg:px-48">Have a partner with the same hobby?, same place of work? Why not? Together we head towards a harmonious future with your dream partner!</p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="/find-partner" className="inline-flex justify-center items-center py-4 px-7 font-bold text-center text-white rounded-full bg-redplt hover:bg-darkredplt focus:ring-4 focus:ring-redplt dark:focus:ring-darkredplt">
              Find Your Partner &#9825;
            </a>
          </div>
        </div>
      </section>
      {/* end banner utama */}
      {/* halaman utama */}
      <div className='container grid sm:grid-cols-[4fr_1fr] grid-cols-1 my-auto mx-auto'>
        <div className="flex justify-center items-center mt-10 mb-10">
          <div className="w-full max-w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-8 pr-2">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">People Might You Like</h5>
              <a href="#" className="text-sm font-medium text-redplt hover:underline dark:text-blue-500">
                View all
              </a>
            </div>
            <div className="flow-root">
              <div className='grid sm:grid-cols-5 grid-cols-2 gap-4'>
                <CardUser nama="Lora" username="@lauraziphoraa" foto='/talent/lora.jpg' ig='https://www.instagram.com/lauraziphoraa/' tt='https://www.tiktok.com/@lauraziphoraa' />
                <CardUser nama="Chelsea" username="@cesiann" foto='/talent/cesian.jpg' ig='https://www.instagram.com/cesiann/' tt='https://www.tiktok.com/@cesiann' />
                <CardUser nama="Anin" username="@anin.dhitaa" foto='/talent/anin.jpg' ig='https://www.instagram.com/aanin.dithaa/' tt='https://www.tiktok.com/@anindthrc' />
                <CardUser nama="Cila" username="@kynchllaalexa" foto='/talent/cila.jpg' ig='https://www.instagram.com/kynchllaalexa/' tt='https://www.tiktok.com/@kynchilla' />
                <CardUser nama="Aldean" username="@aldean.tg" foto='/talent/dean.jpg' ig='https://www.instagram.com/aldeantg/' tt='https://www.tiktok.com/@aldeantg' />
                <CardUser nama="Kevin" username="@kevinsusanto" foto='/talent/kevin.jpg' ig='https://www.instagram.com/xccuratevlr/' tt='https://www.tiktok.com/@xccuratevlr' />
                <CardUser nama="L" username="@luthfihalimawan" foto='/talent/L.png' ig='https://www.instagram.com/luthfihalimawan/' tt='https://www.tiktok.com/@luthfi_halimawan' />
                <CardUser nama="Kairi" username="@kairirds" foto='/talent/kairi.jpg' ig='https://www.instagram.com/kairirds/' tt='https://www.tiktok.com/@kairirisolmayo' />
                <CardUser nama="Lora" username="@lauraziphoraa" foto='/talent/lora.jpg' ig='https://www.instagram.com/lauraziphoraa/' tt='https://www.tiktok.com/@lauraziphoraa' />
                <CardUser nama="Chelsea" username="@cesiann" foto='/talent/cesian.jpg' ig='https://www.instagram.com/cesiann/' tt='https://www.tiktok.com/@cesiann' />
                <CardUser nama="Anin" username="@anin.dhitaa" foto='/talent/anin.jpg' ig='https://www.instagram.com/aanin.dithaa/' tt='https://www.tiktok.com/@anindthrc' />
                <CardUser nama="Cila" username="@kynchllaalexa" foto='/talent/cila.jpg' ig='https://www.instagram.com/kynchllaalexa/' tt='https://www.tiktok.com/@kynchilla' />
                <CardUser nama="Aldean" username="@aldean.tg" foto='/talent/dean.jpg' ig='https://www.instagram.com/aldeantg/' tt='https://www.tiktok.com/@aldeantg' />
                <CardUser nama="Kevin" username="@kevinsusanto" foto='/talent/kevin.jpg' ig='https://www.instagram.com/xccuratevlr/' tt='https://www.tiktok.com/@xccuratevlr' />
                <CardUser nama="L" username="@luthfihalimawan" foto='/talent/L.png' ig='https://www.instagram.com/luthfihalimawan/' tt='https://www.tiktok.com/@luthfi_halimawan' />
                <CardUser nama="Kairi" username="@kairirds" foto='/talent/kairi.jpg' ig='https://www.instagram.com/kairirds/' tt='https://www.tiktok.com/@kairirisolmayo' />
              </div>
            </div>
          </div>

        </div>
        <div className="flex justify-center items-start sm:ml-5 mt-10 mb-10">
          <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4 pr-2">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Highlight People</h5>
              <a href="#" className="text-sm font-medium text-redplt hover:underline dark:text-blue-500">
                View all
              </a>
            </div>
            <div className="flow-root">
              <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                <People image="/people/vonzy.jpg" name="Vonny Felicia" description="Hobi memasak dan Tertarik dengan pria SIGMA anjayayyayyy" />
                <People image="/people/jefri.jpg" name="Jefri Nichol" description="absurdités de l’existence" />
                <People image="/people/sze.jpg" name="Sherly Jesslyn" description="Pacarnya Adhyt" />
                <People image="/people/dede.jpg" name="Dede Inoen" description="Puncak rantai makanan" />
              </ul>
            </div>
          </div>
        </div>

      </div>
      {/* end halaman utama */}
    </div>
  );
}

export default HomePage;

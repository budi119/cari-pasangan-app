import Link from "next/link"
import DiyRecomendedPeople from "@/components/ui/diyrecomendedpeople";
import DiyHighlightPeople from "@/components/ui/diyhighlightpeople";
import { Carousel, CarouselContent, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <div>
      {/* banner utama */}
      <section className="bg-blueplt p-0">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-44">
          <h1 className="mb-4 mt-10 text-3xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Find Your True Lover Now!</h1>
          <p className="mb-8 text-md font-medium text-white lg:text-lg sm:px-16 lg:px-48">Have a partner with the same hobby?, same place of work? Why not? Together we head towards a harmonious future with your dream partner!</p>
          <Link href="/find-lover" className="inline-flex justify-center items-center py-3 px-7 font-bold text-center text-white rounded-full bg-redplt hover:bg-darkredplt focus:ring-4 focus:ring-redplt dark:focus:ring-darkredplt shadow hover:shadow-lg transition transform hover:-translate-y-0.5">
            Find Your Lover &#9825;
          </Link>
        </div>
      </section>
      {/* end banner utama */}
      <section className="bg-yellowplt p-0">
        <div className="container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[4fr_1fr] mt-16 mx-auto">
          <div className="flex justify-center items-center mt-10 mb-10 px-4 md:px-0 lg:px-0">
            <Card className="p-5">
              <CardHeader>
                <CardTitle>People You Might Like</CardTitle>
                <CardDescription>We are recomended this people to you to become your partner</CardDescription>
              </CardHeader>
              <CardContent>
                {/* <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4'> */}
                <div className="w-full max-w-5xl mx-auto px-4 py-12 md:px-6 lg:px-8">
                  <Carousel className="w-full">
                    <CarouselContent>

                      <DiyRecomendedPeople nama="Lora" namad="Aldean" username="@lauraziphoraa" usernamed="@aldean.tg" foto='/talent/lora.jpg' fotod="/talent/dean.jpg" ig='https://www.instagram.com/lauraziphoraa/' tt='https://www.tiktok.com/@lauraziphoraa' line='line' />
                      <DiyRecomendedPeople nama="Chelsea" namad="Kevin" username="@cesiann" usernamed="@kevinsusanto" foto='/talent/cesian.jpg' fotod="/talent/kevin.jpg" ig='https://www.instagram.com/cesiann/' tt='https://www.tiktok.com/@cesiann' line='line' />
                      <DiyRecomendedPeople nama="Anin" namad="L" username="@anin.dhitaa" usernamed="@luthfihalimawan" foto='/talent/anin.jpg' fotod="/talent/L.png" ig='https://www.instagram.com/aanin.dithaa/' tt='https://www.tiktok.com/@anindthrc' line='line' />
                      <DiyRecomendedPeople nama="Cila" namad="Kairi" username="@kynchllaalexa" usernamed="@kairirds" foto='/talent/cila.jpg' fotod="/talent/kairi.jpg" ig='https://www.instagram.com/kynchllaalexa/' tt='https://www.tiktok.com/@kynchilla' line='line' />
                      {/* <DiyRecomendedPeople nama="Aldean" username="@aldean.tg" foto='/talent/dean.jpg' ig='https://www.instagram.com/aldeantg/' tt='https://www.tiktok.com/@aldeantg' line='line' />
                      <DiyRecomendedPeople nama="Kevin" username="@kevinsusanto" foto='/talent/kevin.jpg' ig='https://www.instagram.com/xccuratevlr/' tt='https://www.tiktok.com/@xccuratevlr' line='line' />
                      <DiyRecomendedPeople nama="L" username="@luthfihalimawan" foto='/talent/L.png' ig='https://www.instagram.com/luthfihalimawan/' tt='https://www.tiktok.com/@luthfi_halimawan' line='line' />
                      <DiyRecomendedPeople nama="Kairi" username="@kairirds" foto='/talent/kairi.jpg' ig='https://www.instagram.com/kairirds/' tt='https://www.tiktok.com/@kairirisolmayo' line='line' /> */}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </CardContent>
              {/* <CardFooter>
                <p>View All</p>
              </CardFooter> */}
            </Card>
          </div>
          <div className="flex justify-center items-start ml-0 lg:ml-5 mt-0 md:mt-10 lg:mt-10 mb-10">
            <Card className="p-5">
              <CardHeader>
                <CardTitle>Highlight People</CardTitle>
                <CardDescription>Famous people are here</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full max-w-80">
                  <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    <DiyHighlightPeople image="/people/vonzy.jpg" name="Vonny Felicia" description="Hobi memasak dan Tertarik dengan pria SIGMA anjayayyayyy" />
                    <DiyHighlightPeople image="/people/jefri.jpg" name="Jefri Nichol" description="absurdités de l’existence" />
                    <DiyHighlightPeople image="/people/sze.jpg" name="Sherly Jesslyn" description="Pacarnya Adhyt" />
                    <DiyHighlightPeople image="/people/dede.jpg" name="Dede Inoen" description="Puncak rantai makanan" />
                  </ul>
                </div>
              </CardContent>
              {/* <CardFooter>
                <p>View All</p>
              </CardFooter> */}
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}


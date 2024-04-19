import Header from '@/components/Header'
import React from 'react'
import {Image} from '@nextui-org/image'
import ComentariosForm from '@/components/ComentariosForm'
import Breadcrumbs from '@/components/Breadcrumbs'

function ZipoliteBeach() {

  const links = [
    {name: 'Home', path: '/home'},
    {name: 'Beaches - Zipolite Beach', path: '/beaches/zipolite-beach'}
  ]

  return (
    <>
      <Header title="ZIPOLITE BEACH" url="https://rh-destinations.com/en/wp-content/uploads/sites/5/2021/12/bahia-chachahual-1024x576-1.jpg" />

      <main className='flex flex-col gap-20 my-0 mx-auto w-[90%] py-10'>
        <Breadcrumbs links={links} />

        <h2 className='text-teal-700 text-5xl font-extrabold'>Zipolite Beach: Wild Tranquility</h2>

        <section className='flex flex-wrap gap-5 items-center justify-center'>
          <div className='flex flex-col gap-3 basis-0 flex-grow'>
            <h3 className='text-teal-900 text-3xl min-w-[252px]'>Embrace the Untamed Beauty of Mexico´s Pacific Coast</h3>
            <p className='text-lg'>Discover Zipolite Beach, where untamed waves meet golden sands on Mexico´s Pacific Coast. Known for its wild tranquility, this beach offers a raw and unfiltered escape. Embrace the rhythm of the ocean, bask in the sun´s warm embrace, and relish the laid-back atmosphere of Zipolite—an untouched haven for those seeking a retreat off the beaten path. </p>
          </div>
          <Image src='https://mediaim.expedia.com/destination/2/2d35acc58a3da3183e24abe8e35873c3.jpg' alt='attraction' width={600} className=' basis-0 flex-grow' />
        </section>

        <section className='flex justify-center'>
          <iframe width="1215" height="523" src="https://www.youtube.com/embed/meknCBuZU-0" title="Nude Beach Zipolite the best public naked beach in Mexico" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </section>

        <ComentariosForm />
      </main>
    </>
  )
}

export default ZipoliteBeach
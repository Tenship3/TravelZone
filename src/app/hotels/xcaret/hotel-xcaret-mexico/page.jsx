'use client'

import Header from '@/components/Header'
import React, {useEffect, useState} from 'react'
import {Image} from '@nextui-org/image'
import ComentariosForm from '@/components/ComentariosForm'
import Breadcrumbs from '@/components/Breadcrumbs'
import { useRouter } from 'next/navigation'

function HotelXcaretMexico() {

  const links = [
    {name: 'Home', path: '/home'},
    {name: 'Hotels - Xcaret', path: '/hotels/xcaret'},
    {name: 'Hotel Xcaret Mexico', path: '/hotels/xcaret/hotel-xcaret-mexico'}
  ]

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const router = useRouter()

  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem('isLoggedIn'))
    if(isLoggedIn === null) return router.push('/hotels/xcaret')
  }, [])

  return (
    <>
      <Header title="HOTEL XCARET MEXICO" url="https://www.arquired.com.mx/wp-content/uploads/2018/08/HXMSUITS9.jpg" />

      <main className='flex flex-col gap-20 my-0 mx-auto w-[90%] py-10'>
        <Breadcrumbs links={links} />

        <h2 className='text-teal-700 text-5xl font-extrabold'>Hotel Xcaret Mexico</h2>

        <section className='flex flex-col gap-10'>
          <article className='flex flex-col gap-5 items-center'>
            <h3 className='text-teal-900 text-4xl font-extrabold text-left w-full'>Location</h3>
            <p className='text-lg  text-left w-full'>Located in the heart of the Riviera Maya, just minutes away from Playa del Carmen, Hotel Xcaret Mexico offers an unparalleled all-inclusive experience in a stunning natural landscape.</p>
            <Image src='https://century21mexico.com/uploads/486/propiedades/470065/mapaGoogle.jpg' alt='attraction' className=' basis-0 flex-grow' />
          </article>
          <article className='flex flex-col gap-5 items-center'>
            <h3 className='text-teal-900 text-4xl font-extrabold text-left w-full'>Rooms</h3>
            <p className='text-lg  text-left w-full'>Indulge in luxurious accommodations at Hotel Xcaret Mexico, where each room and suite is thoughtfully designed to provide comfort and style amidst the natural beauty of the surrounding environment.</p>
            <Image src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/211955640.jpg?k=8e59c64a64f0bdba072885a44084bdb4bdad80a53efed71275790e6caa8aa340&o=&hp=1' alt='attraction' className=' basis-0 flex-grow' />
          </article>
          <article className='flex flex-col gap-5 items-center'>
            <h3 className='text-teal-900 text-4xl font-extrabold text-left w-full'>Attractions</h3>
            <p className='text-lg  text-left w-full'>Experience endless adventure and relaxation at Hotel Xcaret Mexico with access to exclusive parks and attractions, including snorkeling in crystal-clear waters, exploring ancient ruins, and unwinding at world-class spas.</p>
            <Image src='https://www.xcaret.com/assets/xcaret/actividades/ficha-actividades-riossub.jpg' alt='attraction' className=' basis-0 flex-grow' />
          </article>
        </section>

        <ComentariosForm />
      </main>
    </>
  )
}

export default HotelXcaretMexico
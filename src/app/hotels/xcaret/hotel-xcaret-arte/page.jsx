'use client'

import Header from '@/components/Header'
import React, {useEffect, useState} from 'react'
import {Image} from '@nextui-org/image'
import ComentariosForm from '@/components/ComentariosForm'
import Breadcrumbs from '@/components/Breadcrumbs'
import { useRouter } from 'next/navigation'

function HotelXcaretArte() {

  const links = [
    {name: 'Home', path: '/home'},
    {name: 'Hotels - Xcaret', path: '/hotels/xcaret'},
    {name: 'Hotel Xcaret Arte', path: '/hotels/xcaret/hotel-xcaret-arte'}
  ]

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const router = useRouter()

  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem('isLoggedIn'))
    if(isLoggedIn === null) return router.push('/hotels/xcaret')
  }, [])

  return (
    <>
      <Header title="HOTEL XCARET ARTE" url="https://media-cdn.tripadvisor.com/media/photo-s/2b/70/92/54/hotel-xcaret-arte.jpg" />

      <main className='flex flex-col gap-20 my-0 mx-auto w-[90%] py-10'>
        <Breadcrumbs links={links} />

        <h2 className='text-teal-700 text-5xl font-extrabold'>Hotel Xcaret Arte</h2>

        <section className='flex flex-col gap-10'>
          <article className='flex flex-col gap-5 items-center'>
            <h3 className='text-teal-900 text-4xl font-extrabold text-left w-full'>Location</h3>
            <p className='text-lg text-left w-full'>Located in the beautiful Riviera Maya, near Playa del Carmen, Hotel Xcaret Arte offers a unique experience in an exceptional natural setting.</p>
            <Image src='https://century21mexico.com/uploads/486/propiedades/470065/mapaGoogle.jpg' alt='attraction' className=' basis-0 flex-grow' />
          </article>
          <article className='flex flex-col gap-5 items-center'>
            <h3 className='text-teal-900 text-4xl font-extrabold text-left w-full'>Rooms</h3>
            <p className='text-lg text-left w-full'>Hotel Xcaret Arte offers a wide variety of luxurious rooms and suites, all carefully designed to provide comfort and elegance.</p>
            <Image src='https://www.hotelxcaretarte.com/assets/hxa/pages/about/rooms2.webp' alt='attraction' className=' basis-0 flex-grow' />
          </article>
          <article className='flex flex-col gap-5 items-center'>
            <h3 className='text-teal-900 text-4xl font-extrabold text-left w-full'>Attractions</h3>
            <p className='text-lg text-left w-full'>Enjoy unlimited access to the natural parks and unique cultural experiences offered by Hotel Xcaret Arte, from swimming in underground rivers to folkloric shows.</p>
            <Image src='https://blog.mexicodestinationclub.com/es/wp-content/uploads/2020/02/Youtube-2020.jpg' alt='attraction' className=' basis-0 flex-grow' />
          </article>
        </section>

        <ComentariosForm />
      </main>
    </>
  )
}

export default HotelXcaretArte
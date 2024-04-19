'use client'

import Header from '@/components/Header'
import React, {useEffect, useState} from 'react'
import {Image} from '@nextui-org/image'
import ComentariosForm from '@/components/ComentariosForm'
import Breadcrumbs from '@/components/Breadcrumbs'
import { useRouter } from 'next/navigation'

function CasaDeLaLuna() {

  const links = [
    {name: 'Home', path: '/home'},
    {name: 'Hotels - Xcaret', path: '/hotels/xcaret'},
    {name: 'Casa de la Luna', path: '/hotels/xcaret/casa-de-la-luna'}
  ]

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const router = useRouter()

  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem('isLoggedIn'))
    if(isLoggedIn === null) return router.push('/hotels/xcaret')
  }, [])

  return (
    <>
      <Header title="CASA DE LA LUNA" url="https://www.hotelxcaret.com/assets/concentrador-hoteles/hxm/spa/Remodelacion-2.jpg" />

      <main className='flex flex-col gap-20 my-0 mx-auto w-[90%] py-10'>
        <Breadcrumbs links={links} />

        <h2 className='text-teal-700 text-5xl font-extrabold'>Casa de la Luna</h2>

        <section className='flex flex-col gap-10'>
          <article className='flex flex-col gap-5 items-center'>
            <h3 className='text-teal-900 text-4xl font-extrabold text-left w-full'>Location</h3>
            <p className='text-lg text-left w-full'>Nestled under the enchanting moonlight in the Riviera Maya, Casa de la Luna offers a magical escape amidst serene surroundings and starlit nights.</p>
            <Image src='https://century21mexico.com/uploads/486/propiedades/470065/mapaGoogle.jpg' alt='attraction' className=' basis-0 flex-grow' />
          </article>
          <article className='flex flex-col gap-5 items-center'>
            <h3 className='text-teal-900 text-4xl font-extrabold text-left w-full'>Rooms</h3>
            <p className='text-lg text-left w-full'>Experience comfort and tranquility in Casa de la Luna´s cozy rooms and suites, each adorned with rustic charm and thoughtful amenities.</p>
            <Image src='https://www.kayak.com.mx/rimg/himg/9c/b7/2b/ice-216520592-79981412_3XL-863182.jpg?width=1366&height=768&crop=true' alt='attraction' className=' basis-0 flex-grow' />
          </article>
          <article className='flex flex-col gap-5 items-center'>
            <h3 className='text-teal-900 text-4xl font-extrabold text-left w-full'>Attractions</h3>
            <p className='text-lg text-left w-full'>Embark on moonlit strolls along the beach, indulge in romantic dinners under the stars, or simply unwind on the rooftop terrace with panoramic views of the night sky.</p>
            <Image src='https://media-cdn.tripadvisor.com/media/photo-s/1c/ae/63/46/hotel-xcaret-mexico.jpg' alt='attraction' className=' basis-0 flex-grow' />
          </article>
        </section>

        <ComentariosForm />
      </main>
    </>
  )
}

export default CasaDeLaLuna
'use client'

import Header from '@/components/Header'
import React, {useEffect, useState} from 'react'
import {Image} from '@nextui-org/image'
import ComentariosForm from '@/components/ComentariosForm'
import Breadcrumbs from '@/components/Breadcrumbs'
import { useRouter } from 'next/navigation'

function CasaDelRio() {

  const links = [
    {name: 'Home', path: '/home'},
    {name: 'Hotels - Xcaret', path: '/hotels/xcaret'},
    {name: 'Casa del Río', path: '/hotels/xcaret/casa-del-rio'}
  ]

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const router = useRouter()

  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem('isLoggedIn'))
    if(isLoggedIn === null) return router.push('/hotels/xcaret')
  }, [])

  return (
    <>
      <Header title="CASA DEL RIO" url="https://comiviajeros.com/wp-content/uploads/2022/01/DJI_0398.jpg" />

      <main className='flex flex-col gap-20 my-0 mx-auto w-[90%] py-10'>
        <Breadcrumbs links={links} />

        <h2 className='text-teal-700 text-5xl font-extrabold'>Casa del Río</h2>

        <section className='flex flex-col gap-10'>
          <article className='flex flex-col gap-5 items-center'>
            <h3 className='text-teal-900 text-4xl font-extrabold text-left w-full'>Location</h3>
            <p className='text-lg text-left w-full'>Situated along the banks of a picturesque river in the Riviera Maya, Casa del Río offers a peaceful retreat surrounded by lush tropical vegetation.</p>
            <Image src='https://century21mexico.com/uploads/486/propiedades/470065/mapaGoogle.jpg' alt='attraction' className=' basis-0 flex-grow' />
          </article>
          <article className='flex flex-col gap-5 items-center'>
            <h3 className='text-teal-900 text-4xl font-extrabold text-left w-full'>Rooms</h3>
            <p className='text-lg text-left w-full'>Indulge in comfort and luxury in Casa del Río´s charming riverside villas, each meticulously designed to provide a cozy and inviting atmosphere.</p>
            <Image src='https://www.kayak.com.mx/rimg/himg/9c/b7/2b/ice-216520592-79981412_3XL-863182.jpg?width=1366&height=768&crop=true' alt='attraction' className=' basis-0 flex-grow' />
          </article>
          <article className='flex flex-col gap-5 items-center'>
            <h3 className='text-teal-900 text-4xl font-extrabold text-left w-full'>Attractions</h3>
            <p className='text-lg text-left w-full'>Immerse yourself in nature with activities like birdwatching and river cruises, or simply relax on the terrace and enjoy the tranquil sounds of the flowing river.</p>
            <Image src='https://media-cdn.tripadvisor.com/media/photo-s/1c/ae/63/46/hotel-xcaret-mexico.jpg' alt='attraction' className=' basis-0 flex-grow' />
          </article>
        </section>

        <ComentariosForm />
      </main>
    </>
  )
}

export default CasaDelRio
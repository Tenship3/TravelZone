'use client'

import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import {Image} from '@nextui-org/image'
import ComentariosForm from '@/components/ComentariosForm'
import Breadcrumbs from '@/components/Breadcrumbs'
import { useRouter } from 'next/navigation'

function CasaDeLaFlora() {

  const links = [
    {name: 'Home', path: '/home'},
    {name: 'Hotels - Xcaret', path: '/hotels/xcaret'},
    {name: 'Casa de la Flora', path: '/hotels/xcaret/casa-de-la-flora'}
  ]
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const router = useRouter()

  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem('isLoggedIn'))
    if(isLoggedIn === null) return router.push('/hotels/xcaret')
  }, [])

  return (
    <>
      <Header title="CASA DE LA FLORA" url="https://www.viajabonito.mx/wp-content/uploads/2021/05/hotel-xcaret-mexico-900.jpg" />

      <main className='flex flex-col gap-20 my-0 mx-auto w-[90%] py-10'>
        <Breadcrumbs links={links} />

        <h2 className='text-teal-700 text-5xl font-extrabold'>Casa de la Flora</h2>

        <section className='flex flex-col gap-10'>
          <article className='flex flex-col gap-5 items-center'>
            <h3 className='text-teal-900 text-4xl font-extrabold text-left w-full'>Location</h3>
            <p className='text-lg text-left w-full'>Nestled amidst lush tropical gardens along the Riviera Maya, Casa de la Flora offers a serene escape with breathtaking views of vibrant flora and fauna.</p>
            <Image src='https://century21mexico.com/uploads/486/propiedades/470065/mapaGoogle.jpg' alt='attraction' className=' basis-0 flex-grow' />
          </article>
          <article className='flex flex-col gap-5 items-center'>
            <h3 className='text-teal-900 text-4xl font-extrabold text-left w-full'>Rooms</h3>
            <p className='text-lg text-left w-full'>Experience luxury and tranquility in Casa de la Flora´s stylish suites and villas, each designed with modern amenities and private terraces for the ultimate relaxation.</p>
            <Image src='https://www.kayak.com.mx/rimg/himg/9c/b7/2b/ice-216520592-79981412_3XL-863182.jpg?width=1366&height=768&crop=true' alt='attraction' className=' basis-0 flex-grow' />
          </article>
          <article className='flex flex-col gap-5 items-center'>
            <h3 className='text-teal-900 text-4xl font-extrabold text-left w-full'>Attractions</h3>
            <p className='text-lg text-left w-full'>Explore the beauty of the surrounding nature with guided tours through the jungle, or simply unwind by the poolside with a refreshing cocktail in hand.</p>
            <Image src='https://media-cdn.tripadvisor.com/media/photo-s/1c/ae/63/46/hotel-xcaret-mexico.jpg' alt='attraction' className=' basis-0 flex-grow' />
          </article>
        </section>

        <ComentariosForm />
      </main>
    </>
  )
}

export default CasaDeLaFlora
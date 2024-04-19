'use client'

import Header from '@/components/Header'
import React, {useEffect, useState} from 'react'
import {Image} from '@nextui-org/image'
import ComentariosForm from '@/components/ComentariosForm'
import Breadcrumbs from '@/components/Breadcrumbs'
import { useRouter } from 'next/navigation'

function CasaDelAgua() {

  const links = [
    {name: 'Home', path: '/home'},
    {name: 'Hotels - Xcaret', path: '/hotels/xcaret'},
    {name: 'Casa del Agua', path: '/hotels/xcaret/casa-del-agua'}
  ]

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const router = useRouter()

  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem('isLoggedIn'))
    if(isLoggedIn === null) return router.push('/hotels/xcaret')
  }, [])

  return (
    <>
      <Header title="CASA DEL AGUA" url="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//hotelier-images/82/47/a674ef0172d81897e87fdd4d5b13d1bd31fedb238cff3738254f279f707d.jpeg" />

      <main className='flex flex-col gap-20 my-0 mx-auto w-[90%] py-10'>
        <Breadcrumbs links={links} />

        <h2 className='text-teal-700 text-5xl font-extrabold'>Casa deL Agua</h2>

        <section className='flex flex-col gap-10'>
          <article className='flex flex-col gap-5 items-center'>
            <h3 className='text-teal-900 text-4xl font-extrabold text-left w-full'>Location</h3>
            <p className='text-lg text-left w-full'>Perched on the shores of the Riviera Maya, Casa del Agua offers a unique waterfront experience with stunning ocean views and direct access to pristine beaches.</p>
            <Image src='https://century21mexico.com/uploads/486/propiedades/470065/mapaGoogle.jpg' alt='attraction' className=' basis-0 flex-grow' />
          </article>
          <article className='flex flex-col gap-5 items-center'>
            <h3 className='text-teal-900 text-4xl font-extrabold text-left w-full'>Rooms</h3>
            <p className='text-lg text-left w-full'>Indulge in luxury and comfort in Casa del Agua´s elegant rooms and suites, each featuring modern amenities and private balconies overlooking the azure waters.</p>
            <Image src='https://www.kayak.com.mx/rimg/himg/9c/b7/2b/ice-216520592-79981412_3XL-863182.jpg?width=1366&height=768&crop=true' alt='attraction' className=' basis-0 flex-grow' />
          </article>
          <article className='flex flex-col gap-5 items-center'>
            <h3 className='text-teal-900 text-4xl font-extrabold text-left w-full'>Attractions</h3>
            <p className='text-lg text-left w-full'>Experience aquatic adventures with activities such as snorkeling, diving, and paddleboarding, or simply relax by the infinity pool and soak up the sun.</p>
            <Image src='https://media-cdn.tripadvisor.com/media/photo-s/1c/ae/63/46/hotel-xcaret-mexico.jpg' alt='attraction' className=' basis-0 flex-grow' />
          </article>
        </section>

        <ComentariosForm />
      </main>
    </>
  )
}

export default CasaDelAgua
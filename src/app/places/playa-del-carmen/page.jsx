import Header from '@/components/Header'
import React from 'react'
import {Image} from '@nextui-org/image'
import ComentariosForm from '@/components/ComentariosForm'
import Breadcrumbs from '@/components/Breadcrumbs'

function PlayaDelCarmen() {

  const links = [
    {name: 'Home', path: '/home'},
    {name: 'Places - Playa del Carmen', path: '/places/playa-del-carmen'}
  ]

  return (
    <>
      <Header title="PLAYA DEL CARMEN" url="https://www.cataloniahotels.com/es/blog/wp-content/uploads/2017/10/41787392400_eca30235eb_b-620x414.jpg" />

      <main className='flex flex-col gap-20 my-0 mx-auto w-[90%] py-10'>
        <Breadcrumbs links={links} />

        <h2 className='text-teal-700 text-5xl font-extrabold'>Playa del Carmen: Bohemian Charm in the Riviera Maya</h2>

        <section className='flex flex-col gap-10'>
          <article className='flex flex-wrap gap-5 items-center justify-center'>
            <div className='flex flex-col gap-3 basis-0 flex-grow'>
              <h3 className='text-teal-900 text-3xl min-w-[252px]'>Fifth Avenue: Shopping and Nightlife</h3>
              <p className='text-lg'>Stroll along Fifth Avenue in Playa del Carmen, a bustling pedestrian street filled with boutique shops, vibrant street performers, and a lively atmosphere. Discover the perfect blend of shopping and nightlife in this Bohemian paradise.</p>
            </div>
            <Image src='https://www.poresto.net/u/fotografias/m/2021/3/22/f1280x720-63087_194762_5050.jpg' alt='attraction' width={400} className=' basis-0 flex-grow' />
          </article>
          <article className='flex flex-wrap gap-5 items-center justify-center flex-row-reverse'>
            <div className='flex flex-col gap-3 basis-0 flex-grow'>
              <h3 className='text-teal-900 text-3xl min-w-[252px]'>Relax on the Beaches of Playa del Carmen</h3>
              <p className='text-lg'>Unwind on the sun-kissed beaches of Playa del Carmen, where soft sands and gentle waves create an idyllic setting for relaxation. Whether you seek tranquility or water activities, Playa del Carmen´s beaches offer a perfect escape.</p>
            </div>
            <Image src='https://a.cdn-hotels.com/gdcs/production194/d591/59c1a244-0303-45e5-9035-a5100c581829.jpg?impolicy=fcrop&w=800&h=533&q=medium' alt='attraction' width={400} className=' basis-0 flex-grow' />
          </article>
          <article className='flex flex-wrap gap-5 items-center justify-center'>
            <div className='flex flex-col gap-3 basis-0 flex-grow'>
              <h3 className='text-teal-900 text-3xl min-w-[252px]'>Eco Parks: Xcaret, Xel-Há, and More</h3>
              <p className='text-lg'>Immerse yourself in nature and adventure at eco parks like Xcaret and Xel-Há. Snorkel in crystal-clear cenotes, witness cultural performances, and experience the Riviera Maya´s natural beauty in these unique, eco-friendly attractions.</p>
            </div>
            <Image src='https://media.viajando.travel/p/d47275e01c8c04633bb2514b7926b950/adjuntos/236/imagenes/000/496/0000496893/1200x0/smart/xcaret-by-mexico.png' alt='attraction' width={400} className=' basis-0 flex-grow' />
          </article>
        </section>

        <ComentariosForm />
      </main>
    </>
  )
}

export default PlayaDelCarmen
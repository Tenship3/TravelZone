import Header from '@/components/Header'
import React from 'react'
import {Image} from '@nextui-org/image'
import ComentariosForm from '@/components/ComentariosForm'
import Breadcrumbs from '@/components/Breadcrumbs'

function ParadiseBeach() {

  const links = [
    {name: 'Home', path: '/home'},
    {name: 'Beaches - Paradise Beach', path: '/beaches/paradise-beach'}
  ]

  return (
    <>
      <Header title="PARADISE BEACH" url="https://a.cdn-hotels.com/gdcs/production6/d468/4e2546a8-e598-4bd9-a9f8-8d052c1e0caf.jpg" />

      <main className='flex flex-col gap-20 my-0 mx-auto w-[90%] py-10'>
        <Breadcrumbs links={links} />

        <h2 className='text-teal-700 text-5xl font-extrabold'>Paradise Found: Unveiling the Allure of Playa Paraíso</h2>

        <section className='flex flex-wrap gap-5 items-center justify-center'>
          <div className='flex flex-col gap-3 basis-0 flex-grow'>
            <h3 className='text-teal-900 text-3xl min-w-[252px]'>Playa Paraíso: Caribbean Escape</h3>
            <p className='text-lg'>Escape to Playa Paraíso, where white sands meet turquoise waves in a perfect Caribbean embrace. Your slice of paradise along the Riviera Maya awaits – a serene haven for pure relaxation and tropical delight. Feel the warmth, hear the gentle waves, and savor the essence of Mexican coastal beauty at Playa Paraíso.</p>
          </div>
          <Image src='https://infoquintanaroo.com/wp-content/uploads/2021/01/Playa-Paraiso-Tulum-1200x660.png' alt='attraction' width={600} className=' basis-0 flex-grow' />
        </section>

        <section className='flex justify-center'>
          <iframe width="1215" height="523" src="https://www.youtube.com/embed/bLI6V52tME8" title="PLAYA PARAISO | TULUM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </section>

        <ComentariosForm />
      </main>
    </>
  )
}

export default ParadiseBeach
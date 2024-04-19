import Header from '@/components/Header'
import React from 'react'
import {Image} from '@nextui-org/image'
import ComentariosForm from '@/components/ComentariosForm'
import Breadcrumbs from '@/components/Breadcrumbs'

function RosewoodMayakoba() {

  const links = [
    {name: 'Home', path: '/home'},
    {name: 'Hotels - Rosewood Mayakoba', path: '/hotels/rosewood-mayakoba'}
  ]

  return (
    <>
      <Header title="ROSEWOOD MAYAKOBA" url="https://villas.journeymexico.com/wp/wp-content/uploads/rosewood-villa-entire.jpg" />

      <main className='flex flex-col gap-20 my-0 mx-auto w-[90%] py-10'>
        <Breadcrumbs links={links} />

        <h2 className='text-teal-700 text-5xl font-extrabold'>Exclusive Hotels in the Riviera Maya: An Unforgettable Stay</h2>

        <h3 className='text-teal-900 text-3xl min-w-[252px]'>Rosewood Mayakoba: Serene Elegance by the Beach</h3>

        <section className='flex flex-col gap-10'>
          <article className='flex flex-wrap gap-5 items-center justify-center'>
            <p className='text-lg'>Refinement by the Seashore: Immerse yourself in an oasis of elegance at Rosewood Mayakoba. Discover oceanfront suites and private villas with pools, designed for ultimate comfort and privacy.</p>
            <Image src='https://escapadas.mexicodesconocido.com.mx/wp-content/uploads/2022/09/rosewood-mayakoba-portada.jpg' alt='attraction' className=' basis-0 flex-grow' />
          </article>
          <article className='flex flex-wrap gap-5 items-center justify-center flex-row-reverse'>
            <p className='text-lg'>Wellness Experiences: Embark on a journey of relaxation at the Sense spa, where personalized treatments and tranquil settings await. Rosewood Mayakoba is committed to offering wellness experiences that rejuvenate both body and mind.</p>
            <Image src='https://resizer.otstatic.com/v2/photos/wide-huge/2/41721463.jpg' alt='attraction' className=' basis-0 flex-grow' />
          </article>
          <article className='flex flex-wrap gap-5 items-center justify-center'>
            <p className='text-lg'>Sophisticated Cuisine: Savor culinary excellence at Rosewood´s award-winning restaurants. From Mexican specialties to international cuisine, each bite is a culinary masterpiece.</p>
            <Image src='https://images.rosewoodhotels.com/is/image/rwhg/002-mayakoba-main-bridge-day-1:WIDE-LARGE-16-9' alt='attraction' className=' basis-0 flex-grow' />
          </article>
        </section>

        <ComentariosForm />
      </main>
    </>
  )
}

export default RosewoodMayakoba
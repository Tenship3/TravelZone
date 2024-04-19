import Header from '@/components/Header'
import React from 'react'
import {Image} from '@nextui-org/image'
import ComentariosForm from '@/components/ComentariosForm'
import Breadcrumbs from '@/components/Breadcrumbs'

function BanyanTreeMayakoba() {

  const links = [
    {name: 'Home', path: '/home'},
    {name: 'Hotels - Banyan Tree Mayakoba', path: '/hotels/banyan-tree-mayakoba'}
  ]

  return (
    <>
      <Header title="BANYAN TREE MAYAKOBA" url="https://mayakoba.com/wp-content/uploads/2021/05/BTMXMY-Aerial-View-Banyan-Tree-Mayakoba-Beach-LowRes-e1621636047560.jpg" />

      <main className='flex flex-col gap-20 my-0 mx-auto w-[90%] py-10'>
        <Breadcrumbs links={links} />

        <h2 className='text-teal-700 text-5xl font-extrabold'>Exclusive Hotels in the Riviera Maya: An Unforgettable Stay</h2>

        <h3 className='text-teal-900 text-3xl min-w-[252px]'>Banyan Tree Mayakoba: Asian Luxury on the Mexican Coast</h3>

        <section className='flex flex-col gap-10'>
          <article className='flex flex-wrap gap-5 items-center justify-center'>
            <p className='text-lg'>Luxurious Villas: Experience Thai elegance in Banyan Tree Mayakoba´s villas. With private pools and surrounded by the natural beauty of the Riviera Maya, these residences offer an exclusive retreat.</p>
            <Image src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/ff/d8/5f/lagoon-sunset-rooftop.jpg?w=700&h=-1&s=1' alt='attraction' className=' basis-0 flex-grow' />
          </article>
          <article className='flex flex-wrap gap-5 items-center justify-center flex-row-reverse'>
            <p className='text-lg'>Wellness Experiences: Embark on a journey of relaxation at the Sense spa, where personalized treatments and tranquil settings await. Rosewood Mayakoba is committed to offering wellness experiences that rejuvenate both body and mind.</p>
            <Image src='https://cdn.kiwicollection.com/media/property/PR006027/xl/006027-02-sf_1dJPaW_LagoonandSunsetRooftopPoolVilla-Terrace1-Banyan%20Tree%20Mayakoba.jpg?cb=1676683834' alt='attraction' className=' basis-0 flex-grow' />
          </article>
          <article className='flex flex-wrap gap-5 items-center justify-center'>
            <p className='text-lg'>Sophisticated Cuisine: Savor culinary excellence at Rosewood´s award-winning restaurants. From Mexican specialties to international cuisine, each bite is a culinary masterpiece.</p>
            <Image src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/481290302.jpg?k=405ead8d20b4f097ac71f5c6ce2265e6fff2732ac249ccc4491df7bb2615b113&o=&hp=1' alt='attraction' className=' basis-0 flex-grow' />
          </article>
        </section>

        <ComentariosForm />
      </main>
    </>
  )
}

export default BanyanTreeMayakoba
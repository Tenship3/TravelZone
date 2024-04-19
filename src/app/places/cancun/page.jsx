import Header from '@/components/Header'
import React from 'react'
import {Image} from '@nextui-org/image'
import ComentariosForm from '@/components/ComentariosForm'
import Breadcrumbs from '@/components/Breadcrumbs'

function Cancun() {

  const links = [
    {name: 'Home', path: '/home'},
    {name: 'Places - Cancun', path: '/places/cancun'}
  ]

  return (
    <>
      <Header title="CANCUN" url="https://www.cancunadventure.net/images/puntacancun-airview.jpg" />

      <main className='flex flex-col gap-20 my-0 mx-auto w-[90%] py-10'>
        <Breadcrumbs links={links} />

        <h2 className='text-teal-700 text-5xl font-extrabold'>Paradise in the Mexican Caribbean</h2>

        <section className='flex flex-col gap-10'>
          <article className='flex flex-wrap gap-5 items-center justify-center'>
            <div className='flex flex-col gap-3 basis-0 flex-grow'>
              <h3 className='text-teal-900 text-3xl min-w-[252px]'>White Sand Beaches and Turquoise Waters in Cancun</h3>
              <p className='text-lg'>Bask in the sun on the pristine white sand beaches of Cancun, where the crystal-clear turquoise waters of the Caribbean Sea invite you to relax and unwind in a tropical paradise.</p>
            </div>
            <Image src='https://luxuryavenue.com/cdn/shop/articles/playa-marlin_1200x.jpg?v=1657437636' alt='attraction' width={400} className=' basis-0 flex-grow' />
          </article>
          <article className='flex flex-wrap gap-5 items-center justify-center flex-row-reverse'>
            <div className='flex flex-col gap-3 basis-0 flex-grow'>
              <h3 className='text-teal-900 text-3xl min-w-[252px]'>Nightlife: Clubs and Entertainment</h3>
              <p className='text-lg'>Experience the vibrant nightlife of Cancún as the city comes alive after sunset. From world-class clubs to beachside lounges, discover the electrifying energy and diverse entertainment options that make Cancún a nightlife haven.</p>
            </div>
            <Image src='https://www.cancunadventure.net/images/content/cancun-nightclubs-zone.jpg' alt='attraction' width={400} className=' basis-0 flex-grow' />
          </article>
          <article className='flex flex-wrap gap-5 items-center justify-center'>
            <div className='flex flex-col gap-3 basis-0 flex-grow'>
              <h3 className='text-teal-900 text-3xl min-w-[252px]'>Excursions to Isla Mujeres: Caribbean Adventures</h3>
              <p className='text-lg'>Embark on an adventure to Isla Mujeres, a charming island just off the coast of Cancún. Snorkel in vibrant coral reefs, explore the island´s laid-back atmosphere, and capture breathtaking views of the Caribbean Sea.</p>
            </div>
            <Image src='https://image-tc.galaxy.tf/wijpeg-4rednej3itcfd7mt9a9ox2o8m/09-isla-mujeres.jpg' alt='attraction' width={400} className=' basis-0 flex-grow' />
          </article>
        </section>

        <ComentariosForm />
      </main>
    </>
  )
}

export default Cancun
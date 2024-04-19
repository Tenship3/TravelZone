import Header from '@/components/Header'
import React from 'react'
import {Image} from '@nextui-org/image'
import ComentariosForm from '@/components/ComentariosForm'
import Breadcrumbs from '@/components/Breadcrumbs'

function Tulum() {

  const links = [
    {name: 'Home', path: '/home'},
    {name: 'Places - Tulum', path: '/places/tulum'}
  ]

  return (
    <>
      <Header title="TULUM" url="https://image-tc.galaxy.tf/wijpeg-c9wkpph9vvfrm3kqvkuhl08sk/tulum-1920x1080_wide.jpg?crop=0%2C0%2C1920%2C1080&width=2500" />

      <main className='flex flex-col gap-20 my-0 mx-auto w-[90%] py-10'>
        <Breadcrumbs links={links} />

        <h2 className='text-teal-700 text-5xl font-extrabold'>Tulum: Mayan Ruins and Pristine Beaches</h2>

        <section className='flex flex-col gap-10'>
          <article className='flex flex-wrap gap-5 items-center justify-center'>
            <div className='flex flex-col gap-3 basis-0 flex-grow'>
              <h3 className='text-teal-900 text-3xl min-w-[252px]'>Explore the Archaeological Ruins of Tulum</h3>
              <p className='text-lg'>Embrace sustainable travel at Tulum´s eco-friendly hotels. From beachfront cabanas to jungle retreats, experience a harmonious blend of luxury and environmental consciousness in this eco-conscious destination.</p>
            </div>
            <Image src='https://inah.gob.mx/images/boletines/2023/455/foto_home.jpg' alt='attraction' width={400} className=' basis-0 flex-grow' />
          </article>
          <article className='flex flex-wrap gap-5 items-center justify-center flex-row-reverse'>
            <div className='flex flex-col gap-3 basis-0 flex-grow'>
              <h3 className='text-teal-900 text-3xl min-w-[252px]'>Dreamy Beaches: Relaxation and Photography</h3>
              <p className='text-lg'>Immerse yourself in the dreamy ambiance of Tulum´s beaches. With soft sands and turquoise waters, these picturesque shores provide an ideal backdrop for relaxation and stunning photography.</p>
            </div>
            <Image src='https://www.hotelcabanastulum.com/wp-content/uploads/2017/07/what-to-do-in-tulum-mexico_h.jpg' alt='attraction' width={400} className=' basis-0 flex-grow' />
          </article>
          <article className='flex flex-wrap gap-5 items-center justify-center'>
            <div className='flex flex-col gap-3 basis-0 flex-grow'>
              <h3 className='text-teal-900 text-3xl min-w-[252px]'>Eco-Friendly Hotels and Sustainable Accommodations</h3>
              <p className='text-lg'>Embrace sustainable travel at Tulum´s eco-friendly hotels. From beachfront cabanas to jungle retreats, experience a harmonious blend of luxury and environmental consciousness in this eco-conscious destination.</p>
            </div>
            <Image src='https://media-cdn.tripadvisor.com/media/photo-s/1c/fb/1b/a3/azulik-tulum.jpg' alt='attraction' width={400} className=' basis-0 flex-grow' />
          </article>
        </section>

        <ComentariosForm />
      </main>
    </>
  )
}

export default Tulum
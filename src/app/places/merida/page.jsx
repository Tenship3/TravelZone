import Header from '@/components/Header'
import React from 'react'
import {Image} from '@nextui-org/image'
import ComentariosForm from '@/components/ComentariosForm'
import Breadcrumbs from '@/components/Breadcrumbs'

function Merida() {

  const links = [
    {name: 'Home', path: '/home'},
    {name: 'Places - Merida', path: '/places/merida'}
  ]

  return (
    <>
      <Header title="MERIDA" url="https://www.elsoldemexico.com.mx/incoming/eabxnq-merida-recorte.jpg/ALTERNATES/LANDSCAPE_1140/M%C3%A9rida%20recorte.jpg" />

      <main className='flex flex-col gap-20 my-0 mx-auto w-[90%] py-10'>
        <Breadcrumbs links={links} />

        <h2 className='text-teal-700 text-5xl font-extrabold'>Merida: The Gem of Yucatan</h2>

        <section className='flex flex-col gap-10'>
          <article className='flex flex-wrap gap-5 items-center justify-center'>
            <div className='flex flex-col gap-3 basis-0 flex-grow'>
              <h3 className='text-teal-900 text-3xl min-w-[252px]'>Discover the Colonial Beauty of Mérida</h3>
              <p className='text-lg'>Emmerse yourself in the enchanting atmosphere of Mérida, where colonial architecture and vibrant local life converge. Wander through historic streets lined with pastel-hued buildings, each telling a story of the city´s rich cultural heritage.</p>
            </div>
            <Image src='https://www.poresto.net/u/fotografias/m/2021/2/13/f1280x720-52667_184342_5050.jpg' alt='attraction' width={400} className=' basis-0 flex-grow' />
          </article>
          <article className='flex flex-wrap gap-5 items-center justify-center flex-row-reverse'>
            <div className='flex flex-col gap-3 basis-0 flex-grow'>
              <h3 className='text-teal-900 text-3xl min-w-[252px]'>Gastronomic Delights: Yucatecan Cuisine</h3>
              <p className='text-lg'>Indulge your taste buds in the culinary wonders of Yucatecan cuisine. From savory cochinita pibil to refreshing aguas frescas, Mérida offers a gastronomic journey that reflects the unique flavors and ingredients of the region.</p>
            </div>
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_UF44_MeUneSbTcRWsgF0HpBZPpWWGDisWfzd-uw8Gw&s' alt='attraction' width={400} className=' basis-0 flex-grow' />
          </article>
          <article className='flex flex-wrap gap-5 items-center justify-center'>
            <div className='flex flex-col gap-3 basis-0 flex-grow'>
              <h3 className='text-teal-900 text-3xl min-w-[252px]'>Explore History at Nearby Archaeological Sites</h3>
              <p className='text-lg'>Step back in time as you explore the ancient wonders near Mérida. Visit renowned archaeological sites such as Uxmal and Chichen Itzá, marveling at the impressive Mayan ruins that stand as a testament to the city´s historical significance.</p>
            </div>
            <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Chichen_Itza_3.jpg/1200px-Chichen_Itza_3.jpg' alt='attraction' width={400} className=' basis-0 flex-grow' />
          </article>
        </section>

        <ComentariosForm />
      </main>
    </>
  )
}

export default Merida
import Header from '@/components/Header'
import React from 'react'
import {Image} from '@nextui-org/image'
import ComentariosForm from '@/components/ComentariosForm'
import Breadcrumbs from '@/components/Breadcrumbs'

function HuatulcoBays() {

  const links = [
    {name: 'Home', path: '/home'},
    {name: 'Beaches - Huatulco Bays', path: '/beaches/huatulco-bays'}
  ]

  return (
    <>
      <Header title="HUATULCO BAYS" url="https://rh-destinations.com/en/wp-content/uploads/sites/5/2021/12/bahia-chachahual-1024x576-1.jpg" />

      <main className='flex flex-col gap-20 my-0 mx-auto w-[90%] py-10'>
        <Breadcrumbs links={links} />

        <h2 className='text-teal-700 text-5xl font-extrabold'>Huatulco Bays: Symphony of Coastal Opulence</h2>

        <section className='flex flex-wrap gap-5 items-center justify-center'>
          <div className='flex flex-col gap-3 basis-0 flex-grow'>
            <h3 className='text-teal-900 text-3xl min-w-[252px]'>Huatulco Bays: Pacific Bliss</h3>
            <p className='text-lg'>Discover Pacific bliss at Huatulco Bays, where golden sands and azure waters converge in coastal perfection. Nestled on Mexico´s southern shore, each bay is a tranquil haven, inviting you to savor the simplicity of luxury by the Pacific. Explore hidden coves, indulge in water adventures, and experience the allure of Huatulco Bays a coastal gem on Mexico´s Pacific coast.</p>
          </div>
          <Image src='https://rh-destinations.com/en/wp-content/uploads/sites/5/2021/12/bahia-chachahual-1024x576-1.jpg' alt='attraction' width={600} className=' basis-0 flex-grow' />
        </section>

        <section className='flex justify-center'>
          <iframe width="1215" height="523" src="https://www.youtube.com/embed/qQ9t1MuiCfI" title="Huatulco the best beach town in Mexico, wonderful bays, coves and beach with clear turquoise waters" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </section>

        <ComentariosForm />
      </main>
    </>
  )
}

export default HuatulcoBays
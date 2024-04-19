import Header from '@/components/Header'
import React from 'react'
import {Image} from '@nextui-org/image'
import ComentariosForm from '@/components/ComentariosForm'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Link } from '@nextui-org/link'
import {ScrollShadow} from "@nextui-org/scroll-shadow";

function Xcaret() {

  const links = [
    {name: 'Home', path: '/home'},
    {name: 'Hotels - Xcaret', path: '/hotels/xcaret'}
  ]

  return (
    <>
      <Header title="XCARET" url="https://www.grupoxcaret.com/es/wp-content/uploads/2017/12/Aerea-HXM-1.jpg" />

      <main className='flex flex-col gap-20 my-0 mx-auto w-[90%] py-10'>
        <Breadcrumbs links={links} />

        <h2 className='text-teal-700 text-3xl'>XCARET HOTELS</h2>

        <ScrollShadow orientation='horizontal' hideScrollBar className='flex gap-10 items-center h-[30vh]'>
          <Link 
            href='/hotels/xcaret/hotel-xcaret-mexico' 
            className='p-2 rounded-xl bg-cover bg-center bg-no-repeat flex flex-col justify-start items-center bg-black bg-opacity-30 bg-blend-darken cursor-pointer h-[150px] min-w-[250px] transition-all duration-200 hover:scale-[0.9]'
            style={{ backgroundImage: "url('https://www.arquired.com.mx/wp-content/uploads/2018/08/HXMSUITS9.jpg')" }}>
            <h4 className='text-lg text-white font-extrabold'>Hotel Xcaret Mexico</h4>
          </Link>
          <Link 
            href='/hotels/xcaret/hotel-xcaret-arte' 
            className='p-2 rounded-xl bg-cover bg-center bg-no-repeat flex flex-col justify-start items-center bg-black bg-opacity-30 bg-blend-darken cursor-pointer h-[150px] min-w-[250px] transition-all duration-200 hover:scale-[0.9]'
            style={{ backgroundImage: "url('https://storage.googleapis.com/gx-global-cms/mkt/e7440fba-e4d8-402c-8771-328f9efefdd6.png')" }}>
            <h4 className='text-lg text-white font-extrabold'>Hotel Xcaret Arte</h4>
          </Link>
          <Link 
            href='/hotels/xcaret/casa-de-la-playa' 
            className='p-2 rounded-xl bg-cover bg-center bg-no-repeat flex flex-col justify-start items-center bg-black bg-opacity-30 bg-blend-darken cursor-pointer h-[150px] min-w-[250px] transition-all duration-200 hover:scale-[0.9]'
            style={{ backgroundImage: "url('https://cf.bstatic.com/xdata/images/hotel/max1024x768/339317494.jpg?k=48b6ef40da0d89e5a3f3494ea7ab6940c318900779e60a81e19a6c182dcff23d&o=&hp=1')" }}>
            <h4 className='text-lg text-white font-extrabold'>Casa de la Playa</h4>
          </Link>
          <Link 
            href='/hotels/xcaret/casa-de-la-flora' 
            className='p-2 rounded-xl bg-cover bg-center bg-no-repeat flex flex-col justify-start items-center bg-black bg-opacity-30 bg-blend-darken cursor-pointer h-[150px] min-w-[250px] transition-all duration-200 hover:scale-[0.9]'
            style={{ backgroundImage: "url('https://cf.bstatic.com/xdata/images/hotel/max1024x768/529655497.jpg?k=60a2deb0b876e3f613fd00332c2b11fc50af12036ffcf77effafaa87517d3c51&o=&hp=1')" }}>
            <h4 className='text-lg text-white font-extrabold'>Casa de la Flora</h4>
          </Link>
          <Link 
            href='/hotels/xcaret/casa-del-rio' 
            className='p-2 rounded-xl bg-cover bg-center bg-no-repeat flex flex-col justify-start items-center bg-black bg-opacity-30 bg-blend-darken cursor-pointer h-[150px] min-w-[250px] transition-all duration-200 hover:scale-[0.9]'
            style={{ backgroundImage: "url('https://comiviajeros.com/wp-content/uploads/2022/01/DJI_0398.jpg')" }}>
            <h4 className='text-lg text-white font-extrabold'>Casa del Río</h4>
          </Link>
          <Link 
            href='/hotels/xcaret/casa-de-la-luna' 
            className='p-2 rounded-xl bg-cover bg-center bg-no-repeat flex flex-col justify-start items-center bg-black bg-opacity-30 bg-blend-darken cursor-pointer h-[150px] min-w-[250px] transition-all duration-200 hover:scale-[0.9]'
            style={{ backgroundImage: "url('https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2022/09/hotel-xcaret-arte1.webp?fit=653%2C490&ssl=1')" }}>
            <h4 className='text-lg text-white font-extrabold'>Casa de la Luna</h4>
          </Link>
          <Link 
            href='/hotels/xcaret/casa-de-la-tierra' 
            className='p-2 rounded-xl bg-cover bg-center bg-no-repeat flex flex-col justify-start items-center bg-black bg-opacity-30 bg-blend-darken cursor-pointer h-[150px] min-w-[250px] transition-all duration-200 hover:scale-[0.9]'
            style={{ backgroundImage: "url('https://contenthotels.amimir.com/hotels/mx/quintana_roo_r_285/playa_del_carmen_c_3908/h_63079/imatges/xcaret-mexico-tierra-family-all-inclusive-0.jpg?v=1068a3dd71ee81353166112660d04e34')" }}>
            <h4 className='text-lg text-white font-extrabold'>Casa de la tierra</h4>
          </Link>
          <Link 
            href='/hotels/xcaret/casa-del-agua' 
            className='p-2 rounded-xl bg-cover bg-center bg-no-repeat flex flex-col justify-start items-center bg-black bg-opacity-30 bg-blend-darken cursor-pointer h-[150px] min-w-[250px] transition-all duration-200 hover:scale-[0.9]'
            style={{ backgroundImage: "url('https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//hotelier-images/82/47/a674ef0172d81897e87fdd4d5b13d1bd31fedb238cff3738254f279f707d.jpeg')" }}>
            <h4 className='text-lg text-white font-extrabold'>Casa del Agua</h4>
          </Link>
        </ScrollShadow>

        <h2 className='text-teal-700 text-5xl font-extrabold'>Exclusive Hotels in the Riviera Maya: An Unforgettable Stay</h2>

        <h3 className='text-teal-900 text-3xl min-w-[252px]'>Xcaret Hotel: Adventure and Luxury in One Place</h3>

        <section className='flex flex-col gap-10'>
          <article className='flex flex-wrap gap-5 items-center justify-center'>
            <p className='text-lg'>Immerse in Nature: Experience the perfect fusion of jungle and sea at Xcaret Hotel. Discover rooms surrounded by lush greenery and exclusive access to Xcaret and Xel-Há parks.</p>
            <Image src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/132403204.jpg?k=bafd20aa058f8083142c0fdebad42bf041969450d22eb9526511e3b517898a11&o=&hp=1' alt='attraction' className=' basis-0 flex-grow' />
          </article>
          <article className='flex flex-wrap gap-5 items-center justify-center flex-row-reverse'>
            <p className='text-lg'>Entertainment and Culture: Enjoy breathtaking shows and unique cultural experiences right at the hotel. From Mayan ceremonies to artistic performances, Xcaret Hotel offers world-class entertainment.</p>
            <Image src='https://www.kayak.com.mx/rimg/himg/9c/b7/2b/ice-216520592-79981412_3XL-863182.jpg?width=1366&height=768&crop=true' alt='attraction' className=' basis-0 flex-grow' />
          </article>
          <article className='flex flex-wrap gap-5 items-center justify-center'>
            <p className='text-lg'>Signature Gastronomy: Indulge in a variety of high cuisine options. Xcaret Hotel´s restaurants serve exquisite dishes in stunning settings, from the beach to the jungle.</p>
            <Image src='https://media-cdn.tripadvisor.com/media/photo-s/1c/ae/63/46/hotel-xcaret-mexico.jpg' alt='attraction' className=' basis-0 flex-grow' />
          </article>
        </section>

        <ComentariosForm />
      </main>
    </>
  )
}

export default Xcaret
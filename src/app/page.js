'use client'

import Breadcrumbs from "@/components/Breadcrumbs";
import Header from "@/components/Header";
import { Image } from "@nextui-org/image"
import Link from 'next/link'

export default function Home() {

  const breadcrumbsLinks = [
    {name: 'Home', path: '/home'}
  ]

  return (
    <>
      <Header 
        title="THE BEST PLACE YOU CAN TOUR!" 
        subTitle='Visit all the "Rivera Maya" with the best price in the world.'
        url="https://www.mexicodesconocido.com.mx/wp-content/uploads/2010/06/xcaret-atractivos-riviera-maya.jpeg">
      </Header>

      <main className="py-10 my-0 mx-auto w-[90%] flex flex-col gap-10">
        <Breadcrumbs links={breadcrumbsLinks} />

        <section className="flex flex-col gap-5">
          <h2 className="text-5xl font-extrabold text-teal-900">Choose your favorite place!</h2>

          <div className="flex gap-10 justify-center items-center flex-wrap">
              <Link 
                href="/places/cancun" 
                className="basis-0 flex-grow flex justify-center items-center gap-2 h-[12rem] min-w-[12rem] rounded-xl bg-cover bg-no-repeat bg-center bg-black bg-opacity-30 bg-blend-darken hover:bg-blend-normal"
                style={{ backgroundImage: 'url("https://images.pexels.com/photos/17061348/pexels-photo-17061348/free-photo-of-mar-playa-arena-bahia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' }}
                >
                <strong className="text-white text-2xl font-extrabold text-center p-2">CANCUN</strong>
              </Link>
              <Link 
                href="/places/tulum" 
                className="basis-0 flex-grow flex justify-center items-center gap-2 h-[12rem] min-w-[12rem] rounded-xl bg-cover bg-no-repeat bg-center bg-black bg-opacity-30 bg-blend-darken hover:bg-blend-normal"
                style={{ backgroundImage: 'url("https://images.pexels.com/photos/17179205/pexels-photo-17179205/free-photo-of-punto-de-referencia-monumento-antiguo-ruinas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' }}                >
                <strong className="text-white text-2xl font-extrabold text-center p-2">TULUM</strong>
              </Link>
              <Link 
                href="/places/playa-del-carmen" 
                className="basis-0 flex-grow flex justify-center items-center gap-2 h-[12rem] min-w-[12rem] rounded-xl bg-cover bg-no-repeat bg-center bg-black bg-opacity-30 bg-blend-darken hover:bg-blend-normal"
                style={{ backgroundImage: 'url("https://images.pexels.com/photos/6129358/pexels-photo-6129358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' }}                >
                <strong className="text-white text-2xl font-extrabold text-center p-2">PLAYA DEL CARMEN</strong>
              </Link>
              <Link 
                href="/places/merida" 
                className="basis-0 flex-grow flex justify-center items-center gap-2 h-[12rem] min-w-[12rem] rounded-xl bg-cover bg-no-repeat bg-center bg-black bg-opacity-30 bg-blend-darken hover:bg-blend-normal"
                style={{ backgroundImage: 'url("https://images.pexels.com/photos/6234514/pexels-photo-6234514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' }}                >
                <strong className="text-white text-2xl font-extrabold text-center p-2">MERIDA</strong>
              </Link>
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <h2 className="text-5xl font-extrabold text-teal-900">Your best option Right Now! <strong className="text-teal-500">XCARET´S HOTEL</strong></h2>
        
          <p className="text-lg">Are you ready to live a unique experience at Hotel Xcaret Mexico? Let the natural beauty and culture of Mexico envelop you on an unforgettable journey. Book your stay now and get ready to discover paradise on Earth! Don´t miss the opportunity to visit this incredible destination. Your Mexican adventure awaits you!</p>
        
          <div className="flex justify-center">
            <iframe width="914" height="514" src="https://www.youtube.com/embed/AeIlL0sCFnY" title="Dormí en el famoso hotel XCARET | ¿Por qué es TAN CARO? ¿Vale la pena?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </section>

        <section className="flex flex-col gap-10">
          <article className="flex max-md:flex-col items-center gap-5">
            <div className="flex flex-col gap-3">
              <h3 className="text-4xl text-teal-700">Pristine Beaches</h3>
              <div className="flex flex-col gap-3">
                <h4 className="text-2xl">Playa del Carmen</h4>
                <p className="text-lg">A bustling coastal town known for its lively Fifth Avenue, a pedestrian street lined with shops, restaurants, and vibrant nightlife. Beautiful beaches with soft white sand and clear turquoise waters, offering a perfect blend of relaxation and excitement.</p>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-2xl">Tulum</h4>
                <p className="text-lg">A coastal paradise with a unique combination of ancient Mayan ruins and stunning beaches. The Tulum ruins, perched on a cliff overlooking the Caribbean Sea, provide a breathtaking backdrop to the pristine surroundings.</p>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-2xl">Akumal</h4>
                <p className="text-lg">Renowned for its serene atmosphere and excellent snorkeling opportunities. {'"Akumal"'} translates to {'"Place of Turtles"'} in Maya, and it´s a prime location for encountering and swimming with these gentle creatures.</p>
              </div>
            </div>
            <Image
              src="https://i.pinimg.com/originals/17/d8/7f/17d87fd0b317f56f3131f1c6177f0a22.png"
              alt="Pristine Beaches"
              width={800}
            />
          </article>
          <article className="flex max-md:flex-col-reverse items-center gap-5">
            <Image
              src="https://www.mexicodesconocido.com.mx/wp-content/uploads/2010/05/chichen-itza-arquitectura-que-visitar.png"
              alt="Pristine Beaches"
              width={800}
            />
            <div className="flex flex-col gap-3">
              <h3 className="text-4xl text-teal-700 md:text-right">Archaeological Sites</h3>
              <div className="flex flex-col gap-3">
                <h4 className="text-2xl">Chichén Itzá</h4>
                <p className="text-lg">Home to the iconic Pyramid of Kukulcán, a marvel of ancient Mayan architecture and a UNESCO World Heritage site. Visit during the spring or fall equinox to witness the famous play of light and shadow on the pyramid´s staircase. </p>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-2xl">Tulum</h4>
                <p className="text-lg">A coastal archaeological site with well-preserved structures, offering a glimpse into the Mayan civilization´s coastal lifestyle. The Castillo, a cliff-top castle, provides stunning panoramic views of the sea.</p>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-2xl">Coba</h4>
                <p className="text-lg">Known for the Nohoch Mul pyramid, the tallest pyramid in the Yucatán Peninsula. Explore the ancient Mayan city with its network of stone causeways known as sacbes.</p>
              </div>
            </div>
          </article>
          <article className="flex max-md:flex-col items-center gap-5">
            <div className="flex flex-col gap-3">
              <h3 className="text-4xl text-teal-700">Magical Cenotes</h3>
              <div className="flex flex-col gap-3">
                <h4 className="text-2xl">Gran Cenote</h4>
                <p className="text-lg">A mesmerizing cenote with a combination of open water and cavern systems, ideal for snorkeling and swimming. Crystal-clear waters reveal intricate underwater rock formations.</p>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-2xl">Dos Ojos</h4>
                <p className="text-lg">Translating to {'"Two Eyes,"'} this cenote is part of the world´s longest underwater cave system. Divers and snorkelers can explore the captivating underwater landscapes.</p>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-2xl">Cenote Azul</h4>
                <p className="text-lg">An open-air cenote surrounded by lush vegetation, featuring deep blue waters and platforms for diving. A popular spot for both relaxation and adventure.</p>
              </div>
            </div>
            <Image
              src="https://www.viajandoporelmundomundial.com/wp-content/uploads/2021/12/samula.jpg"
              alt="Pristine Beaches"
              width={800}
            />
          </article>
          <article className="flex max-md:flex-col-reverse items-center gap-5">
            <Image
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/11/32/d7/c3.jpg"
              alt="Pristine Beaches"
              width={800}
            />
            <div className="flex flex-col gap-3">
              <h3 className="text-4xl text-teal-700 md:text-right">Theme Parks</h3>
              <div className="flex flex-col gap-3">
                <h4 className="text-2xl">Xcaret</h4>
                <p className="text-lg">A natural and cultural park offering a variety of activities, including archaeological sites, wildlife exhibits, and a coral reef aquarium. Don´t miss the spectacular night show, {'"Xcaret México Espectacular"'}, showcasing Mexico´s history and traditions.</p>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-2xl">Xel-Há</h4>
                <p className="text-lg">An ecological park known for its large natural inlet where freshwater and seawater mix. Snorkel in the river and explore the diverse marine life in this unique aquatic environment.</p>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-2xl">Xplore</h4>
                <p className="text-lg">An adventure park with thrilling activities such as zip-lining, amphibious vehicle exploration, underground rivers, and cave rafting. Perfect for adrenaline enthusiasts seeking a unique outdoor experience.</p>
              </div>
            </div>
          </article>
          <article className="flex max-md:flex-col items-center gap-5">
            <div className="flex flex-col gap-3">
              <h3 className="text-4xl text-teal-700">Gastronomy</h3>
              <div className="flex flex-col gap-3">
                <h4 className="text-2xl">Mexican Cuisine</h4>
                <p className="text-lg">Indulge in a culinary journey with authentic Mexican dishes, including street tacos filled with savory meats, fresh salsas, and traditional spices. Sample regional specialties like cochinita pibil {'(slow-roasted pork)'} and elotes {'(grilled corn on the cob)'}.</p>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-2xl">Seafood</h4>
                <p className="text-lg">Enjoy the bounty of the Caribbean Sea with delectable seafood options such as ceviche, grilled fish tacos, and shrimp dishes. Coastal restaurants offer a perfect combination of ocean views and exquisite flavors.</p>
              </div>
            </div>
            <Image
              src="https://aprende.com/wp-content/uploads/2020/09/aprende-todo-sobre-la-gastronomia-mexicana-con-el-diplomado-de-cocina-tradicional-mexicana-.jpg"
              alt="Pristine Beaches"
              width={800}
            />
          </article>
        </section>
      </main>
    </>
  );
}

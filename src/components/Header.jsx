import React from 'react'

function Header({children, title, subTitle, url}) {
  return (
    <section 
        className='w-full h-[50vh] bg-end bg-cover bg-no-repeat bg-black bg-opacity-40 bg-blend-darken text-white flex justify-center text-center' 
        style={{ backgroundImage: `url(${url})` }}>
        <div className='flex flex-col gap-5 items-center justify-end py-20'>
            <h1 className='text-3xl md:text-5xl'>{title}</h1>
            <p className='text-xl'>{subTitle}</p>
            {children}
        </div>
    </section>
  )
}

export default Header
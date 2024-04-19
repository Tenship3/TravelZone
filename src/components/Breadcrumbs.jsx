import React from 'react'
import Link from 'next/link'
import ChevronRight from './ui/icons/ChevronRight'
function Breadcrumbs({links}) {
  return (
    <div className='flex gap-3'>
        {
            links.map(link => (
                <div key={link.name} className='flex gap-3 items-center'>
                    <Link href={link.path} className='text-gray-500 transition-all duration-300 hover:text-black'>{link.name}</Link>
                    <ChevronRight fill="gray" />
                </div>
            ))
        }
    </div>
  )
}

export default Breadcrumbs
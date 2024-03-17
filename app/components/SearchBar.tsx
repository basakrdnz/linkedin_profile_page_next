import Image from 'next/image'
import React from 'react'

const SearchBar = () => {
  return (
    <section className='flex text-lg relative ml-3'>
      <form action="">
        <Image src="/icons8-search-64.png" alt={''} width={30} height={30} className='absolute z-20 top-3 left-2'></Image>
        <input type="text" className='hover:cursor-pointer bg-gray-100 w-auto rounded-xl px-6 py-3'
         value="    Arama Yap"   />
        </form>
      </section>
  )
}

export default SearchBar

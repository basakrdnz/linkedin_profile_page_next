import Image from 'next/image'
import React from 'react'

const SearchBar = () => {
  return (
    <section className='flex my-auto text-lg '>
      <form action="">
        <Image src="/search_icon.png" alt={''} width={30} height={30} className='absolute top-4  z-10'></Image>
        <input type="text" className='flex relative bg-gray-100 rounded-md px-5 py-2'
         value="   Arama Yap"   />
        </form>
      </section>
  )
}

export default SearchBar

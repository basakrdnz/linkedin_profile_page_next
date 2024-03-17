import Image from 'next/image'
import React from 'react'

const SearchBar = () => {
  return (
    <section className='flex text-lg relative'>
      <form action="">
        <Image src="/icons8-search-64.png" alt={''} width={30} height={30} className='absolute z-20 top-2 left-2'></Image>
        <input type="text" className='block bg-gray-100 rounded-md px-5 py-2'
         value="     Arama Yap"   />
        </form>
      </section>
  )
}

export default SearchBar

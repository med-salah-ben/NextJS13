import Link from 'next/link'
import React from 'react'

//px = padding R & L
//py = padding T & B
const Header = () => {
  return (
    <header className='p-5 bg-blue-500'>
      
        <Link href="/" className='px-5 py-1 bg-white text-blue-500 m-1 rounded-md'>Home</Link>
        <Link href="/todos" className='px-5 py-1 bg-white text-blue-500 m-1 rounded-md'>Todos</Link>
        <Link href="/search" className='px-5 py-1 bg-white text-blue-500 m-1 rounded-md'>Search</Link>

    </header>
  )
}

export default Header
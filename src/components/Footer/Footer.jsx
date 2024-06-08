import React from 'react'

const Footer = () => {
  return (
    <div className='fixed bottom-0 pb-1 left-0 flex justify-center items-center w-full backdrop-blur-md z-20'>
      <p className='text-[2.5vh] font-extrabold'>Book Search</p> <p className='text-[2vh]'> &nbsp;&nbsp;✧ Powered by <a href="https://openlibrary.org/developers/api" target='blank' className='text-blue-700 underline'>Open Library API</a></p>
    </div>
  )
}

export default Footer
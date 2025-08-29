import React from 'react'

function Navbar() {
  return (
    <>
    <div className='flex flex-wrap justify-between items-center '>
        <img className='h-30 ml-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyTYn66MREg-vPuFZJXNk4391ZtR51RidOdczRMcuREiqGhUbU6iJwufo2PC7U6Cxo2Q&usqp=CAU" alt="airbnb logo" />
        <div className='flex gap-5'>
            <p className='font-bold italic ml-10'>Home</p>
            <p className='font-bold italic'>Experience</p>
            <p className='font-bold italic'>Services</p>
        </div>
        <p className='mr-10 ml-10 font-bold mt-5 md:mb-5'>Become a host</p>
    </div>
    </>
  )
}

export default Navbar
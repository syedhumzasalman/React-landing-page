import React, { useState } from 'react'

function Searchbar() {

    let [cityName, setcityName] = useState("Islamabad")

    return (
        <>
            <div className="flex items-center justify-center mt-5 md:mb-5">
                <input
                    type="text" placeholder="Where"
                    className="bg-white border border-gray-300 rounded-full shadow-sm focus:border-red-400 focus:ring-2 focus:ring-red-300 transition-all duration-300 p-4 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 outline-none"
                />
            </div>

                <h1 className='font-bold text-2xl ml-10 mt-5'>Popular homes in {cityName}</h1>

        </>
    )
}

export default Searchbar
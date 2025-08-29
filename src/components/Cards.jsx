import React, { useState } from 'react'


function Cards(props) {

    // console.log(props);

    return (
        <>
            <div className='mt-1'>

                <div className="w-60 rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer mt-10 md:ml-5">
                    {/* Image Section */}
                    <div className="relative">
                        <img
                            src={props.image}
                            alt="hotel name"
                            className="w-full h-40 object-cover"
                        />
                        {/* Badge */}
                        <span className="absolute top-2 left-2 bg-white text-xs font-semibold px-2 py-1 rounded-full shadow">
                            Guest favorite
                        </span>
                    </div>

                    {/* Content */}
                    <div className="p-2">
                        <h3 className="text-sm font-semibold">{props.name}</h3>
                        <p className="text-gray-600 text-sm">{props.details}</p>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Cards
import React from 'react'

function Footer() {
    return (
        <>
            <div className="mt-10 ml-5 md:ml-10">
                <h1 className='font-bold text-2xl mb-6'>Inspiration for future getaways </h1>
                {/* Tabs */}
                <div className="flex gap-6 border-b">
                    <button className="pb-2 border-b-2 border-black font-semibold">
                        Unique stays
                    </button>
                    <button className="pb-2 text-gray-500 hover:text-black">
                        Travel tips & inspiration
                    </button>
                    <button className="pb-2 text-gray-500 hover:text-black">
                        Airbnb-friendly apartments
                    </button>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 mt-6 text-sm">
                    <div>
                        <p className="font-medium">Cabins</p>
                        <p className="text-gray-500">United States</p>
                    </div>
                    <div>
                        <p className="font-medium">Treehouses</p>
                        <p className="text-gray-500">United States</p>
                    </div>
                    <div>
                        <p className="font-medium">Tiny Houses</p>
                        <p className="text-gray-500">United States</p>
                    </div>
                    <div>
                        <p className="font-medium">Beach Houses</p>
                        <p className="text-gray-500">United States</p>
                    </div>
                    <div>
                        <p className="font-medium">Lakehouses</p>
                        <p className="text-gray-500">United States</p>
                    </div>
                    <div>
                        <p className="font-medium">Yurt Rentals</p>
                        <p className="text-gray-500">United States</p>
                    </div>
                    <div>
                        <p className="font-medium">Yurt Rentals</p>
                        <p className="text-gray-500">United Kingdom</p>
                    </div>
                    <div>
                        <p className="font-medium">Castle Rentals</p>
                        <p className="text-gray-500">United States</p>
                    </div>
                    <div>
                        <p className="font-medium">Houseboats</p>
                        <p className="text-gray-500">United States</p>
                    </div>
                    <div>
                        <p className="font-medium">Holiday Caravans</p>
                        <p className="text-gray-500">United Kingdom</p>
                    </div>
                    <div>
                        <p className="font-medium">Private Island Rentals</p>
                        <p className="text-gray-500">United States</p>
                    </div>
                    <div>
                        <p className="font-medium">Farm Houses</p>
                        <p className="text-gray-500">United States</p>
                    </div>
                    <div>
                        <p className="font-medium">Farm Cottages</p>
                        <p className="text-gray-500">United Kingdom</p>
                    </div>
                    <div>
                        <p className="font-medium">Cabin Rentals</p>
                        <p className="text-gray-500">Australia</p>
                    </div>
                    <div>
                        <p className="font-medium">Luxury Cabins</p>
                        <p className="text-gray-500">United Kingdom</p>
                    </div>
                    <div>
                        <p className="font-medium">Holiday Chalets</p>
                        <p className="text-gray-500">United Kingdom</p>
                    </div>
                    <div>
                        <p className="font-medium">Show more</p>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-sm mb-10">
                    <div>
                        <h4 className="font-semibold">Support</h4>
                        <ul className="mt-2 space-y-1 text-gray-500">
                            <li>Help Center</li>
                            <li>AirCover</li>
                            <li>Anti-discrimination</li>
                            <li>Disability support</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold">Hosting</h4>
                        <ul className="mt-2 space-y-1 text-gray-500">
                            <li>Airbnb your home</li>
                            <li>Airbnb your experience</li>
                            <li>Airbnb your service</li>
                            <li>AirCover for Hosts</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold">Airbnb</h4>
                        <ul className="mt-2 space-y-1 text-gray-500">
                            <li>2025 Summer Release</li>
                            <li>Newsroom</li>
                            <li>Careers</li>
                            <li>Investors</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
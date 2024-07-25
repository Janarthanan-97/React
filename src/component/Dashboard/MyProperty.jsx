import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PropertyCard from './PropertyCard'

function MyProperty() {
    let token = localStorage.getItem('token')
    const [filters, setFilters] = useState({
        minPrice: '',
        maxPrice: '',
        location: '',
        propertyType: '',
    });
    const [propertiesData, setpropertiesData] = useState([])

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const filteredProperties = propertiesData.filter(property => {
        return (
            (filters.minPrice === '' || property.price >= parseInt(filters.minPrice)) &&
            (filters.maxPrice === '' || property.price <= parseInt(filters.maxPrice)) &&
            (filters.location === '' || property.location.toLowerCase().includes(filters.location.toLowerCase())) &&
            (filters.propertyType === '' || property.type.toLowerCase().includes(filters.propertyType.toLowerCase()))
        );
    });

    const fetchProperty = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_URL}/property/my-property`,  {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setpropertiesData(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProperty()
    }, [])
    return (
        <div>
            <div className="flex flex-wrap gap-4 mb-4 justify-center items-center">
                {/* Price Range Filter */}
                <div className='border border-gray-300 shadow-md p-3'>
                    <label className="block font-medium">Price Range:</label>
                    <div className="flex">
                        <input
                            type="number"
                            name="minPrice"
                            placeholder="Min"
                            value={filters.minPrice}
                            onChange={handleFilterChange}
                            className="border-gray-300 rounded-l-md px-3 py-2 w-24 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                        />
                        <input
                            type="number"
                            name="maxPrice"
                            placeholder="Max"
                            value={filters.maxPrice}
                            onChange={handleFilterChange}
                            className="border-gray-300 rounded-r-md px-3 py-2 w-24 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                        />
                    </div>
                </div>

                {/* Location Filter */}
                <div className='border border-gray-300 shadow-md p-3'>
                    <label className="block font-medium">Location:</label>
                    <input
                        type="text"
                        name="location"
                        placeholder="Enter location"
                        value={filters.location}
                        onChange={handleFilterChange}
                        className="border-gray-300 rounded-md px-3 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    />
                </div>

                {/* Property Type Filter */}
                <div className='border border-gray-300 shadow-md p-3'>
                    <label className="block font-medium">Property Type:</label>
                    <input
                        type="text"
                        name="propertyType"
                        placeholder="Enter property type"
                        value={filters.propertyType}
                        onChange={handleFilterChange}
                        className="border-gray-300 rounded-md px-3 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    />
                </div>

                {/* <button
          className=" w-fit h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={fetchProperty}
        >
          Filter
        </button> */}

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProperties.map(property => (
                    <PropertyCard key={property._id} property={property} fromMyProperty = {true} />
                ))}
            </div>
        </div>
    )
}

export default MyProperty
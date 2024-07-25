import React from 'react';
import { useNavigate } from 'react-router-dom';

const PropertyCard = ({ property, fromMyProperty }) => {
  let navigate = useNavigate()

  const handleChange=()=>{
    navigate(`/update-property/${property._id}`)
  }
  return (
    <div className="relative border rounded-lg overflow-hidden shadow-md">
    {
      property.booked && !property.sold && <span className="absolute inline-block bg-red-500 text-white text-xs m-2 px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
      Booked
    </span>
    }
     {property.sold && <span className="absolute inline-block bg-red-500 text-white text-xs m-2 px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
      Sold
    </span>}
      <img src={property.pic} alt={property.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{property.title}</h2>
        <p className="text-gray-600 mb-2">Location: {property.location}</p>
        <p className="text-gray-600 mb-2">Type: {property.type}</p>
        <p className="text-gray-600">Price: {property.price.toLocaleString()} ₹</p>
      </div>
      {!property.sold && (<button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded"
      onClick={() => {
        // Handle click event, e.g., navigate to booking page
        console.log('Book Now clicked');
      }}
    >
      Book Now
    </button>)}
    {
      fromMyProperty && (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded"
        onClick={handleChange}
        >
          Edit
        </button>
      )
    }

    </div>
  );
};

export default PropertyCard;
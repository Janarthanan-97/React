import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const PropertyForm = () => {
  let { id } = useParams()
  let navigate = useNavigate()
  const [property, setProperty] = useState(false)

  const [formData, setFormData] = useState({
    id: '',
    title: '',
    price: '',
    location: '',
    type: '',
    pic: '',
    sold: false,
    booked: false,
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      let { data } = await axios.put(`${import.meta.env.VITE_URL}/property/update`, formData, {
        headers: {
          Authorization: `bearer ${localStorage.getItem('token')}`
        }
      })
      console.log(data)

    } catch (error) {
      console.log(error)
    }
  };

  const fetchProperty = async () => {
    try {
      let { data } = await axios.get(`${import.meta.env.VITE_URL}/property/${id}`, {
        headers: {
          Authorization: `bearer ${localStorage.getItem('token')}`
        }
      })
      setFormData(data)
      setProperty(true)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async () => {
    console.log({_id:id})
    try {
      let { data } = await axios.delete(`${import.meta.env.VITE_URL}/property/delete/${id}`,  {
                  headers: {
          Authorization: `bearer ${localStorage.getItem('token')}`,
        }
      }
    )
      console.log(data)
      navigate('/my-property')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (id != 0) fetchProperty()
  }, [property])

  return (

    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">{property ? 'Edit Property' : 'Add New Property'}</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter property title"
          className="border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-200"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter price"
          className="border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-200"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter location"
          className="border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-200"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Type:</label>
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
          placeholder="Enter property type"
          className="border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-200"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Image URL:</label>
        <input
          type="text"
          name="pic"
          value={formData.pic}
          onChange={handleChange}
          placeholder="Enter image URL"
          className="border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-200"
          required
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="soldCheckbox"
          checked={formData.sold}
          onChange={() => { setFormData({ ...formData, formData, sold: !formData.sold }) }}
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
        <label htmlFor="soldCheckbox" className="ml-2 block text-sm text-gray-900">
          Sold
        </label>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="bookedCheckbox"
          checked={formData.booked}
          onChange={() => { setFormData({ ...formData, formData, booked: !formData.booked }) }}
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
        <label htmlFor="soldCheckbox" className="ml-2 block text-sm text-gray-900">
          Booked
        </label>
      </div>

      <div className="flex justify-end gap-3">
        {property && (<button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          onClick={handleDelete}
        >
          Delete
        </button>)}

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={handleSubmit}
        >
          {property ? 'Save Changes' : 'Add Property'}
        </button>

      </div>

    </div>
  );
};

export default PropertyForm;
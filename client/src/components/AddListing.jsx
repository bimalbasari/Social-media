import React, { useState } from 'react';
import {listing} from "../services/Api"

const AddListing = ({ setListing }) => {
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState("");
  const [previewURL, setPreviewURL] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };


  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageChange = (e) => {
    let selectedPicture = e.target.files[0]
    setPicture(selectedPicture);

    if (selectedPicture) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewURL(reader.result);
      };
      reader.readAsDataURL(selectedPicture);
    }


  };

  const handleSubmit = async (event) => {
    console.log(location,category)
    setListing(false)
    event.preventDefault();
    const formData={
      location,price,picture,description,category
    }
  //   const formData = new FormData();
  //   formData.append('location', location);
  //   formData.append('price', price);
  //   formData.append('picture', picture);
  //   formData.append('description', description);
  //   formData.append('category', category);
   console.log(formData)
    const property = await listing(formData)
    // Perform any necessary submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="mb-4">
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="Location"
          className="w-full border rounded py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={price}
          onChange={handlePriceChange}
          placeholder="Price"
          className="w-full border rounded py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <select
          value={category}
          onChange={handleCategoryChange}
          className="w-full border rounded py-2 px-3"
        >
          <option value="">Select Category</option>
          <option value="Category 1">Category 1</option>
          <option value="Category 2">Category 2</option>
          <option value="Category 3">Category 3</option>
        </select>
      </div>
      <div className="mb-4">
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Description"
          className="w-full border rounded py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <input
          type="file"
          onChange={handleImageChange}
          className="w-full border rounded py-2 px-3"
        />
      </div>
      <div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddListing;

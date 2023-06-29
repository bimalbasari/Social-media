import { useState } from 'react';
import { useSelector } from 'react-redux';
import { listing } from "../services/Api";
import { selectUser } from "../features/index"

const AddEvent = ({ setListing }) => {

  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState("");
  const [previewURL, setPreviewURL] = useState('');
  const user = useSelector(selectUser)

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

    event.preventDefault();

    const config = { Authorization: `Bearer ${user.token}` };


    const formData = {
      location, price, picture, description, category
    }

    const property = await listing(formData, config)
    setListing(false)
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
          className="w-full  rounded py-2 px-3 bg-white text-blue-500 font-bold duration-200">
          <option value="" >Select Partner</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Any">Any</option>
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
          className="bg-white w-full border rounded py-2 px-3"
        />
      </div>
      <div className='m-auto'>
        <button type="submit" className="bg-white hover:bg-blue-500 text-blue-500 duration-300 hover:text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddEvent;

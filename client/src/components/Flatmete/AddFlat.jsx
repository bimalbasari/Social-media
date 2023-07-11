import { useState } from 'react';
import { useSelector } from 'react-redux';
import { addFlat } from "../../services/Api";
import { selectUser } from "../../features/index"

const AddFlat = ({ setListing }) => {

  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [lokingFor, setLokingFor] = useState('');
  const [description, setDescription] = useState('');
  const [pictures, setPictures] = useState([]);
  const [picture0, setPictures0] = useState("");
  const [picture1, setPictures1] = useState("");
  const [picture2, setPictures2] = useState("");

  const [previewURL, setPreviewURL] = useState('');
  const user = useSelector(selectUser)

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };


  const handleCategoryChange = (event) => {
    setLokingFor(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleImageChange = (e) => {
    const selectedFiles = e.target.files;
    setPictures([...pictures, ...selectedFiles]);
  
    // if (selectedPicture) {
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     setPreviewURL(reader.result);
    //   };
    //   reader.readAsDataURL(selectedPicture);
    // }

  };

  // const handleImageChange1 = (e) => {
  //   let selectedPicture = e.target.files[0];
  //   // let selectedPicture = e.target.files[0]
  //   setPictures1(selectedPicture)
  // }
  // const handleImageChange2 = (e) => {
  //   let selectedPicture = e.target.files[0];
  //   // let selectedPicture = e.target.files[0]
  //   setPictures2(selectedPicture)
  // }

 
  const handleSubmit = async (event) => {
    event.preventDefault();
    const config = `Bearer ${user.token}`;
    const formData = {
      location, price,  lokingFor, description,pictures
    }

    const property = await addFlat(formData, config)
    // setListing(false)
    // Perform any necessary submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto ">

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
          value={lokingFor}
          onChange={handleCategoryChange}
          className="w-full  rounded py-2 px-3 bg-white text-blue-500 font-bold duration-200">
          <option value="" >Loking For</option>
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
        name='pictures'
          type="file"
          onChange={handleImageChange}
          className="bg-white w-full border rounded py-2 px-3"
          multiple
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

export default AddFlat;

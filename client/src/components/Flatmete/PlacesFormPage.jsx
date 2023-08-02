import { Navigate } from "react-router-dom";
import { useState } from "react";
import PhotosUploader from "./PhotosUploader";
import Perks from "./Perks";
import { addFlat } from "../../services/Api";

export default function PlacesFormPage() {
  const [title, setitle] = useState("");
  const [address, setAddress] = useState("");
  const [lokingFor, setLokingFor] = useState("");
  const [location, setLocation] = useState("");
  const [picture, setPicture] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [price, setPrice] = useState(1000);

  function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>;
  }

  function inputDescription(text) {
    return <p className="text-gray-500 text-sm">{text}</p>;
  }

  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  const savePlace = async (ev) => {
    ev.preventDefault();
    try {
      const placeData = {
        picture,
        title,
        address,
        description,
        perks,
        extraInfo,
        price,
        lokingFor,
        location,
      };

      //new places
      const property = await addFlat(placeData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white p-4">
      <form onSubmit={savePlace} className=" text-blue-500 ">
        {preInput(
          "Title",
          "Title for your place should be short and catcy in the advertisment"
        )}
        <input
          type="text"
          value={title}
          onChange={(ev) => setitle(ev.target.value)}
          placeholder="title , for example: My lovley Apartment"
        />

        {preInput("Address", "Address to this place")}
        <input
          type="text"
          value={address}
          onChange={(ev) => setAddress(ev.target.value)}
          placeholder="address"
        />

        <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mt-2 -mb-1 font-bold">Rent</h3>
            <input
              type="number"
              value={price}
              onChange={(ev) => setPrice(ev.target.value)}
            />
          </div>

          <div>
            <h3 className="mt-2 mb-1 font-bold">Loking For</h3>
            <select
              value={lokingFor}
              onChange={(ev) => setLokingFor(ev.target.value)}
              className="w-full rounded-full py-2 px-3  text-blue-500 border duration-200"
            >
              <option value="">Loking For</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Any">Any</option>
            </select>
          </div>

          <div>
            <h3 className="mt-2 mb-1 font-bold">Location</h3>
            <select
              className="w-full rounded-full py-2 px-3  text-blue-500 border duration-200"
              value={location}
              onChange={(ev) => setLocation(ev.target.value)}
            >
              <option value="">Select a City</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Chennai">Chennai</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Pune">Pune</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Surat">Surat</option>
              <option value="Lucknow">Lucknow</option>
              <option value="Kanpur">Kanpur</option>
              <option value="Nagpur">Nagpur</option>
              <option value="Indore">Indore</option>
              <option value="Thane">Thane</option>
              <option value="Bhopal">Bhopal</option>
              <option value="Visakhapatnam">Visakhapatnam</option>
              <option value="Pimpri-Chinchwad">Pimpri-Chinchwad</option>
              <option value="Patna">Patna</option>
              <option value="Vadodara">Vadodara</option>
            </select>
          </div>
        </div>

        <PhotosUploader picture={picture} onChange={setPicture} />

        {preInput("Description", "description of the place")}
        <textarea
          name=""
          id=""
          cols="20"
          rows="5"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />

        {preInput("Perks", "Select all the perks")}

        <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <Perks selected={perks} onChange={setPerks} />
        </div>

        {preInput("Extra info", "house rules, etc")}
        <textarea
          value={extraInfo}
          onChange={(ev) => setExtraInfo(ev.target.value)}
        />

        <button className="primary my-4">Save</button>
      </form>
    </div>
  );
}

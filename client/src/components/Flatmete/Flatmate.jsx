import { useEffect, useState } from "react";
import { fetchAllFlat } from "../../services/Api";
import FlatCard from "./flatCard";

const Flats = () => {
  const [allFlats, setAllFlats] = useState(null);
  useEffect(() => {
    const flats = async () => {
      const data = await fetchAllFlat();

      if (data) {
        const type = "buffer";

        data.forEach((flat) => {
          if (flat.owner.picture) {
            // Convert the array of image data into a Uint8Array
            const uint8Array = new Uint8Array(flat.owner.picture.data);
            // Create a Blob from the Uint8Array
            const blob = new Blob([uint8Array], { type });
            // Create an object URL for the Blob
            const objectURL = URL.createObjectURL(blob);

            return (flat.owner.picture = objectURL);
          }
        });
      }
      setAllFlats(data);
    };
    flats();
  }, []);

  return (
    <div>
      {allFlats?.map((data, key) => (
        <FlatCard data={data} key={key} />
      ))}
    </div>
  );
};

export default Flats;

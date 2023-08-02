import { useSelector } from "react-redux";
import { selectUser, selectEvent } from "../../features/index";
import AddEvent from "./AddEvent";
import EventPage from "./EventPage";
import { fetchAllEvent } from "../../services/Api";
import { useEffect } from "react";
import { addEvents } from "../../features/index";
import { useDispatch } from "react-redux";

const Social = () => {
  const user = useSelector(selectUser);
  const events = useSelector(selectEvent);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllEvent();
        if (data) {
          const type = "buffer";

          data.forEach((post) => {
            if (post.postBy.picture) {
              // Convert the array of image data into a Uint8Array
              const uint8Array = new Uint8Array(post.postBy.picture.data);
              // Create a Blob from the Uint8Array
              const blob = new Blob([uint8Array], { type });
              // Create an object URL for the Blob
              const objectURL = URL.createObjectURL(blob);

              return (post.postBy.picture = objectURL);
            }
          });

          data.forEach((post) => {
            if (post.picture) {
              // Convert the array of image data into a Uint8Array
              const uint8Array = new Uint8Array(post.picture.data);
              // Create a Blob from the Uint8Array
              const blob = new Blob([uint8Array], { type });
              // Create an object URL for the Blob
              const objectURL = URL.createObjectURL(blob);

              return (post.picture = objectURL);
            }
          });

          data.forEach((post) => {
            if (post.comments.length >= 1) {
              post.comments.forEach((comment) => {
                // Convert the array of image data into a Uint8Array
                const uint8Array = new Uint8Array(comment.user.picture.data);
                // Create a Blob from the Uint8Array
                const blob = new Blob([uint8Array], { type });
                // Create an object URL for the Blob
                const objectURL = URL.createObjectURL(blob);

                return (comment.user.picture = objectURL);
              });
            }
          });
          data.forEach((post) => {
            if (post.likes.length >= 1) {
              post.likes.forEach((like) => {
                // Convert the array of image data into a Uint8Array
                const uint8Array = new Uint8Array(like.user.picture.data);
                // Create a Blob from the Uint8Array
                const blob = new Blob([uint8Array], { type });
                // Create an object URL for the Blob
                const objectURL = URL.createObjectURL(blob);

                return (like.user.picture = objectURL);
              });
            }
          });

          dispatch(addEvents(data));
        }
      } catch (error) {
        console.log(error);
        // Handle error
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <AddEvent user={user} />
      {events.length > 0 &&
        events.map((data, index) => <EventPage data={data} key={index + 1} />)}
    </>
  );
};

export default Social;

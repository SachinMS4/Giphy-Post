import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineCloseCircle } from "react-icons/ai";

import "../styles/Giphy.css";

function Giphy({ setGiphy, selectHandler }) {
  // Serach GIF input, initially user is displayed for "hello" GIF results.
  const [search, setSearch] = useState("hello");
  const [gifs, setGifs] = useState([]);

  const inputHandler = (e) => {
    const value = e.target.value;

    if (value) setSearch(value);
    else setSearch("Have a good day");
  };

  const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=tgOy8STGaNsOVeGf8jgjANkbac5z6gDV`;

  // Send GET request to Giphy API endpoint.
  useEffect(() => {
    const myRequest = axios.CancelToken.source(); // To cancel previous request if user changed input
    axios
      .get(url, {
        cancelToken: myRequest.token,
      })
      .then((resp) => setGifs(resp.data.data))
      .catch((err) =>
        console.log("There was a problem or request was cancelled.")
      );
    // Cleanup previous cancelled requests
    return () => {
      myRequest.cancel();
    };
  }, [url]);

  return (
    <div className="create-post">
      <header>
        <h3> Search GIFs</h3>
        <div>
          <AiOutlineCloseCircle
            onClick={() => setGiphy((prev) => !prev)}
            fontSize="1.5rem"
            cursor="pointer"
          />
        </div>
      </header>

      {/*To get user GIF serach input  */}
      <div>
        <input
          type="text"
          placeholder="Search GIFs"
          onChange={inputHandler}></input>
      </div>

      {/* Display GIF serach results */}
      {gifs.length > 0 ? (
        <div className="gifs">
          {gifs.map((gif) => (
            <img
              onClick={selectHandler}
              id={gif.id}
              src={gif.images.original.url}
              key={gif.id}
              alt="Gifs"></img>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Giphy;

import React, { useContext, useState } from "react";
import "../styles/CreatePost.css";

import Giphy from "./Giphy";
import { AiOutlineGif, AiOutlineCloseCircle } from "react-icons/ai";
import { ItemsContext } from "../store/context";
import keygenerator from "keygenerator";

function CreatePost({ setCreatePost }) {
  const [giphy, setGiphy] = useState(false);

  //   User input state
  const [gifSelect, setGifSelect] = useState([]);
  const [text, setText] = useState("");

  //   To enable POST submit button only when user entered text or selected a GIF.
  const [error, setError] = useState(true);

  const [items, setItems] = useContext(ItemsContext);

  const textHandler = (e) => {
    if (text) setError(false);
    setText(e.target.value);
  };

  const selectHandler = (e) => {
    setGifSelect([...new Set([...gifSelect, e.target.src])]);
    setError(false);
  };

  function submitHandler(e) {
    e.preventDefault();
    setCreatePost("New Post");
    setItems([
      ...items,
      { text: text, gif_url: gifSelect, id: keygenerator.number() },
    ]);
  }

  function removeSelection(id) {
    setGifSelect(gifSelect.filter((gif) => gif !== id));
  }

  return (
    <section>
      <header>
        <h3>Create Post</h3>
      </header>

      <form onSubmit={submitHandler}>
        {/* Text Input to create new Post */}
        <textarea
          placeholder="Write Something!"
          rows="4"
          cols="50"
          onChange={textHandler}></textarea>

        {/* GIFs Input to create new Post, user can select more that one unique GIFs */}
        <div className="selected-gifs-container">
          {gifSelect.length > 0
            ? gifSelect.map((img, index) => (
                <div className="selected-gifs" key={index}>
                  <img src={img} alt="selected gif" />
                  <AiOutlineCloseCircle
                    className="cancel-gif-select"
                    cursor="pointer"
                    onClick={() => removeSelection(img)}
                  />
                </div>
              ))
            : null}
        </div>

        {/* If user clicks on INSERT GIFs, then <Giphy /> is rendered to serach GIFs */}
        {giphy ? (
          <Giphy setGiphy={setGiphy} selectHandler={selectHandler} />
        ) : (
          <p onClick={() => setGiphy((prev) => !prev)}>
            Insert
            <AiOutlineGif fontSize="2rem" />
          </p>
        )}

        {/* Button will be only enabled when user Has entered Text input or selected one or more GIFs  */}
        <button className={`form-submit ${error ? "disabled" : " "}`}>
          Post
        </button>
      </form>
    </section>
  );
}

export default CreatePost;

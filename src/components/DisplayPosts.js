import React, { useContext } from "react";
import { ItemsContext } from "../store/context";
import "../styles/displayPost.css";
import keygenerator from "keygenerator";

import { BsPerson } from "react-icons/bs";

function DisplayPosts() {
  const items = useContext(ItemsContext)[0];

  return (
    <div className="posts-container">
      {items.map((item) => (
        <section key={item.id} className="display-post">
          {/* Display user avatar and user posted Text */}
          <div className="post-content">
            <div className="avatar">
              <BsPerson fontSize="2.5rem" />
              <h5>UserName</h5>
            </div>
            <p>{item.text}</p>
          </div>

          {/* Display user posted GIFs */}
          <div className="display-gifs">
            {item.gif_url.length > 0
              ? item.gif_url.map((url) => (
                  <img
                    key={keygenerator.number()}
                    src={url}
                    alt="User GIF"></img>
                ))
              : null}
          </div>
        </section>
      ))}
    </div>
  );
}

export default DisplayPosts;

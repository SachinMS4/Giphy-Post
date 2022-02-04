import React, { useContext } from "react";
import { ItemsContext } from "../store/context";
import "../styles/displayPost.css";
import { IoPersonOutline } from "react-icons/io5";
import keygenerator from "keygenerator";

function DisplayPosts() {
  const items = useContext(ItemsContext)[0];

  return (
    <div className="posts-container">
      {items.map((item) => (
        <section key={item.id} className="display-post">
          {/* Display user avatar and user posted Text */}
          <div className="post-content">
            <div className="avatar">
              <IoPersonOutline fontSize="2.5rem" />
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

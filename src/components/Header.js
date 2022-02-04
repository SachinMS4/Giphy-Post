import React, { useState } from "react";
import CreatePost from "./CreatePost";

import "../styles/header.css";

function Header() {
  const [createPost, setCreatePost] = useState("Create Post");

  return (
    <>
      <header className="header">
        <h2>Giphy Post</h2>

        {/* Button to create New Post  */}
        <button
          onClick={() =>
            setCreatePost(createPost === "Cancel" ? "Create Post" : "Cancel")
          }>
          {createPost}
        </button>
      </header>

      {/* When user clicks on Create New Post, <CreatePost/> will be rendered */}
      {createPost === "Cancel" ? (
        <CreatePost setCreatePost={setCreatePost} />
      ) : null}
    </>
  );
}

export default Header;

import { createContext, useState } from "react";

// User Posts Context
export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  // User Posts will be stored here, 4 posts will be there initially to demonstrate Displaying Posts.
  const [posts, setPosts] = useState([
    {
      text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
      gif_url: [
        "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/giphy.gif?cid=59bebfaaej4xvnk2x2cs5ufmj2gzhfkp1o3g7mgp5l7lqw5q&rid=giphy.gif&ct=g",
      ],
      id: 1,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..",
      gif_url: ["https://i.giphy.com/media/rwNpHtaMGnStW/giphy.webp"],
      id: 2,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      gif_url: [
        "https://media3.giphy.com/media/d8oI97avlJAygnp7RC/giphy.gif?cid=59bebfaaej4xvnk2x2cs5ufmj2gzhfkp1o3g7mgp5l7lqw5q&rid=giphy.gif&ct=g",
        "https://i.giphy.com/media/QEIC6GZIEGStO/giphy.webp",
      ],
      id: 3,
    },
    {
      text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
      gif_url: [
        "https://media4.giphy.com/media/elDKvjGiMqG4n5dVmF/giphy.gif?cid=790b7611eac1e7f816f47d25773cd7c96183c1d902658c6c&rid=giphy.gif&ct=g",
      ],
      id: 4,
    },
  ]);

  return (
    <ItemsContext.Provider value={[posts, setPosts]}>
      {children}
    </ItemsContext.Provider>
  );
};

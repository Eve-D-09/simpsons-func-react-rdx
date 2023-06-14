import React from "react";
import Character from "./Character";
import { useSelector } from "react-redux";
import { selectSimpsons, selectSearch, selectSort } from "../counterSlice";

const Simpsons = (props) => {
  const { onDelete, toggleLiked } = props;

  const simpsons = useSelector(selectSimpsons);
  const search = useSelector(selectSearch);
  const sort = useSelector(selectSort);

  let filtered = [...simpsons];
  if (search) {
    filtered = filtered.filter((item) => {
      return item.character.toLowerCase().includes(search.toLowerCase());
    });
  }

  if (sort === "az") {
    filtered.sort((a, b) => {
      if (a.character > b.character) return 1;
      if (a.character < b.character) return -1;
      return 0;
    });
  } else if (sort === "za") {
    filtered.sort((a, b) => {
      if (a.character > b.character) return -1;
      if (a.character < b.character) return 1;
      return 0;
    });
  }

  let total = 0;
  filtered.forEach((char) => {
    if (char.liked) total++;
  });

  if (filtered.length === 0) return <p>We're sorry, there's no results...</p>;
  return (
    <>
      <h1>Total no of liked chars #{total}</h1>
      {filtered.map((item, index) => {
        return (
          <Character
            item={item}
            key={item.id}
            onDelete={onDelete}
            toggleLiked={toggleLiked}
          />
        );
      })}
    </>
  );
};

export default Simpsons;

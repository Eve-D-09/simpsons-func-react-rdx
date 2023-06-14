import React from "react";
import { useDispatch } from "react-redux";
import { toggleLiked } from "../counterSlice";

const Name = (props) => {
  const { liked, character, id } = props;
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{character}</h2>
      {/* <button onClick={() => toggleLiked(id)}>{liked ? "Liked" : "Not liked"}</button> */}
      <button onClick={() => dispatch(toggleLiked(id))}>{liked ? "Liked" : "Not liked"}</button>
    </div>
  );
};

export default Name;

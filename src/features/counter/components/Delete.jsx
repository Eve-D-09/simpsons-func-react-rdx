import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../counterSlice";

const Delete = (props) => {
//   const { onDelete, id } = props;
//  don't assign deleteItem to props;
  const { id } = props;

  const dispatch = useDispatch();

  
  
  return (
    <div>
      {/* <button onClick={() => onDelete(id)}>Delete</button> */}
      <button onClick={() => dispatch(deleteItem(id))}>Delete</button>
    </div>
  );
};

export default Delete;
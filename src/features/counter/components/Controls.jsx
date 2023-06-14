import React from "react";
import { useDispatch } from "react-redux";
import { setSearch, setSort } from "../counterSlice";

const Controls = (props) => {
  // const { onSearchInput, onSortCharacters } = props;

  const dispatch = useDispatch();

  return (
    <div className="searchContainer">
      {/* <input onInput={(e) => onSearchInput (e.target.value) } type="text" />
      <select onChange={(e) =>  onSortCharacters (e.target.value)}> */}

      <input onInput={(e) => dispatch(setSearch(e.target.value))} type="text" />
      <select onChange={(e) => dispatch(setSort(e.target.value))}>
        <option value=""></option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
      </select>
    </div>
  );
};

export default Controls;

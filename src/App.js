import React, { useCallback, useEffect } from "react";
// import axios from "axios";
import "./App.css";
import Loading from "./features/counter/components/Loading";
import Simpsons from "./features/counter/components/Simpsons";
import Controls from "./features/counter/components/Controls";
import { setSimpsons, selectSimpsons } from "./features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const simpsons = useSelector(selectSimpsons);

  const dispatch = useDispatch();

  const getData = useCallback(async () => {
    try {
      const data = await fetch(
        `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
      );
      const dataAsObject = await data.json();
      dataAsObject.forEach((element, index) => {
        element.id = index + Math.random();
      });
      dispatch(setSimpsons(dataAsObject));

      console.log(dataAsObject);
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    getData();
  }, [getData]);

  // console.log(simpsons);

  if (!simpsons) return <Loading />;

  return (
    <>
      <Controls />
      <Simpsons />
    </>
  );
};

export default App;

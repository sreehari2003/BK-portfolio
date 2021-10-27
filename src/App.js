import React from "react";
import { useState } from "react";
import { Home } from "./components/Home";
import { Data } from "./components/Data";

const App = () => {
  const [page, setPage] = useState(true);
  const showData = () => {
    setPage(!page);
  };
  return (
    <>
      {!page && <Home showPage={showData} />}
      {page && <Data />}
    </>
  );
};

export default App;

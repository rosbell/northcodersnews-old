import React from "react";

import searching from '../assets/searching.png'

const NotFound = () => {
  return (
    <div className="">
      <img src={searching} width="200" alt="searching robot"></img>
      <h2>404 page not found!</h2>
    </div>
  );
};

export default NotFound;

import React from "react";
import loading from '../assets/loading.svg'
const Loader = () => {
  console.log('loading', loading);
  return (<img src={loading} alt="loading" width="300px" />)
};

export default Loader;

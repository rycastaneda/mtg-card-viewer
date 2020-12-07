import React from "react";
import loading from '../assets/loading.svg'
const Loader = ({ width = '300px' }) => {
  return (<img src={loading} alt="loading" width={width} />)
};

export default Loader;

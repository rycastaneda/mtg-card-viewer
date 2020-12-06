import React from "react";
import formatManaText from "../utils/formatManaText"

const ManaText = ({ children = '' }) => {
  return (
    <p
      dangerouslySetInnerHTML={{ __html: formatManaText(children) }}
    />
  );
};

export default ManaText;

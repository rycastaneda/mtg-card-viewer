import React from 'react';
import { css, cx } from "emotion";
import ManaText from '../ManaText'

const cardName = cx(css`
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`)

const Name = ({name, manaCost}) => {
  return (
    <div className={cardName}>
      <h2>
        {name}
      </h2>
      <ManaText>
        {manaCost}
      </ManaText>
    </div>
  );
};

export default Name;
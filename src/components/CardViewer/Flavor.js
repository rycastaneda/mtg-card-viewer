import React from 'react';
import { css, cx } from "emotion";
import ManaText from '../ManaText'

const flavorStyle = cx(css`
  grid-row: 3/5;
  >p {
    margin-bottom: 2rem;
  }
  > p:last-child {
    text-align:right;
    margin: 0;
  }
  > span {
    font-style: italic;
  }
`)


const Flavor = ({ text, type, flavor, power, toughness }) => {
  return (
    <div className={flavorStyle}>
      <ManaText>{text || `Text unavailable`}</ManaText>
      <span>{flavor}</span>
      {type.toLowerCase().includes('creature') ?
        <p>{power} / {toughness}</p> : ''
      }
    </div>
  );
};

export default Flavor;
import React from 'react';
import { css, cx } from "emotion";
import BackImage from '../../assets/back.jpg';

const cardImage = cx(css`
  text-align:center !important;
  @media (min-width: 768px) {
    grid-row: 1/6;
  }
`)

const imgClass = cx(css`
@media (min-width: 768px) {
  width: 100%;
  hight: 100%;
  object-fit: contain;
}
`)

const Image = ({ imageUrl = BackImage }) => (
  <div className={cardImage}>
    <img src={imageUrl} className={imgClass} alt="Card Illustration"></img>
  </div>
)

export default Image
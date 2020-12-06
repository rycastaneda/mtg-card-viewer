import React from 'react';
import { css, cx } from "emotion";
import BackImage from '../../assets/back.jpg';

const cardImage = cx(css`
  @media (min-width: 768px) {
    grid-row: 1/6;
  }
`)

const preview = cx(css`
  opacity: 0;
  img{
    cursor: pointer;
    transition: box-shadow 0.2s ease-in;
  }
  img:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px var(--accent-color);
  }
`)

const imgClass = cx(css`
  width: 100%;
  hight: 100%;
  object-fit: contain;
`)

const CardPreview = ({ imageUrl = BackImage, previewMode, onClick }) => (
  <div className={previewMode ? `preview ` + preview : cardImage} onClick={preview ? onClick : null}>
    <img src={imageUrl} className={imgClass} alt="Card Illustration"></img>
  </div>
)

export default CardPreview
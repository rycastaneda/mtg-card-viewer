import React, {useEffect, useRef} from "react"
import { css, cx } from "emotion";

import Name from './Name'
import Flavor from './Flavor'
import Image from './Image'
import Close from './Close'

import gsap from 'gsap'

function useOutsideAlerter(ref, callback) {
  useEffect(() => {
      /**
       * if clicked on outside of element
       */
      function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
            callback()
          }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [ref, callback]);
}



const cardBody = cx(css`
  margin: 10% auto;
  border-radius: 10px;
  box-shadow: inset 0 0 10px var(--background-color);
  border: 1px solid black;
  padding: 1rem;
  padding-right: 2rem;
  background: var(--theme-accent-color);
  transform: translateY(100%);
  position: relative;
  z-index: 100;
  opacity: 0;
  width: 90%;
  overflow: auto;
  height: 80%;
  
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-gap: 2rem;
    grid-template-columns: auto 1fr;
  }
  @media (min-width: 991px) {
    width: 800px;
  }
  > div {
    width: 100%;
    margin-bottom: 2rem;
    @media (min-width: 991px) {
      margin: 0;
    }
    text-align: left;
  }
`)

const fade = cx(css`
  position: fixed;
  top: 0;
  left:0;
  right:0;
  bottom:0;
  background-color: rgb(0,0,0,0.6);
  opacity:0;
  display:grid;
  z-index: 30;
  place-content: center;
`)

const Card = ({
  name, manaCost, type, imageUrl,
  text, flavor, power, toughness,
  artist, onClose
}) => {
  const handleClose = () => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.to("#card", { opacity: 0, duration: 0.2 });
    tl.to("#card-fade", { opacity: 0, duration: 0.3 });

    setTimeout(onClose, 1000)
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, handleClose);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.to("#card-fade", { opacity: 1, duration: 0.3 });
    tl.to("#card", { y: '0%', opacity:1, duration: 0.3 });
    
    return () => {
      tl.to("#card", { opacity: 0, duration: 0.2 });
    }
  }, [])

  return (
    <div className={fade} id="card-fade" onBlur={handleClose}>
      <div className={cardBody} id="card" ref={wrapperRef}>
        <Image imageUrl={imageUrl} />
        <Name name={name} manaCost={manaCost} />
        <div><p>{type}</p></div>
        <Flavor {...{ text, type, flavor, power, toughness }}/>
        <div>Illustrated by: {artist}</div>
      </div>
      <Close onClose={handleClose}/>
    </div>
  );
};

export default Card;

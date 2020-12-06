import React, { Fragment, useEffect } from "react";
import { css, cx } from "emotion";
import Logo from '../assets/mtg.png';
import gsap from 'gsap'

const intro = cx(css`
  background: var(--background-color);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`)

const slider = cx(css`
  background: var(--accent-color);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(100%);
`)


const mtgLogo = cx(css`
  transform: translateY(100%);
  opacity: 0;
`)
const IntroLoader = () => {
  useEffect(() => {
    console.log('hi');
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to("#logo", { y: "0%", opacity: 1, duration: 1, stagger: 0.25 });
    tl.to("#slider", { y: "-100%", duration: 1.5, delay: 0.5 });
    tl.to("#intro", { y: "-100%", duration: 1 }, "-=1");
  }, [])
  return (
    <Fragment>
      <div className={intro} id="intro">
        <img src={Logo} id="logo" className={mtgLogo} alt="MTG logo"></img>
      </div>
      <div className={slider} id="slider"></div>
    </Fragment >
  )
}


export default IntroLoader
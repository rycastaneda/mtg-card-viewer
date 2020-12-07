import React, { useEffect } from 'react';
import CardPreview from './CardPreview'
import { cx, css  } from 'emotion'
import gsap from 'gsap'

const listClass = cx(css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 2rem;
  overflow-y: hidden;
  padding: 5rem;
  width: auto;
  background: var(--theme-accent-color);
  box-shadow: inset 0 0 10px var(--theme-accent-color);
  @media (min-width: 991px) {
    height: auto;
  }
  &:hover {
    overflow-y:auto;
  }

  > div {
    width: 100%;
  }
`)

const wrapper = cx(css`
  height: 900px;
  overflow-y: auto;
  margin-bottom: 4rem;
  @media (min-width: 991px) {
    width: 915px;
    margin: 0 auto;
    margin-bottom: 4rem;
  }
  ::-webkit-scrollbar
  {
  width: 2px;
  }

  ::-webkit-scrollbar-thumb
  {
  background-color: var(--background-color);
  -webkit-box-shadow: inset 0 0 6px var(--background-color);
  }
`)


const CardLists = ({ cards, onCardClick }) => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.to(".preview", { opacity: 1, duration: 1.5, stagger: 0.25 });
  }, [cards])
  return (
    <div className={wrapper}>
      <div className={listClass}>
        {cards.map(card => <CardPreview key={card.id} onClick={()=>onCardClick(card)} previewMode="true" imageUrl={card.imageUrl}/>  )}
      </div>
    </div>
  );
};

export default CardLists;
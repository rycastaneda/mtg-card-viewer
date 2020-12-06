import React, { useEffect } from 'react';
import CardPreview from './CardPreview'
import { cx, css  } from 'emotion'
import gsap from 'gsap'

const listClass = cx(css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 2rem;
  overflow-y: hidden;
  margin: 9rem auto 2rem;
  padding: 3rem;
  height: 80vh;
  width: auto;
  background: var(--theme-accent-color);
  box-shadow:         inset 0 0 10px var(--theme-accent-color);
  @media (min-width: 991px) {
    height: auto;
    border-radius: 2rem;
    width: 915px;
  }
  &:hover {
    overflow-y:auto;
  }

  ::-webkit-scrollbar
  {
  width: 2px;
  }

  ::-webkit-scrollbar-thumb
  {
  background-color: var(--accent-color);
  -webkit-box-shadow: inset 0 0 6px var(--accent-color);
  }


  > div {
    width: 100%;
  }
`)



const CardLists = ({ cards, onCardClick }) => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.to(".preview", { opacity: 1, duration: 1.5, stagger: 0.25 });
  }, [cards])
  return (
    <div className={listClass}>
      {cards.map(card => <CardPreview key={card.id} onClick={()=>onCardClick(card)} previewMode="true" imageUrl={card.imageUrl}/>  )}
    </div>
  );
};

export default CardLists;
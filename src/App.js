import React, { useState, useEffect, Fragment } from "react";

import getRandomNumber from './utils/getRandomNumber';
import themes from './utils/themes'
import MtgLayout from "./layout/MtgLayout";
import Button from "./components/Button";
import Nav from "./components/Nav";
import CardLists from "./components/CardLists/index.js";
import CardViewer from "./components/CardViewer";
import Loader from "./components/Loader";

import "./styles.css";
import { useFetch } from './fetcher';
import { render } from "react-dom";

const renderLoad = (status, cardLength) => {
  return (status === 'fetching' && !cardLength) && <Loader />
}
const App = () => {
  const [cardDetail, setCardDetail] = useState({})
  const [{ status, cards, error }, fetchCards] = useFetch();
  const [theme, setTheme] = useState('night')

  useEffect(() => {
    document.documentElement.style.setProperty('--background-color', themes[theme].background);
    document.documentElement.style.setProperty('--theme-accent-color', themes[theme].accent);
    document.documentElement.style.setProperty('--text-color', themes[theme].text);
  }, [theme])

  console.log('cardDetail', cardDetail);
  const handleCardClick = (card) => {
    console.log('card', card);
    setCardDetail(card)
  }
  console.log('cards', cards);
  return (
    <MtgLayout>
      <Nav theme={theme} onToggle={setTheme} />
      {renderLoad(status, cards.length)}
      {status === 'error' && <div className="error"> {error}</div>}
      {cards.length !== 0 ?
        <Fragment>
          <CardLists cards={cards} onCardClick={handleCardClick} />
          <div className="text-center">
            <Button onClick={() => fetchCards(1)}>Show Random Card</Button>
          </div>
        </Fragment> : null
      }
      {Object.keys(cardDetail).length !== 0 ? <CardViewer onClose={() => handleCardClick({})} {...cardDetail}/> : null}
    </MtgLayout>
  );
};

export default App;

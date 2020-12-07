import React, { useState, useEffect, useContext, Fragment } from "react";

import MagicContext from '../context/MagicContext'

import themes from "../utils/themes"
import MtgLayout from "../layout/MtgLayout";
import Button from "../components/Button";
import Nav from "../components/Nav";
import CardLists from "../components/CardLists/index.js";
import CardViewer from "../components/CardViewer";
import Loader from "../components/Loader";

const Home = () => {
  const [theme, setTheme] = useState('night')
  const context = useContext(MagicContext);

  useEffect(() => {
    context.fetchCards() // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--background-color', themes[theme].background);
    document.documentElement.style.setProperty('--theme-accent-color', themes[theme].accent);
    document.documentElement.style.setProperty('--gradient-color', themes[theme].gradient);
    document.documentElement.style.setProperty('--text-color', themes[theme].text);
  }, [theme])
  
  const renderLoad = (status, cardLength) => {
    return (status === 'fetching' && !cardLength) && <Loader />
  }

  return (
    <MtgLayout>
      <Nav theme={theme} onToggle={setTheme} />
      {renderLoad(context.status, context.cards.length)}
      {context.status === 'error' && <div className="error"> {context.error}</div>}
      {context.cards.length !== 0 ?
        <Fragment>
          <CardLists cards={context.cards} onCardClick={(card) => context.viewCard(card)} />
          <div className="text-center">
          <Button onClick={() => context.fetchRandomCard()}>
            {context.status === 'randoming' ?  
              (
              <Fragment>
                <Loader width="15px"></Loader>
                <span>&nbsp;Loading</span>
              </Fragment>
              ) :
              'Show Random Card'}
          </Button>
          </div>
        </Fragment> : null
      }
      {Object.keys(context.cardDetail).length !== 0 ? <CardViewer onClose={() => context.viewCard({})} {...context.cardDetail}/> : null}
    </MtgLayout>
  );
};

export default Home;
import React, { useReducer } from 'react';
import axios from "axios";
import MagicContext from './MagicContext';
import { cardsReducer, FETCHING, FETCHED, FETCH_ERROR, FETCHING_RANDOM, VIEW_CARD, baseUrl } from './cardsReducer';

const GlobalState = props => {
  const initialState = {
    status: 'idle',
    url: `${baseUrl}&pageSize=15&contains=imageUrl`,
    ctr: 15,
    error: null,
    cardDetail: {},
    cards: [],
  };
  
  const [cardsState, dispatch] = useReducer(cardsReducer, initialState);

  const fetchCards = async () => {
    dispatch({ type: FETCHING });
    try {
      const response = await axios(cardsState.url);
      dispatch({ type: FETCHED, payload: response.data.cards });
    } catch (error) {
      dispatch({ type: FETCH_ERROR, payload: error.message });
    }
  };

  const viewCard = (card) => {
    dispatch({ type: VIEW_CARD, payload: card });
  }

  const fetchRandomCard = async () => {
    dispatch({ type: FETCHING_RANDOM });
    try {
      const response = await axios(`${baseUrl}&pageSize=1`);
      let [card] = response.data.cards
      dispatch({ type: VIEW_CARD, payload: card });
      dispatch({ type: FETCHED, payload: response.data.cards } );
    } catch (error) {
      dispatch({ type: FETCH_ERROR, payload: error.message });
    }
  }

  return (
    <MagicContext.Provider
      value={{
        cards: cardsState.cards,
        cardDetail: cardsState.cardDetail,
        fetchCards,
        viewCard,
        fetchRandomCard
      }}
    >
      {props.children}
    </MagicContext.Provider>
  );
};

export default GlobalState;
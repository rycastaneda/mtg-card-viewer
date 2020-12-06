import { useEffect, useState, useReducer } from 'react';
import axios from "axios";

const baseUrl = `https://api.magicthegathering.io/v1/cards?random=true`

export const useFetch = (numberOfCards = 15) => {
  const initialState = {
    status: 'idle',
    url: `${baseUrl}&pageSize=${numberOfCards}&contains=imageUrl`,
    ctr: numberOfCards,
    error: null,
    cards: [],
  };

  const [ctr] = useState(initialState.ctr)
  const [state, dispatch] = useReducer((state = initialState, action) => {
    switch (action.type) {
      case 'FETCHING':
        return { ...state, status: 'fetching' };
      case 'FETCHED':
        return { ...state, status: 'fetched', cards: action.payload };
      case 'FETCH_ERROR':
        return { ...state, status: 'error', error: action.payload };
      case 'FETCHING_RANDOM': 
        return { ...state, 
          status: 'fetched', 
          url: `${baseUrl}&pageSize=1`,  
          ctr: state.ctr+1,
          cards: [...state.cards, action.payload[0]]
        };
      case 'FETCHING_CARDS': 
        return { ...state, status: 'fetching', url: `${baseUrl}&pageSize=${action.payload}`};
      default:
        return state;
    }
  }, initialState);


  const fetchCards = (number) => {
    dispatch({ type: 'FETCHING_RANDOM'})
  }
  let url = state.url || `${state.url}&pageSize=${numberOfCards}`

  useEffect(() => {
    console.log('ctr', ctr);
    const fetchData = async () => {
      dispatch({ type: 'FETCHING' });
      try {
        const response = await axios(url);
        dispatch({ type: 'FETCHED', payload: response.data.cards });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      }
    };
    fetchData();
  }, [ctr, url]);

  return [state, fetchCards];
};

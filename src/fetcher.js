import { useEffect, useState, useReducer } from 'react';
import axios from "axios";

const baseUrl = `https://api.magicthegathering.io/v1/cards?random=true`

export const useFetch = (numberOfCards = 15) => {
  const initialState = {
    status: 'idle',
    url: `${baseUrl}&pageSize=${numberOfCards}&contains=imageUrl`,
    ctr: numberOfCards,
    error: null,
    cardDetail: {},
    cards: [],
  };

  const [state, dispatch] = useReducer((state = initialState, action) => {
    switch (action.type) {
      case 'FETCHING':
        return { ...state, status: 'fetching' };
      case 'FETCHED':
        return { ...state, status: 'fetched', cards: [...state.cards, ...action.payload] };
      case 'FETCH_ERROR':
        return { ...state, status: 'error', error: action.payload };
      case 'FETCHING_RANDOM': 
        return { ...state, 
          status: 'fetched', 
          url: `${baseUrl}&pageSize=1`,
          ctr: state.ctr + 1
        };
      case 'ADD_CARD_DETAIL': 
        return {...state, cards: [...state.cards, ...action.payload], cardDetail: action.payload}
      case 'SET_CARD_DETAIL': 
        return {...state, cardDetail: action.payload}
      case 'CLEAR_CARD_DETAIL': 
        return {...state, cardDetail: {}}
      case 'FETCHING_CARDS': 
        return { ...state, status: 'fetching', url: `${baseUrl}&pageSize=${action.payload}`};
      default:
        return state;
    }
  }, initialState);


  const fetchCard = () => {
    dispatch({ type: 'FETCHING_RANDOM'})
  }
  
  const clearCardDetail = () => {
    dispatch({ type: 'CLEAR_CARD_DETAIL'})
  }
  
  const setCardDetail = (card) => {
    dispatch({ type: 'SET_CARD_DETAIL', payload: card })
  }

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCHING' });
      try {
        const response = await axios(`${baseUrl}&pageSize=1`);
        dispatch({ type: 'ADD_CARD_DETAIL', payload: response.data.cards });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      }
    };
    fetchData();
  }, [state.ctr]);
  
  let url = state.url || `${state.url}&pageSize=${numberOfCards}`
  useEffect(() => {
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
  }, [url]);

  return [state, fetchCard, clearCardDetail, setCardDetail];
};

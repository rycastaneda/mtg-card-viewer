import React from 'react';

export default React.createContext({
  cards: [],
  fetchCards: () => {},
  fetchRandomCard: () => {},
  viewCard: (card) => {}
});
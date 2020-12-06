const baseUrl = `https://api.magicthegathering.io/v1/cards?random=true`

const initialState = {
  status: 'idle',
  url: `${baseUrl}&pageSize=15&contains=imageUrl`,
  ctr: 15,
  error: null,
  cardDetail: {},
  cards: [],
};

function CardFetcher(state = initialState, action) {
  switch (action.type) {
    case 'FETCHING':
      return { ...state, status: 'fetching' };
    case 'FETCHED':
      return { ...state, status: 'fetched', cards: [...state.cards, ...action.payload] };
    case 'FETCH_ERROR':
      return { ...state, status: 'error', error: action.payload };
    case 'FETCHING_RANDOM': 
      return { ...state, ctr: state.ctr + 1 };
    case 'SET_CARD_DETAIL': 
      return {...state, cardDetail: action.payload}
    default:
      return state;
  }
}


export default CardFetcher
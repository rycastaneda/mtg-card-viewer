export const FETCHING = 'FETCHING'
export const FETCHED = 'FETCHED'
export const FETCH_ERROR = 'FETCH_ERROR'
export const FETCHING_RANDOM = 'FETCHING_RANDOM'
export const VIEW_CARD = 'VIEW_CARD'
export const baseUrl = `https://api.magicthegathering.io/v1/cards?random=true`

export const cardsReducer = (state, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, status: 'fetching' };
    case FETCHED:
      return { ...state, status: 'fetched', cards: [...state.cards, ...action.payload] };
    case FETCH_ERROR:
      return { ...state, status: 'error', error: action.payload };
    case FETCHING_RANDOM: 
      return { ...state, status: 'randoming', ctr: state.ctr + 1 };
    case VIEW_CARD: 
      return {...state, cardDetail: action.payload}
    default:
      return state;
  }
}
import axios from 'axios';
import { popularGameURL } from '../api';

//Action Creator

export const loadGames = () => async (dispatch) => {
  //Fetch Axios
  const popularData = await axios.get(popularGameURL());
  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popularData.data.results,
    },
  });
};

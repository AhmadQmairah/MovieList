const ADD_MOVIE = "ADD_MOVIE";
const SET_INPUT = "SET_INPUT";
const TOGGLE_WATCHED = "TOGGLE_WATCHED";
const DELETE = "DELETE";
export const addmovie = movie => {
  return {
    type: ADD_MOVIE,
    payload: movie
  };
};
export const toggle_Watched = movieID => {
  return {
    type: TOGGLE_WATCHED,
    payload: movieID
  };
};
export const delete_movie = movieID => {
  return {
    type: DELETE,
    payload: movieID
  };
};

export const setInput = input => {
  return {
    type: SET_INPUT,
    payload: input
  };
};

export default addmovie;

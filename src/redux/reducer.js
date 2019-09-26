const initialState = {
  movies: [
    { id: 1, title: "movie1", watched: false },
    { id: 2, title: "movie2", watched: true }
  ],
  input: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      if (action.payload) {
        return {
          ...state,
          movies: state.movies.concat({
            id: state.movies.length + 1,
            title: action.payload,
            watched: false
          })
        };
      } else {
        alert("please enter a name");
        return state;
      }

    case "SET_INPUT":
      return {
        ...state,
        input: action.payload
      };

    case "TOGGLE_WATCHED":
      let RealIndex = action.payload;
      state.movies.forEach((movie, index) => {
        if (movie.id === action.payload) {
          RealIndex = index;
        }
      });
      let movies = [...state.movies];

      movies[RealIndex].watched = !movies[RealIndex].watched;

      return {
        ...state,
        movies: movies
      };
    case "DELETE":
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;

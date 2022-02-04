export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //REMOVE AFTER FINISH DEVELOPING
//  token:
//    "BQAwB0MXnwDrLevdn0FnY_1WtWALGTs_r5r-UxCN4RXyGzDmPgY0_F18M1MHqpila8ZdwAAayV08xbaOdNh0aXcOLlP0YcKYo9CiuQ7wIVPT46j1yhBFvDHrr9zmvWn0QCRR0CG6XUGri0gmqYGnNCY1RatKJdSE4NxWcBIO24DFhT1b",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
      case "SET_PLAYLISTS":
          return {
              ...state,
              playlists: action.playlists,
          };
          case "SET_DISCOVER_WEEKLY":
            return {
              ...state,
              discover_weekly: action.discover_weekly,
            };
            
    default:
      return state;
  }
};
export default reducer;

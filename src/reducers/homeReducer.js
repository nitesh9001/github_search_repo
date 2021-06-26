import { GET_REPO_LIST } from "../actions/types";

var initialState = {
  listrepo: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPO_LIST:
      return {
        ...state,
        listrepo: action.payload,
      };

    default:
      return state;
  }
};
export default Reducer;

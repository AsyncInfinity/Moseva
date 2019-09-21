import { GET_ANALYTICS } from "../actions/type";

const initialState = {
  patient: [],
  response: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ANALYTICS:
      console.log(action);
      return {
        ...state,
        response: action.payload
      };

    default:
      return state;
  }
}

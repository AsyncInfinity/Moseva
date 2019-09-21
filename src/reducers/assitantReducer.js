import { REGISTER_PATIENT } from "../actions/type";

const initialState = {
  patient: [],
  response: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_PATIENT:
      console.log(action);
      return {
        ...state,
        response: action.payload.data,
        clearFrom: true,
        loading: false
      };

    default:
      return state;
  }
}

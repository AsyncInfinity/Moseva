import {
  GET_PATIENT,
  GET_DEPARTMENT,
  GET_PATIENT_ONE,
  PATIENT_SUBMIT
} from "../actions/type";

const initialState = {
  patient: [],
  response: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PATIENT:
      console.log(action);
      return {
        ...state,
        patientsLists: action.payload.data,
        clearFrom: true,
        loading: false
      };
    case GET_DEPARTMENT:
      return {
        ...state,
        departmentList: action.payload
      };
    case GET_PATIENT_ONE:
      return {
        ...state,
        patientOne: action.payload
      };
    case PATIENT_SUBMIT:
      return {
        ...state,
        response: action.payload
      };
    default:
      return state;
  }
}

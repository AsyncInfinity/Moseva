import axios from "axios";
import {
  GET_PATIENT,
  GET_DEPARTMENT,
  GET_PATIENT_ONE,
  PATIENT_SUBMIT
} from "./type";

const rootUrl = "https://hardware-hackathon-medicine.herokuapp.com";

// Getd PostsS
export const getPatient = () => dispatch => {
  axios
    .post(`${rootUrl}/patient/patient/today`)
    .then(res =>
      dispatch({
        type: GET_PATIENT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PATIENT,
        payload: []
      })
    );
};

export const getDepartment = () => dispatch => {
  axios
    .get(`${rootUrl}/department`)
    .then(res =>
      dispatch({
        type: GET_DEPARTMENT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_DEPARTMENT,
        payload: []
      })
    );
};

export const getPatientOne = patientdata => dispatch => {
  axios
    .get(`${rootUrl}/patient/${patientdata}`)
    .then(res =>
      dispatch({
        type: GET_PATIENT_ONE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PATIENT_ONE,
        payload: []
      })
    );
};

export const registerPatientData = (id, patientdata) => dispatch => {
  axios
    .post(`${rootUrl}/patient/${id}/prescription/register`, patientdata)
    .then(res =>
      dispatch({
        type: PATIENT_SUBMIT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: PATIENT_SUBMIT,
        payload: null
      })
    );
};

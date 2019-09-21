import axios from "axios";
import { GET_ANALYTICS } from "./type";

const rootUrl = "https://hardware-hackathon-medicine.herokuapp.com";

// Getd PostsS
export const getPatient = () => dispatch => {
  axios
    .post(`${rootUrl}/patient/patient/today`)
    .then(res =>
      dispatch({
        type: GET_ANALYTICS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ANALYTICS,
        payload: []
      })
    );
};

import axios from "axios";
import { REGISTER_PATIENT } from "./type";

const rootUrl = "https://hardware-hackathon-medicine.herokuapp.com";

// Add Post
export const registerPatient = postData => dispatch => {
  console.log(postData);

  axios
    .post(`${rootUrl}/patient/register`, postData)

    .catch(err => console.log(err));
};

import { combineReducers } from "redux";
import assistantReduer from "./assitantReducer";
import patientReducer from "./doctorReducer";
import anyticsReducer from "./analytics";
export default combineReducers({
  auth: "",
  response: assistantReduer,
  patients: patientReducer,
  analytics: anyticsReducer
});

import { combineReducers } from "redux";
import dates from "./datesReducer";
import coordinates from "./coordinatesReducer";
import layerData from "./layerDataReducer";
import modals from "./modalsReducer";

const mainReducer = combineReducers({ layerData, dates, coordinates, modals });
export default mainReducer;

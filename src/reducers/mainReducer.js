import { combineReducers } from "redux";
import dates from "./datesReducer";
import coordinates from "./coordinatesReducer";
import layerData from "./layerDataReducer";
import modals from "./modalsReducer";
import selectedLayers from "./selectedLayersReducer";

const mainReducer = combineReducers({
    layerData,
    dates,
    coordinates,
    modals,
    selectedLayers,
});
export default mainReducer;

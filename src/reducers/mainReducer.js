import { combineReducers } from "redux";
import {
    ADD_LAYER_DATA,
    TOGGLE_LAYER_VISIBILITY,
    ADJUST_LAYER_OPACITY,
} from "../actions/layerData";
import { CHANGE_MAP_DATE } from "../actions/dates";

function layerData(state = [], action) {
    switch (action.type) {
        case ADD_LAYER_DATA:
            return state.concat([action.payload]);
        case TOGGLE_LAYER_VISIBILITY:
            return state.map(function (layer) {
                if (layer.identifier !== action.payload) return layer;
                else
                    return {
                        ...layer,
                        visible: !layer.visible,
                    };
            });
        case ADJUST_LAYER_OPACITY:
            return state.map(function (layer) {
                if (layer.identifier === action.payload.identifier) {
                    return {
                        ...layer,
                        opacity: action.payload.opacity,
                    };
                } else {
                    return layer;
                }
            });
        default:
            return state;
    }
}

function dates(state = { mapDate: new Date(2020, 0, 1) }, action) {
    switch (action.type) {
        case CHANGE_MAP_DATE:
            return {
                mapDate: action.payload,
            };
        default:
            return state;
    }
}

const mainReducer = combineReducers({ layerData, dates });

export default mainReducer;

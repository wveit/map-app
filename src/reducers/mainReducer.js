import { combineReducers } from "redux";
import { ADD_LAYER_DATA, TOGGLE_LAYER_VISIBILITY } from "../actions/layerData";
import {
    CHANGE_MAP_YEAR,
    CHANGE_MAP_MONTH,
    CHANGE_MAP_DATE,
} from "../actions/dates";

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
        default:
            return state;
    }
}

function dates(state = { mapDate: new Date(2020, 0, 1) }, action) {
    switch (action.type) {
        case CHANGE_MAP_YEAR:
            return {
                mapDate: new Date(
                    action.payload,
                    state.mapDate.getMonth(),
                    state.mapDate.getDate()
                ),
            };
        case CHANGE_MAP_MONTH:
            return {
                mapDate: new Date(
                    state.mapDate.getFullYear(),
                    action.payload - 1,
                    state.mapDate.getDate()
                ),
            };
        case CHANGE_MAP_DATE:
            return {
                mapDate: new Date(
                    state.mapDate.getFullYear(),
                    state.mapDate.getMonth(),
                    action.payload
                ),
            };
        default:
            return state;
    }
}

const mainReducer = combineReducers({ layerData, dates });

export default mainReducer;

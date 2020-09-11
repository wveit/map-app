import { combineReducers } from "redux";
import { ADD_LAYER_DATA, TOGGLE_LAYER_VISIBILITY } from "../actions/layerData";

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

const mainReducer = combineReducers({ layerData });

export default mainReducer;

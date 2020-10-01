import {
    ADD_LAYER_DATA,
    TOGGLE_LAYER_VISIBILITY,
    ADJUST_LAYER_OPACITY,
} from "../actions/layerData";

export default function layerData(state = [], action) {
    switch (action.type) {
        case ADD_LAYER_DATA:
            return state.concat([action.payload]);
        case TOGGLE_LAYER_VISIBILITY:
            return state.map(function (layer) {
                if (layer.id !== action.payload) return layer;
                else
                    return {
                        ...layer,
                        visible: !layer.visible,
                    };
            });
        case ADJUST_LAYER_OPACITY:
            return state.map(function (layer) {
                if (layer.id === action.payload.id) {
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

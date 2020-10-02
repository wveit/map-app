export const ADD_LAYER_DATA = "ADD_LAYER_DATA";
export const TOGGLE_LAYER_VISIBILITY = "TOGGLE_LAYER_VISIBILITY";
export const ADJUST_LAYER_OPACITY = "ADJUST_LAYER_OPACITY";
export const SET_LAYER_ACTIVE = "SET_LAYER_ACTIVE";

const defaultLayerData = {
    visible: false,
    opacity: 100,
};

export function addLayerData(layerData) {
    return {
        type: ADD_LAYER_DATA,
        payload: {
            ...defaultLayerData,
            ...layerData,
        },
    };
}

export function toggleLayerVisibility(id) {
    return {
        type: TOGGLE_LAYER_VISIBILITY,
        payload: id,
    };
}

export function adjustLayerOpacity(id, opacity) {
    return {
        type: ADJUST_LAYER_OPACITY,
        payload: {
            id,
            opacity,
        },
    };
}

export function setLayerActive(id, isActive) {
    return {
        type: SET_LAYER_ACTIVE,
        payload: {
            id,
            isActive,
        },
    };
}

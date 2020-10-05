export const ADD_LAYER_DATA = "ADD_LAYER_DATA";
export const TOGGLE_LAYER_VISIBILITY = "TOGGLE_LAYER_VISIBILITY";
export const ADJUST_LAYER_OPACITY = "ADJUST_LAYER_OPACITY";
export const SET_LAYER_ACTIVE = "SET_LAYER_ACTIVE";
export const MOVE_SELECTED_LAYER = "MOVE_SELECTED_LAYER";

const defaultLayerData = {
    isVisible: false,
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

export function moveSelectedLayer(id, fromIndex, toIndex) {
    return {
        type: MOVE_SELECTED_LAYER,
        payload: {
            id,
            fromIndex,
            toIndex,
        },
    };
}

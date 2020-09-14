export const ADD_LAYER_DATA = "ADD_LAYER_DATA";
export const TOGGLE_LAYER_VISIBILITY = "TOGGLE_LAYER_VISIBILITY";
export const ADJUST_LAYER_OPACITY = "ADJUST_LAYER_OPACITY";

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

export function toggleLayerVisibility(identifier) {
    return {
        type: TOGGLE_LAYER_VISIBILITY,
        payload: identifier,
    };
}

export function adjustLayerOpacity(identifier, opacity) {
    return {
        type: ADJUST_LAYER_OPACITY,
        payload: {
            identifier,
            opacity,
        },
    };
}

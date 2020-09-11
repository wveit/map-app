export const ADD_LAYER_DATA = "ADD_LAYER_DATA";
export const TOGGLE_LAYER_VISIBILITY = "TOGGLE_LAYER_VISIBILITY";

const defaultLayerData = {
    visible: false,
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

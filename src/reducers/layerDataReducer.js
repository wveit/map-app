import {
    ADD_LAYER_DATA,
    TOGGLE_LAYER_VISIBILITY,
    ADJUST_LAYER_OPACITY,
    SET_LAYER_ACTIVE,
} from "../actions/layerData";

export default function layerData(state = {}, action) {
    switch (action.type) {
        case ADD_LAYER_DATA: {
            const layers = state;
            const layer = action.payload;
            return {
                ...layers,
                [layer.id]: layer,
            };
        }

        case TOGGLE_LAYER_VISIBILITY: {
            const layers = state;
            const layerId = action.payload;
            const changedLayer = layers[layerId];
            changedLayer.visible = !changedLayer.visible;
            return {
                ...layers,
                [layerId]: changedLayer,
            };
        }

        case ADJUST_LAYER_OPACITY: {
            const layers = state;
            const { id, opacity } = action.payload;
            const newLayer = { ...layers[id] };
            newLayer.opacity = opacity;
            return {
                ...layers,
                [id]: newLayer,
            };
        }

        case SET_LAYER_ACTIVE: {
            const layers = state;
            const { id, isActive } = action.payload;
            const newLayer = { ...layers[id] };
            newLayer.isActive = isActive;
            newLayer.visible = isActive;
            return {
                ...layers,
                [id]: newLayer,
            };
        }

        default:
            return state;
    }
}

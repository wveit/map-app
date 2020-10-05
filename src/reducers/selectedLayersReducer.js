import { ADD_LAYER_DATA, SET_LAYER_ACTIVE } from "../actions/layerData";

export default function selectedLayers(state = [], action) {
    switch (action.type) {
        case ADD_LAYER_DATA: {
            const layer = action.payload;
            if (layer.isActive) {
                return state.concat(layer.id);
            } else {
                return state;
            }
        }

        case SET_LAYER_ACTIVE: {
            const { id, isActive } = action.payload;
            if (!isActive) {
                return state.filter((layerId) => layerId !== id);
            } else {
                return state.concat(id);
            }
        }

        default:
            return state;
    }
}

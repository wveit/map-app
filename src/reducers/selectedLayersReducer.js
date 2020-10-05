import {
    ADD_LAYER_DATA,
    SET_LAYER_ACTIVE,
    MOVE_SELECTED_LAYER,
} from "../actions/layerData";

export default function selectedLayers(state = [], action) {
    switch (action.type) {
        case ADD_LAYER_DATA: {
            const layer = action.payload;
            if (layer.isActive) {
                return [layer.id].concat(state);
            } else {
                return state;
            }
        }

        case SET_LAYER_ACTIVE: {
            const { id, isActive } = action.payload;
            if (!isActive) {
                return state.filter((layerId) => layerId !== id);
            } else {
                return [id].concat(state);
            }
        }

        case MOVE_SELECTED_LAYER: {
            const { id, fromIndex, toIndex } = action.payload;
            const newList = state.slice();
            newList.splice(fromIndex, 1);
            newList.splice(toIndex, 0, id);
            return newList;
        }

        default:
            return state;
    }
}

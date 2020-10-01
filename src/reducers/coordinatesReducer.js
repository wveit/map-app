import { UPDATE_MOUSE_COORDINATES } from "../actions/coordinates";

export default function coordinates(
    state = { mouseCoordinates: null },
    action
) {
    switch (action.type) {
        case UPDATE_MOUSE_COORDINATES:
            return { mouseCoordinates: action.payload };
        default:
            return state;
    }
}

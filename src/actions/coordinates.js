export const UPDATE_MOUSE_COORDINATES = "UPDATE_MOUSE_COORDINATES";

export function updateMouseCoordinates(coordinates) {
    return {
        type: UPDATE_MOUSE_COORDINATES,
        payload: coordinates,
    };
}

export const CHANGE_MAP_DATE = "CHANGE_MAP_DATE";

export function changeMapDate(newDate) {
    return {
        type: CHANGE_MAP_DATE,
        payload: newDate,
    };
}

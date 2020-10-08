export const CHANGE_MAP_DATE = "CHANGE_MAP_DATE";
export const CHANGE_DATE_SLIDER_UNIT = "CHANGE_DATE_SLIDER_UNIT";

export function changeMapDate(newDate) {
    return {
        type: CHANGE_MAP_DATE,
        payload: newDate,
    };
}

export function changeDateSliderUnit(newUnit) {
    return {
        type: CHANGE_DATE_SLIDER_UNIT,
        payload: newUnit,
    };
}

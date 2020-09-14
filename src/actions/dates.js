export const CHANGE_MAP_YEAR = "CHANGE_MAP_YEAR";
export const CHANGE_MAP_MONTH = "CHANGE_MAP_MONTH";
export const CHANGE_MAP_DATE = "CHANGE_MAP_DATE";

export function changeMapYear(newYear) {
    return {
        type: CHANGE_MAP_YEAR,
        payload: newYear,
    };
}

export function changeMapMonth(newMonth) {
    return {
        type: CHANGE_MAP_MONTH,
        payload: newMonth,
    };
}

export function changeMapDate(newDate) {
    return {
        type: CHANGE_MAP_DATE,
        payload: newDate,
    };
}

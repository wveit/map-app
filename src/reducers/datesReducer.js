import { CHANGE_MAP_DATE, CHANGE_DATE_SLIDER_UNIT } from "../actions/dates";

const initialState = {
    mapDate: new Date(2020, 0, 1),
    dateSliderUnit: "month",
};

export default function dates(state = initialState, action) {
    switch (action.type) {
        case CHANGE_MAP_DATE:
            return {
                ...state,
                mapDate: action.payload,
            };
        case CHANGE_DATE_SLIDER_UNIT:
            return {
                ...state,
                dateSliderUnit: action.payload,
            };
        default:
            return state;
    }
}

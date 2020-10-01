import { CHANGE_MAP_DATE } from "../actions/dates";

export default function dates(
    state = { mapDate: new Date(2020, 0, 1) },
    action
) {
    switch (action.type) {
        case CHANGE_MAP_DATE:
            return {
                mapDate: action.payload,
            };
        default:
            return state;
    }
}

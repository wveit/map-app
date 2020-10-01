import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modals";

const initialState = {
    currentModal: null,
};

export default function modals(state = initialState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return { currentModal: action.payload };
        case CLOSE_MODAL:
            return { currentModal: null };
        default:
            return state;
    }
}

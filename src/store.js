import { createStore } from "redux";
import mainReducer from "./reducers/mainReducer";

const store = createStore(
    mainReducer,
    typeof window === "object" &&
        typeof window.devToolsExtension !== "undefined"
        ? window.devToolsExtension()
        : (f) => f
);

export default store;

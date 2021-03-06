import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import AppContainer from "./containers/AppContainer/AppContainer";
import store from "./store";
import { loadLayers } from "./util/layerLoader";
import { changeMapDate } from "./actions/dates";
import { setupKeyBindings } from "./util/keyBindings";

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById("root")
);

////////////////////////////////////////////////////////////////
//
//      Initial Data Load
//
////////////////////////////////////////////////////////////////

// Set starting date
const date = new Date();
date.setDate(date.getDate() - 3);
store.dispatch(changeMapDate(date));

// Load layers from config
loadLayers(store);

// Set up key bindings
setupKeyBindings(store);

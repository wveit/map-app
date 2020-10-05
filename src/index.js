import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import AppContainer from "./components/App/AppContainer";
import store from "./store";
import { loadLayers } from "./util/layerLoader";
import { changeMapDate } from "./actions/dates";

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

const date = new Date();
date.setDate(date.getDate() - 3);
store.dispatch(changeMapDate(date));
loadLayers(store);

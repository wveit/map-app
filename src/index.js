import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/App/App";
import store from "./store";
import { addLayerData } from "./actions/layerData";
import "./index.css";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

////////////////////////////////////////////////////////////////
//
//      Initial Data Load
//
////////////////////////////////////////////////////////////////

store.dispatch(
    addLayerData({
        id: "waka",
    })
);

store.dispatch(
    addLayerData({
        id: "banana",
    })
);

store.dispatch(
    addLayerData({
        id: "ketchup",
        visible: true,
    })
);

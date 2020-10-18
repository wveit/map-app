import React from "react";
import Colorbar from "./Colorbar";

const colorTable = [
    ["-0.3 to 0.0", "0,0,0"],
    ["0.0 to 0.3", "255,255,255"],
];

export default {
    title: "components/Colorbar",
    component: Colorbar,
};

export const Empty = () => <Colorbar width={255} />;
export const Basic = () => <Colorbar width={255} colorTable={colorTable} />;

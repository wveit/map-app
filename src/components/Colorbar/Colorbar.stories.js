import React from "react";
import Colorbar from "./Colorbar";
import samples from "./sample-palettes";

console.log("SSHA: ", samples.SSHA);

const colorTable = [
    ["0 to 1", "255,0,0"],
    ["1 to 2", "0,255,0"],
    ["2 to 3", "0,0,255"],
];

export default {
    title: "components/Colorbar",
    component: Colorbar,
};

export const Empty = () => <Colorbar width={255} />;
export const Basic = () => (
    <Colorbar
        width={255}
        min={0}
        max={colorTable.length}
        colorTable={colorTable}
    />
);
export const FullPalette = () => (
    <Colorbar width={255} min={"-0.3"} max={"0.3"} colorTable={samples.SSHA} />
);

import React from "react";
import ColorbarWrapper from "./Colorbar";
import samples from "./sample-palettes";

console.log("SSHA: ", samples.SSHA);

const colorTable = [
    ["0 to 1", "255,0,0"],
    ["1 to 2", "0,255,0"],
    ["2 to 3", "0,0,255"],
];

export default {
    title: "components/ColorbarWrapper",
    component: ColorbarWrapper,
};

export const Empty = () => <ColorbarWrapper />;
export const EmptyWithWidth = () => <ColorbarWrapper width={400} />;
export const Basic = () => (
    <ColorbarWrapper min={0} max={colorTable.length} colorTable={colorTable} />
);
export const Basic400 = () => (
    <ColorbarWrapper
        width={400}
        min={0}
        max={colorTable.length}
        colorTable={colorTable}
    />
);
export const FullPaletteRgb = () => (
    <ColorbarWrapper
        width={255}
        min={"-0.3"}
        max={"0.3"}
        colorTable={samples.SSHA}
    />
);
export const FullPaletteRgb400 = () => (
    <ColorbarWrapper
        width={400}
        min={"-0.3"}
        max={"0.3"}
        colorTable={samples.SSHA}
    />
);

export const FullPaletteHex = () => (
    <ColorbarWrapper min={"-0.3"} max={"0.3"} colorTable={samples.GIBS_SST} />
);
export const FullPaletteHex400 = () => (
    <ColorbarWrapper
        width={400}
        min={"-0.3"}
        max={"0.3"}
        colorTable={samples.GIBS_SST}
    />
);

export const Practice = () => (
    <div>
        <ColorbarWrapper />
    </div>
);

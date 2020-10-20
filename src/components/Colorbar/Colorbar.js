import React from "react";
import PropTypes from "prop-types";
import "./Colorbar.css";

function rgb(rgbStr) {
    return `rgb(${rgbStr})`;
}

function hex(hexStr) {
    return `#${hexStr}`;
}

function getColorFunction(colorTable) {
    if (colorTable[0][1].includes(",")) return rgb;
    else return hex;
}

function EmptyColorbar(props) {
    return (
        <div
            className="Colorbar__colorbar Colorbar__emptycolorbar"
            style={{ width: props.width }}
        >
            <div>NO COLORBAR AVAILABLE</div>
        </div>
    );
}

function Colorbar(props) {
    if (!props.colorTable) {
        return <EmptyColorbar width={props.width} />;
    }

    function handleHover(index) {
        props.onHover && props.onHover(index);
    }
    function handleMouseLeave() {
        props.onHover && props.onHover(null);
    }

    const colorFunction = getColorFunction(props.colorTable);

    const numColors = props.colorTable.length;
    const widthPerColor = Math.floor(props.width / numColors);
    const numExtraPixelsNeeded = props.width - numColors * widthPerColor;
    const desiredExtraPixelRatio = numExtraPixelsNeeded / numColors;
    let numExtraPixelsAssigned = 0;
    let numColorsAssigned = 0;
    console.log("numColors: ", numColors);
    const colors = props.colorTable.map((color, index) => {
        function handleColorHover() {
            handleHover(index);
        }
        numColorsAssigned++;
        const extraPixelRatio = numExtraPixelsAssigned / numColorsAssigned;
        let width = widthPerColor;
        if (extraPixelRatio < desiredExtraPixelRatio) {
            width++;
            numExtraPixelsAssigned++;
        }
        return (
            <div
                className="Colorbar__color"
                key={index}
                style={{
                    width: width,
                    backgroundColor: colorFunction(color[1]),
                }}
                onMouseMove={handleColorHover}
            ></div>
        );
    });

    return (
        <div className="Colorbar__colorbar" onMouseLeave={handleMouseLeave}>
            {colors}
        </div>
    );
}

function ColorbarWrapper(props) {
    const [hoverIndex, setHoverIndex] = React.useState(null);
    let display = "";
    let colorCircle = null;
    if (hoverIndex !== null) {
        const colorFunction = getColorFunction(props.colorTable);
        display = props.colorTable[hoverIndex][0];
        colorCircle = (
            <div
                className="Colorbar__colorcircle"
                style={{
                    backgroundColor: colorFunction(
                        props.colorTable[hoverIndex][1]
                    ),
                }}
            />
        );
    }

    return (
        <div style={{ display: "flex" }}>
            <div className="Colorbar">
                <Colorbar
                    width={props.width}
                    colorTable={props.colorTable}
                    onHover={setHoverIndex}
                />
                <div className="Colorbar__labels">
                    <div>{props.min}</div>
                    <div className="Colorbar__colordisplay">
                        {colorCircle}
                        {display}
                    </div>
                    <div>{props.max}</div>
                </div>
            </div>
        </div>
    );
}

ColorbarWrapper.propTypes = {
    width: PropTypes.number.isRequired,
    colorTable: PropTypes.array,
};

ColorbarWrapper.defaultProps = {
    width: 255,
};

export default ColorbarWrapper;

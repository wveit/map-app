import React from "react";
import PropTypes from "prop-types";
import "./Colorbar.css";

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

    const numColors = props.colorTable.length;
    const widthPerColor = Math.floor(props.width / numColors);
    console.log("numColors: ", numColors);
    const colors = props.colorTable.map((color, index) => {
        function handleColorHover() {
            handleHover(index);
        }
        return (
            <div
                className="Colorbar__color"
                key={index}
                style={{
                    width: widthPerColor,
                    backgroundColor: `rgb(${color[1]})`,
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
        display = props.colorTable[hoverIndex][0];
        colorCircle = (
            <div
                className="Colorbar__colorcircle"
                style={{
                    backgroundColor: `rgb(${props.colorTable[hoverIndex][1]})`,
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

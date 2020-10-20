import React from "react";
import Switch from "@material-ui/core/Switch";
import Popper from "@material-ui/core/Popper";
import IconButton from "../Button/IconButton";
import "./LayerControl.css";
import Colorbar from "../Colorbar/Colorbar";
import colorTables from "../../util/colorTables";

export default function LayerControl(props) {
    function handleRemoveClick(layerId) {
        props.onRemoveClick && props.onRemoveClick(layerId);
    }
    return (
        <div className="LayerControl">
            <LayerControlTop onRemoveClick={handleRemoveClick} {...props} />
            <LayerControlBottom onRemoveClick={handleRemoveClick} {...props} />
        </div>
    );
}

function LayerControlTop(props) {
    let closeButton = null;
    if (!props.layer.isVisible) {
        closeButton = <IconButton>close</IconButton>;
    }

    function handleVisibilityToggle() {
        props.toggleLayerVisibility &&
            props.toggleLayerVisibility(props.layer.id);
    }

    function handleRemoveClick() {
        props.onRemoveClick && props.onRemoveClick(props.layer.id);
    }

    return (
        <div className="LayerControl__top LayerControl__left-right-container">
            <div className="LayerControl__left">
                <Switch
                    readOnly
                    checked={props.layer.isVisible}
                    onClick={handleVisibilityToggle}
                    color="primary"
                    size="small"
                />
                <div>
                    <div className="LayerControl__title">
                        {props.layer.title}
                    </div>
                    <div className="LayerControl__subtitle">
                        {props.layer.subtitle}
                    </div>
                </div>
            </div>
            <div className={`LayerControl__right`} onClick={handleRemoveClick}>
                {closeButton}
            </div>
        </div>
    );
}

function LayerControlBottom(props) {
    function handleRemoveClick() {
        props.onRemoveClick && props.onRemoveClick(props.layer.id);
    }

    if (!props.layer.isVisible) return null;
    let colorTableComponent;
    if (props.layer.colorTable) {
        const colorTable = colorTables[props.layer.colorTable];
        colorTableComponent = (
            <Colorbar
                colorTable={colorTable.colorTable}
                min={colorTable.min}
                max={colorTable.max}
            />
        );
    } else {
        colorTableComponent = <Colorbar />;
    }

    return (
        <div className="LayerControl__bottom LayerControl__left-right-container">
            <div className="LayerControl__left">{colorTableComponent}</div>

            <div className="LayerControl__right">
                <IconButton>more_vert</IconButton>
                <IconButton>layers</IconButton>
                <OpacityControl {...props} />
                <IconButton>info_outline</IconButton>
                <IconButton onClick={handleRemoveClick}>close</IconButton>
            </div>
        </div>
    );
}

function OpacityControl(props) {
    let ref = React.useRef();
    let [open, setOpen] = React.useState(false);

    function handleOpacityChange(event) {
        props.adjustLayerOpacity(props.layer.id, event.target.value);
    }

    function handleClick() {
        setOpen(!open);
    }

    return (
        <>
            <IconButton ref={ref} onClick={handleClick}>
                opacity
            </IconButton>
            <Popper
                className="LayerControl__opacityContainer"
                open={open}
                anchorEl={ref.current}
                placement="left"
            >
                <div>Opacity</div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    onChange={handleOpacityChange}
                    value={props.layer.opacity}
                />
            </Popper>
        </>
    );
}

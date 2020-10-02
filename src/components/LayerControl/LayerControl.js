import React from "react";
import Switch from "@material-ui/core/Switch";
import Popper from "@material-ui/core/Popper";
import IconButton from "../Button/IconButton";
import "./LayerControl.css";
import Colorbar from "../Colorbar/Colorbar";

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
    if (!props.layer.visible) {
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
        <div className="LayerControl__top left-right-container">
            <div className="left">
                <Switch
                    readOnly
                    checked={props.layer.visible}
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
            <div className={`right`} onClick={handleRemoveClick}>
                {closeButton}
            </div>
        </div>
    );
}

function LayerControlBottom(props) {
    function handleRemoveClick() {
        props.onRemoveClick && props.onRemoveClick(props.layer.id);
    }

    if (!props.layer.visible) return null;

    return (
        <div className="LayerControl__bottom left-right-container">
            <div className="left">
                <Colorbar />
            </div>

            <div className="right">
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

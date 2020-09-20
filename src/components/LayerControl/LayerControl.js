import React from "react";
import Switch from "@material-ui/core/Switch";
import Popper from "@material-ui/core/Popper";
import IconButton from "../Button/IconButton";
import "./LayerControl.css";
import Colorbar from "../Colorbar/Colorbar";

export default function LayerControl(props) {
    return (
        <div className="LayerControl">
            <LayerControlTop {...props} />
            <LayerControlBottom {...props} />
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
            props.toggleLayerVisibility(props.layer.identifier);
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
                        {props.layer.identifier}
                    </div>
                    <div className="LayerControl__subtitle">Layer Subtitle</div>
                </div>
            </div>
            <div className={`right`}>{closeButton}</div>
        </div>
    );
}

function LayerControlBottom(props) {
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
                <IconButton>close</IconButton>
            </div>
        </div>
    );
}

function OpacityControl(props) {
    let ref = React.useRef();
    let [open, setOpen] = React.useState(false);

    function handleOpacityChange(event) {
        props.adjustLayerOpacity(props.layer.identifier, event.target.value);
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

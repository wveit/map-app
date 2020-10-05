import React from "react";
import "./MenuFrame.css";
import podaacLogo from "./podaac_logo.svg";
import IconButton from "../Button/IconButton";

function MenuFrame(props) {
    const [isCollapsed, setIsCollapsed] = React.useState(false);

    function handleHelpButtonClick() {
        props.onHelpButtonClick && props.onHelpButtonClick();
    }
    function handleShareButtonClick() {
        props.onShareButtonClick && props.onShareButtonClick();
    }
    function handleSettingsButtonClick() {
        props.onSettingsButtonClick && props.onSettingsButtonClick();
    }
    function handleCollapseButtonClick() {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <div className={"MenuFrame" + (isCollapsed ? " collapsed" : "")}>
            <div className="MenuFrame__titlebar">
                <div className="MenuFrame__title">
                    <a
                        href="https://podaac.jpl.nasa.gov"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={podaacLogo} alt="PODAAC logo" />
                    </a>
                    <h1>
                        State of the Ocean <span>4.5</span>
                    </h1>
                </div>
                <div className="MenuFrame__controls">
                    <IconButton onClick={handleHelpButtonClick}>
                        help
                    </IconButton>
                    <IconButton onClick={handleShareButtonClick}>
                        share
                    </IconButton>
                    <IconButton onClick={handleSettingsButtonClick}>
                        settings
                    </IconButton>
                    <IconButton onClick={handleCollapseButtonClick}>
                        {isCollapsed ? "chevron_right" : "chevron_left"}
                    </IconButton>
                </div>
            </div>

            <div className="MenuFrame__content">{props.children}</div>
        </div>
    );
}

export default MenuFrame;

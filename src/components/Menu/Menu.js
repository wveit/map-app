import React from "react";
import { connect } from "react-redux";
import {
    toggleLayerVisibility,
    adjustLayerOpacity,
} from "../../actions/layerData";
import { openModal } from "../../actions/modals";
import LayerControl from "../LayerControl/LayerControl";
import "./Menu.css";
import podaacLogo from "./podaac_logo.svg";
import IconButton from "../Button/IconButton";
import SelectedDatasetsButtonPanel from "../SelectedDatasetsButtonPanel/SelectedDatasetsButtonPanel";

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: false,
        };
        this.handleCollapseClick = this.handleCollapseClick.bind(this);
        this.handleSettingsClick = this.handleSettingsClick.bind(this);
        this.handleShareClick = this.handleShareClick.bind(this);
        this.handleHelpClick = this.handleHelpClick.bind(this);
        this.handleAddDatasetClick = this.handleAddDatasetClick.bind(this);
    }

    handleHelpClick() {
        this.props.openModal("HELP");
    }

    handleShareClick() {
        this.props.openModal("SHARE");
    }

    handleSettingsClick() {
        this.props.openModal("SETTINGS");
    }

    handleCollapseClick() {
        this.setState(function (state) {
            return { collapsed: !state.collapsed };
        });
    }

    handleAddDatasetClick() {
        this.props.openModal("ADD_DATASET");
    }

    render() {
        const props = this.props;
        const layerDataComponents = this.props.layerData.map(function (
            layer,
            index
        ) {
            return (
                <LayerControl
                    layer={layer}
                    key={index}
                    toggleLayerVisibility={props.toggleLayerVisibility}
                    adjustLayerOpacity={props.adjustLayerOpacity}
                />
            );
        });

        const collapseButtonSymbol = this.state.collapsed
            ? "chevron_right"
            : "chevron_left";

        return (
            <div id="Menu" className={this.state.collapsed ? "collapsed" : ""}>
                <div className="Menu__titlebar">
                    <div className="Menu__title">
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
                    <div className="Menu__controls">
                        <IconButton onClick={this.handleHelpClick}>
                            help
                        </IconButton>
                        <IconButton onClick={this.handleShareClick}>
                            share
                        </IconButton>
                        <IconButton onClick={this.handleSettingsClick}>
                            settings
                        </IconButton>
                        <IconButton onClick={this.handleCollapseClick}>
                            {collapseButtonSymbol}
                        </IconButton>
                    </div>
                </div>
                <SelectedDatasetsButtonPanel
                    onAddDatasetClick={this.handleAddDatasetClick}
                />
                <div className="Menu__content">{layerDataComponents}</div>
            </div>
        );
    }
}

function mapStateToProps({ layerData }) {
    return {
        layerData,
    };
}

const mapDispatchToProps = {
    toggleLayerVisibility,
    adjustLayerOpacity,
    openModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

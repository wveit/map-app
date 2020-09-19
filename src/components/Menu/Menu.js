import React from "react";
import { connect } from "react-redux";
import {
    toggleLayerVisibility,
    adjustLayerOpacity,
} from "../../actions/layerData";
import LayerControl from "../LayerControl/LayerControl";
import "./Menu.css";
import podaacLogo from "./podaac_logo.svg";

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: false,
        };
        this.handleCollapseClick = this.handleCollapseClick.bind(this);
    }

    handleCollapseClick() {
        this.setState(function (state) {
            return { collapsed: !state.collapsed };
        });
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
                        <div className="Menu__control material-icons">help</div>
                        <div className="Menu__control material-icons">
                            share
                        </div>
                        <div className="Menu__control material-icons">
                            settings
                        </div>
                        <div
                            className="Menu__control material-icons"
                            onClick={this.handleCollapseClick}
                        >
                            {collapseButtonSymbol}
                        </div>
                    </div>
                </div>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

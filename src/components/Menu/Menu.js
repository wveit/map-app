import React from "react";
import { connect } from "react-redux";
import {
    toggleLayerVisibility,
    adjustLayerOpacity,
} from "../../actions/layerData";
import LayerControl from "./LayerControl";
import "./Menu.css";

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

        const collapseButtonSymbol = this.state.collapsed ? (
            <span>&gt;</span>
        ) : (
            <span>&lt;</span>
        );

        return (
            <div id="Menu" className={this.state.collapsed ? "collapsed" : ""}>
                <div className="Menu__titlebar">
                    <div className="Menu__title">State of the Ocean</div>
                    <div className="Menu__controls">
                        <button onClick={this.handleCollapseClick}>
                            {collapseButtonSymbol}
                        </button>
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

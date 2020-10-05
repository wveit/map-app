import React from "react";
import { connect } from "react-redux";
import { setLayerActive } from "../../actions/layerData";
import ModalTitleBar from "./ModalTitleBar";
import AddLayerMenu from "../AddLayerMenu/AddLayerMenu";

function AddLayerModal(props) {
    return (
        <div className="AddLayerModal" style={{ zIndex: "2" }}>
            <ModalTitleBar>
                <h3>Available Layers</h3>
            </ModalTitleBar>
            <AddLayerMenu
                setLayerActive={props.setLayerActive}
                layers={props.layers}
            />
        </div>
    );
}

const mapDispatchToProps = {
    setLayerActive,
};

function mapStateToProps(state) {
    return {
        layers: state.layerData,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLayerModal);

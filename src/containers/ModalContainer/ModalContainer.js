import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modals";
import "./ModalContainer.css";
import SettingsModal from "../../components/Modal/SettingsModal";
import ShareModal from "../../components/Modal/ShareModal";
import HelpModal from "../../components/Modal/HelpModal";
import AddLayerMenuContainer from "../../containers/AddLayerMenuContainer/AddLayerMenuContainer";

function ModalContainer(props) {
    if (!props.currentModal) {
        return null;
    }

    return (
        <div className="ModalContainer">
            <div
                className="ModalContainer__background"
                onClick={props.closeModal}
            ></div>
            {getProperModal(props.currentModal)}
        </div>
    );
}

function getProperModal(modalName) {
    switch (modalName) {
        case "SETTINGS":
            return <SettingsModal />;
        case "SHARE":
            return <ShareModal />;
        case "HELP":
            return <HelpModal />;
        case "ADD_LAYER":
            return <AddLayerMenuContainer />;
        default:
            return null;
    }
}

const mapDispatchToProps = {
    closeModal,
};

function mapStateToProps(state) {
    return {
        currentModal: state.modals.currentModal,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);

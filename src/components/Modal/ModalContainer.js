import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modals";
import "./ModalContainer.css";
import SettingsModal from "./SettingsModal";

function ModalContainer(props) {
    if (!props.currentModal) {
        return null;
    }

    const modal = getProperModal(props.currentModal);

    return (
        <div className="ModalContainer">
            <div
                className="ModalContainer__background"
                onClick={props.closeModal}
            ></div>
            {modal}
        </div>
    );
}

function getProperModal(modalName) {
    switch (modalName) {
        case "SETTINGS":
            return <SettingsModal />;
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

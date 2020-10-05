import { connect } from "react-redux";
import { openModal } from "../../actions/modals";
import SelectedLayersButtonPanel from "./SelectedLayersButtonPanel";

const mapDispatchToProps = {
    onAddLayerClick: () => openModal("ADD_LAYER"),
};

export default connect(null, mapDispatchToProps)(SelectedLayersButtonPanel);

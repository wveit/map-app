import { connect } from "react-redux";
import MenuFrame from "../../components/MenuFrame/MenuFrame";
import { openModal } from "../../actions/modals";

const mapDispatchToProps = {
    onHelpButtonClick: () => openModal("HELP"),
    onShareButtonClick: () => openModal("SHARE"),
    onSettingsButtonClick: () => openModal("SETTINGS"),
};

export default connect(null, mapDispatchToProps)(MenuFrame);

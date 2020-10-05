import { connect } from "react-redux";
import { openModal } from "../../actions/modals";
import SelectedDatasetsButtonPanel from "./SelectedDatasetsButtonPanel";

const mapDispatchToProps = {
    onAddDatasetClick: () => openModal("ADD_DATASET"),
};

export default connect(null, mapDispatchToProps)(SelectedDatasetsButtonPanel);

import { connect } from "react-redux";
import SelectedLayersList from "./SelectedLayersList";
import {
    toggleLayerVisibility,
    adjustLayerOpacity,
    setLayerActive,
} from "../../actions/layerData";

function mapStateToProps({ layerData }) {
    return { layerData };
}

const mapDispatchToProps = {
    onLayerVisibilityToggle: toggleLayerVisibility,
    onLayerOpacityChange: adjustLayerOpacity,
    onLayerRemove: (layerId) => setLayerActive(layerId, false),
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedLayersList);

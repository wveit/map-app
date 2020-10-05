import { connect } from "react-redux";
import SelectedLayersList from "./SelectedLayersList";
import {
    toggleLayerVisibility,
    adjustLayerOpacity,
    setLayerActive,
} from "../../actions/layerData";

function mapStateToProps({ selectedLayers, layerData }) {
    return { layers: selectedLayers.map((layerId) => layerData[layerId]) };
}

const mapDispatchToProps = {
    onLayerVisibilityToggle: toggleLayerVisibility,
    onLayerOpacityChange: adjustLayerOpacity,
    onLayerRemove: (layerId) => setLayerActive(layerId, false),
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedLayersList);

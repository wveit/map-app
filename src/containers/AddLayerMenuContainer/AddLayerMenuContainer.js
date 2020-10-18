import { connect } from "react-redux";
import { setLayerActive } from "../../actions/layerData";
import AddLayerMenu from "../../components/AddLayerMenu/AddLayerMenu";

const mapDispatchToProps = {
    setLayerActive,
};

function mapStateToProps(state) {
    return {
        layers: state.layerData,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLayerMenu);

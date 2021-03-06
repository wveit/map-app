import { connect } from "react-redux";
import { updateMouseCoordinates } from "../../actions/coordinates";
import Map from "../../components/Map/Map";
import "../../components/Map/Map.css";

function mapStateToProps({ selectedLayers, layerData, dates }) {
    return {
        selectedLayers,
        layerData,
        mapDate: dates.mapDate,
    };
}

const mapDispatchToProps = {
    onCoordinateChange: updateMouseCoordinates,
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);

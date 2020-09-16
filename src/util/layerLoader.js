import { parseWMTSCapabilities } from "./parser";
import { addLayerData } from "../actions/layerData";

const configuredLayers = [
    { identifier: "BlueMarble_ShadedRelief", visible: true },
    { identifier: "GHRSST_L4_AVHRR-OI_Sea_Surface_Temperature" },
    { identifier: "GHRSST_L4_MUR25_Sea_Surface_Temperature" },
    { identifier: "GHRSST_L4_MUR_Sea_Surface_Temperature", visible: true },
    { identifier: "Aquarius_Sea_Surface_Salinity_L3_7Day_RunningMean" },
    { identifier: "AIRS_L2_Surface_Air_Temperature_Day" },
    { identifier: "SMAP_L3_Sea_Surface_Salinity_CAP_8Day_RunningMean" },
];

export async function loadLayers(url, store) {
    const httpResponse = await fetch(url);
    const xmlText = await httpResponse.text();
    const capabilitiesObject = parseWMTSCapabilities(xmlText);

    configuredLayers.forEach(function (layerConfig) {
        const layerName = layerConfig.identifier;
        const layerObj = {
            ...layerConfig,
            ...capabilitiesObject.layers[layerName],
        };
        layerObj.tileMatrixSet =
            capabilitiesObject.tileMatrixSets[layerObj.tileMatrixSet];
        store.dispatch(addLayerData(layerObj));
    });
}

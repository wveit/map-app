import React from "react";
import MenuFrameContainer from "../MenuFrame/MenuFrameContainer";
import SelectedDatasetsButtonPanelContainer from "../SelectedDatasetsButtonPanel/SelectedDatasetsButtonPanelContainer";
import SelectedDatasetsListContainer from "../SelectedDatasetsList/SelectedDatasetsListContainer";

function MenuContainer(props) {
    return (
        <MenuFrameContainer>
            <SelectedDatasetsButtonPanelContainer />
            <SelectedDatasetsListContainer />
        </MenuFrameContainer>
    );
}

export default MenuContainer;

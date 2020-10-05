import React from "react";
import MenuFrameContainer from "../MenuFrame/MenuFrameContainer";
import SelectedLayersButtonPanelContainer from "../SelectedLayersButtonPanel/SelectedLayersButtonPanelContainer";
import SelectedLayersListContainer from "../SelectedLayersList/SelectedLayersListContainer";

function MenuContainer(props) {
    return (
        <MenuFrameContainer>
            <SelectedLayersButtonPanelContainer />
            <SelectedLayersListContainer />
        </MenuFrameContainer>
    );
}

export default MenuContainer;

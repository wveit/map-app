import React from "react";
import MenuFrameContainer from "./MenuFrameContainer";
import SelectedLayersButtonPanelContainer from "./SelectedLayersButtonPanelContainer";
import SelectedLayersListContainer from "./SelectedLayersListContainer";

function MenuContainer(props) {
    return (
        <MenuFrameContainer>
            <SelectedLayersButtonPanelContainer />
            <SelectedLayersListContainer />
        </MenuFrameContainer>
    );
}

export default MenuContainer;

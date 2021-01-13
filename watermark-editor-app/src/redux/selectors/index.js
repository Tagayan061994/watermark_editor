import { createSelector } from "reselect";
import { textConfigs } from "../reducers/textConfigs";
export const getStore = (state) => state;

export const getTextConfigs = createSelector(getStore, (state) => {
    return state.textConfigs;
});
export const getText = createSelector(
    getTextConfigs,
    (textConfigs) => textConfigs.text
);
export const getSize = createSelector(
    getTextConfigs,
    (textConfigs) => textConfigs.size
);
export const getColor = createSelector(
    getTextConfigs,
    (textConfigs) => textConfigs.color
);
export const getFont = createSelector(
    getTextConfigs,
    (textConfigs) => textConfigs.font
);
export const getMode = createSelector(
    getTextConfigs,
    (textConfigs) => textConfigs.istTailedMode
);
export const getPosition = createSelector(
    getTextConfigs,
    (textConfigs) => textConfigs.position
);
export const getPadding = createSelector(
    getTextConfigs,
    (textConfigs) => textConfigs.padding
);

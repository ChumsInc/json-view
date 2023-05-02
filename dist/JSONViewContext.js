import React from "react";
import { google, monokai } from "base16";
export { google, monokai } from "base16";
export const preferredThemes = {
    dark: monokai,
    light: google,
};
export const defaultSettings = {
    collapsedStringLength: 25,
    maxArrayElements: 25,
    maxObjectElements: 50,
    defaultOpenLevels: 1,
};
export const JSONViewContext = React.createContext(defaultSettings);
//# sourceMappingURL=JSONViewContext.js.map
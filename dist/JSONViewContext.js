import { google, monokai } from "base16";
import React from "react";
export const preferredThemes = {
    dark: monokai,
    light: google,
};
export const jvSettings = {
    collapsedStringLength: 8,
    maxArrayElements: 25,
    maxObjectElements: 50,
    defaultOpenLevels: 1,
};
export const JSONViewContext = React.createContext(jvSettings);
//# sourceMappingURL=JSONViewContext.js.map
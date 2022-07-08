import {Base16Theme, google, monokai} from "base16";
import React from "react";

export const preferredThemes = {
    dark: monokai,
    light: google,
}

export interface JSONViewSettings {
    collapsedStringLength: number,
    maxArrayElements: number,
    maxObjectElements: number,
    defaultOpenLevels: number,
}

export const jvSettings: JSONViewSettings = {
    collapsedStringLength: 8,
    maxArrayElements: 25,
    maxObjectElements: 50,
    defaultOpenLevels: 1,
}


export const JSONViewContext = React.createContext<JSONViewSettings>(jvSettings);


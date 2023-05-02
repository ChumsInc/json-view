import React from "react";
import {google, monokai} from "base16";

export {google, monokai} from "base16";
export type {Base16Theme} from "base16";

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

export const defaultSettings: JSONViewSettings = {
    collapsedStringLength: 25,
    maxArrayElements: 25,
    maxObjectElements: 50,
    defaultOpenLevels: 1,
}


export const JSONViewContext = React.createContext<JSONViewSettings>(defaultSettings);



import {createContext} from "react";
import {google, monokai} from "base16";
import type {JSONViewSettings} from "./types";

export {google, monokai} from "base16";

export const preferredThemes = {
    dark: monokai,
    light: google,
}

export const defaultSettings: JSONViewSettings = {
    collapsedStringLength: 25,
    maxArrayElements: 25,
    maxObjectElements: 50,
    defaultOpenLevels: 1,
}

export const JSONViewContext = createContext<JSONViewSettings>(defaultSettings);



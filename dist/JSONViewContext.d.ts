import { Base16Theme } from "base16";
import React from "react";
export declare const preferredThemes: {
    dark: Base16Theme;
    light: Base16Theme;
};
export interface JSONViewSettings {
    collapsedStringLength: number;
    maxArrayElements: number;
    maxObjectElements: number;
    defaultOpenLevels: number;
}
export declare const jvSettings: JSONViewSettings;
export declare const JSONViewContext: React.Context<JSONViewSettings>;

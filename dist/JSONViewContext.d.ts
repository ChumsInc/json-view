import React from "react";
export { google, monokai } from "base16";
export type { Base16Theme } from "base16";
export declare const preferredThemes: {
    dark: import("base16").Base16Theme;
    light: import("base16").Base16Theme;
};
export interface JSONViewSettings {
    collapsedStringLength: number;
    maxArrayElements: number;
    maxObjectElements: number;
    defaultOpenLevels: number;
}
export declare const defaultSettings: JSONViewSettings;
export declare const JSONViewContext: React.Context<JSONViewSettings>;

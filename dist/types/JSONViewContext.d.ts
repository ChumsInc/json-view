import { JSONViewSettings } from './types';
export { google, monokai } from 'base16';
export declare const preferredThemes: {
    dark: import('base16').Base16Theme;
    light: import('base16').Base16Theme;
};
export declare const defaultSettings: JSONViewSettings;
export declare const JSONViewContext: import('react').Context<JSONViewSettings>;

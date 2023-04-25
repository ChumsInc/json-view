import { Base16Theme } from "base16";
import './json-view.css';
import { ReactNode } from "react";
export interface JSONViewProps {
    data: any;
    theme?: Base16Theme;
    dark?: boolean;
    rootNodeName?: string;
    collapsedStringLength?: number;
    maxArrayElements?: number;
    maxObjectElements?: number;
    defaultOpenLevels?: number;
    preview?: (data: any) => ReactNode;
}
declare const JSONView: ({ data, theme, dark, rootNodeName, collapsedStringLength, maxArrayElements, maxObjectElements, defaultOpenLevels, preview, }: JSONViewProps) => JSX.Element;
export default JSONView;

import { type Base16Theme } from "base16";
export interface JSONViewProps {
    data: any;
    theme?: Base16Theme;
    dark?: boolean;
    rootNodeName?: string;
    collapsedStringLength?: number;
    maxArrayElements?: number;
    maxObjectElements?: number;
    defaultOpenLevels?: number;
}
declare const JSONView: ({ data, theme, dark, rootNodeName, collapsedStringLength, maxArrayElements, maxObjectElements, defaultOpenLevels, }: JSONViewProps) => import("react/jsx-runtime").JSX.Element;
export default JSONView;

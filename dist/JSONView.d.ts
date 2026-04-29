import { type Base16Theme } from "base16";
export interface JSONViewProps<T = unknown> {
    data: T;
    theme?: Base16Theme;
    dark?: boolean;
    rootNodeName?: string;
    collapsedStringLength?: number;
    maxArrayElements?: number;
    maxObjectElements?: number;
    defaultOpenLevels?: number;
}
export default function JSONView<T = unknown>({ data, theme, dark, rootNodeName, collapsedStringLength, maxArrayElements, maxObjectElements, defaultOpenLevels, }: JSONViewProps<T>): import("react/jsx-runtime").JSX.Element;

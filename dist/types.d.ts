import { ReactNode } from "react";
export type PreviewFunction = (value: any) => ReactNode;
export interface KeyedObject {
    [key: string]: any;
}
export interface JSONNodeProps {
    nodeKey: string | number;
    value: any;
    collapsed?: boolean;
    preview?: PreviewFunction;
}

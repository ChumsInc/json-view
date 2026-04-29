import type {ReactNode} from "react";
export type {Base16Theme} from "base16";

export type PreviewFunction = (value: unknown) => ReactNode;

export interface KeyedObject {
    [key: string]: unknown,
}

export interface JSONNodeProps {
    nodeKey: string | number;
    value: unknown;
    open?: number;
}

export interface ArrayValueProps extends JSONNodeProps {
    value: unknown[],
}

export interface JSONViewSettings {
    collapsedStringLength: number,
    maxArrayElements: number,
    maxObjectElements: number,
    defaultOpenLevels: number,
}

export type NumberValue = number|bigint|boolean

import { ReactNode } from 'react';

export type {Base16Theme} from 'base16';

export type PreviewFunction = (value: any) => ReactNode;

export interface KeyedObject {
    [key: string]: any,
}

export interface JSONNodeProps {
    nodeKey: string | number;
    value: any;
    open?: number;
}

export interface ArrayValueProps extends JSONNodeProps {
    value: any[],
}

export interface JSONViewSettings {
    collapsedStringLength: number,
    maxArrayElements: number,
    maxObjectElements: number,
    defaultOpenLevels: number,
}


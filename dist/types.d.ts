export interface KeyedObject {
    [key: string]: any;
}
export interface JSONNodeProps {
    nodeKey: string | number;
    value: any;
    collapsed?: boolean;
}

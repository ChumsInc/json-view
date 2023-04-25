import React from "react";
import { JSONNodeProps, KeyedObject } from "./types";
export interface ObjectNodeProps extends JSONNodeProps {
    value: KeyedObject;
    collapsed?: boolean;
}
declare const _default: React.MemoExoticComponent<({ value, nodeKey, collapsed, preview }: ObjectNodeProps) => JSX.Element>;
export default _default;

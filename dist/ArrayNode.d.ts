import { JSONNodeProps } from "./types";
import React from "react";
export interface ArrayValueProps extends JSONNodeProps {
    value: any[];
    collapsed?: boolean;
}
declare const _default: React.MemoExoticComponent<({ value, nodeKey, collapsed, preview }: ArrayValueProps) => JSX.Element>;
export default _default;

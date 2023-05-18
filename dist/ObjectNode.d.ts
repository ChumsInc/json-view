import React from "react";
import { JSONNodeProps, KeyedObject } from "./types";
export interface ObjectNodeProps extends JSONNodeProps {
    value: KeyedObject;
}
declare const _default: React.MemoExoticComponent<({ value, nodeKey, open }: ObjectNodeProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;

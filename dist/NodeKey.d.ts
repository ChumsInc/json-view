import React from "react";
export interface NodeKeyProps {
    children: React.ReactNode;
    expandable?: boolean;
    expanded?: boolean;
    onClick?: () => void;
}
declare const NodeKey: ({ children, expandable, expanded, onClick }: NodeKeyProps) => import("react/jsx-runtime").JSX.Element;
export default NodeKey;

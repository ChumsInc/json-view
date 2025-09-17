import { ReactNode } from 'react';
export interface NodeKeyProps {
    children: ReactNode;
    type: string;
    expandable?: boolean;
    expanded?: boolean;
    onClick?: () => void;
}
declare const NodeKey: ({ children, type, expandable, expanded, onClick }: NodeKeyProps) => import("react/jsx-runtime").JSX.Element;
export default NodeKey;

/// <reference types="react" />
import { NodeKeyProps } from "./NodeKey";
/**
 * CollapsedNodeKey mimics the NodeKey element, except that it returns a SPAN Element instead of a DT Element.
 */
declare const CollapsedNodeKey: ({ children, expandable, expanded, onClick }: NodeKeyProps) => JSX.Element;
export default CollapsedNodeKey;

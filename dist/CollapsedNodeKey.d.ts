/// <reference types="react" />
import { NodeKeyProps } from "./NodeKey";
/**
 * CollapsedNodeKey mimics the NodeKey element, except that it returns a <span> Element instead of a <dt> Element.
 */
declare const CollapsedNodeKey: ({ children, expandable, expanded, onClick }: NodeKeyProps) => JSX.Element;
export default CollapsedNodeKey;

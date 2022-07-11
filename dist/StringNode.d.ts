/// <reference types="react" />
import { JSONNodeProps } from "./types";
interface StringNodeProps extends JSONNodeProps {
    value: string;
}
declare const StringNode: ({ nodeKey, value, collapsed }: StringNodeProps) => JSX.Element;
export default StringNode;

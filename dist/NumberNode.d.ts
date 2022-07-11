/// <reference types="react" />
import { JSONNodeProps } from "./types";
interface NumberNodeProps extends JSONNodeProps {
    value: number | bigint | boolean;
}
declare const NumberNode: ({ nodeKey, value, collapsed }: NumberNodeProps) => JSX.Element;
export default NumberNode;

import type { JSONNodeProps, NumberValue } from "./types";
interface NumberNodeProps extends JSONNodeProps {
    value: NumberValue;
}
declare const NumberNode: ({ nodeKey, value }: NumberNodeProps) => import("react/jsx-runtime").JSX.Element;
export default NumberNode;

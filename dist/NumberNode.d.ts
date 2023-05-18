import { JSONNodeProps } from "./types";
interface NumberNodeProps extends JSONNodeProps {
    value: number | bigint | boolean;
}
declare const NumberNode: ({ nodeKey, value }: NumberNodeProps) => import("react/jsx-runtime").JSX.Element;
export default NumberNode;

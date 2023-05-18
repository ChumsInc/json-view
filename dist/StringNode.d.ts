import { JSONNodeProps } from "./types";
interface StringNodeProps extends JSONNodeProps {
    value: string;
}
declare const StringNode: ({ nodeKey, value }: StringNodeProps) => import("react/jsx-runtime").JSX.Element;
export default StringNode;

import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { JSONViewContext } from "./JSONViewContext";
const NextArrayValues = ({ currentIndex, maxItems, onClick }) => {
    const { maxArrayElements } = useContext(JSONViewContext);
    return (_jsxs("div", { className: "json-view--node", onClick: onClick, children: [_jsxs("dt", { className: "json-view--key", children: ["[", (currentIndex + 1) * maxArrayElements, " \u2026 ", maxItems - 1, "]"] }), _jsx("dd", { className: "json-view--value", children: "next" })] }));
};
export default NextArrayValues;
//# sourceMappingURL=NextArrayValues.js.map
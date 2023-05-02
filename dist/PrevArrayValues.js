import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { JSONViewContext } from "./JSONViewContext";
const PrevArrayValues = ({ currentIndex, onClick }) => {
    const { maxArrayElements } = useContext(JSONViewContext);
    return (_jsxs("div", { className: "json-view--node", onClick: onClick, children: [_jsxs("dt", { className: "json-view--key", children: ["[0 \u2026 ", (currentIndex * maxArrayElements) - 1, "]"] }), _jsx("dd", { className: "json-view--value", children: "prev" })] }));
};
export default PrevArrayValues;
//# sourceMappingURL=PrevArrayValues.js.map
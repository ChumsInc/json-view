import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import React from "react";
export const CollapsedArrayNode = ({ value }) => {
    return (_jsx("span", { className: "json-view--collapsed-array", children: value.length > 0 && (_jsxs("span", { children: ["\u2026", value.length] })) }));
};
export default React.memo(CollapsedArrayNode);
//# sourceMappingURL=CollapsedArrayNode.js.map
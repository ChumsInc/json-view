import { Fragment as _Fragment, jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import React from "react";
const defaultPreview = (value) => _jsxs(_Fragment, { children: ["[\u2026", value.length, "]"] });
export const CollapsedArrayNode = ({ value, preview }) => {
    const previewFunction = preview ?? defaultPreview;
    return (_jsx("span", { className: "json-view--collapsed-array", children: value.length > 0 && (_jsxs("span", { children: ["\u2026", value.length] })) }));
};
export default React.memo(CollapsedArrayNode);
//# sourceMappingURL=CollapsedArrayNode.js.map
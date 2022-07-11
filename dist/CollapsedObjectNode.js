import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import JSONNode from "./JSONNode";
import React, { Fragment } from "react";
import CollapsedNodeKey from "./CollapsedNodeKey";
const CollapsedObjectNode = ({ value }) => {
    const keys = Object.keys(value);
    return (_jsxs("span", { className: "json-view--collapsed-object", children: [keys.filter((key, index) => index < 1)
                .map((key, index) => (_jsxs(Fragment, { children: [_jsx(CollapsedNodeKey, { children: key }), _jsx(JSONNode, { nodeKey: key, value: value[key], collapsed: true }, key), index < 4 && index < keys.length - 1 && (_jsx(_Fragment, { children: ", " }))] }, index))), Object.keys(value).length > 1 && (_jsxs("span", { children: ["\u2026", keys.length] }))] }));
};
export default React.memo(CollapsedObjectNode);
//# sourceMappingURL=CollapsedObjectNode.js.map
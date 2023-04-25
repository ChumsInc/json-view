import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import NodeKey from "./NodeKey";
import React, { useContext, useState } from "react";
import JSONNode from "./JSONNode";
import { CollapsedArrayNode } from "./CollapsedArrayNode";
import { JSONViewContext } from "./JSONViewContext";
import PrevArrayValues from "./PrevArrayValues";
import NextArrayValues from "./NextArrayValues";
const ArrayNode = ({ value, nodeKey, collapsed, preview }) => {
    const { maxArrayElements } = useContext(JSONViewContext);
    const [show, setShow] = useState(false);
    const [arrayIndex, setArrayIndex] = useState(0);
    const maxIndex = Math.floor(value.length / maxArrayElements);
    const onClickUp = () => {
        setArrayIndex(Math.max(arrayIndex - 1, 0));
    };
    const onClickDown = () => {
        setArrayIndex(Math.min(maxIndex, arrayIndex + 1));
    };
    if (collapsed) {
        return (_jsx(CollapsedArrayNode, { value: value, preview: preview }));
    }
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "json-view--node", children: [_jsx(NodeKey, { expandable: !!value.length, expanded: show, onClick: () => setShow(!show), children: nodeKey }), _jsx("dd", { children: _jsx(CollapsedArrayNode, { value: value, preview: preview }) })] }), show && (_jsxs("dl", { children: [arrayIndex > 0 && (_jsx(PrevArrayValues, { currentIndex: arrayIndex, onClick: onClickUp })), value
                        .filter((v, index) => Math.floor(index / maxArrayElements) === arrayIndex)
                        .map((v, index) => (_jsx(JSONNode, { nodeKey: index + (arrayIndex * maxArrayElements), value: v, preview: preview }, index))), arrayIndex < maxIndex && maxIndex > 0 && (_jsx(NextArrayValues, { currentIndex: arrayIndex, maxItems: value.length, onClick: onClickDown }))] }))] }));
};
export default React.memo(ArrayNode);
//# sourceMappingURL=ArrayNode.js.map
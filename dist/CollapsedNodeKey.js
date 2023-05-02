import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classnames";
/**
 * CollapsedNodeKey mimics the NodeKey element, except that it returns a <span> Element instead of a <dt> Element.
 */
const CollapsedNodeKey = ({ children, expandable, expanded, onClick }) => {
    const clickHandler = () => {
        if (expandable && !!onClick) {
            onClick();
        }
    };
    return (_jsxs("span", { className: "json-view--key", onClick: clickHandler, children: [expandable && (_jsx("span", { className: classNames('json-view--node-key', { 'collapsed': !expanded, 'open': expanded }) })), _jsxs("span", { children: [children, ":"] })] }));
};
export default CollapsedNodeKey;
//# sourceMappingURL=CollapsedNodeKey.js.map
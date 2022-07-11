import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classnames";
const NodeKey = ({ children, expandable, expanded, onClick }) => {
    const clickHandler = () => {
        if (expandable && !!onClick) {
            onClick();
        }
    };
    return (_jsxs("dt", { className: "json-view--key", onClick: clickHandler, children: [expandable && (_jsx("span", { className: classNames('json-view--node-key', { 'collapsed': !expanded, 'open': expanded }) })), _jsxs("span", { children: [children, ":"] })] }));
};
export default NodeKey;
//# sourceMappingURL=NodeKey.js.map
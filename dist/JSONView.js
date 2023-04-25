import { jsx as _jsx } from "react/jsx-runtime";
import { google } from "base16";
import './json-view.css';
import { useContext, useEffect, useState } from "react";
import JSONNode from "./JSONNode";
import classNames from "classnames";
import { JSONViewContext, preferredThemes } from "./JSONViewContext";
const JSONView = ({ data, theme, dark, rootNodeName, collapsedStringLength, maxArrayElements, maxObjectElements, defaultOpenLevels, preview, }) => {
    const [currentTheme, setCurrentTheme] = useState(google);
    const [style, setStyle] = useState({});
    const [json, setJSON] = useState({});
    // if wrapped in a parent context then use that context
    const parentContext = useContext(JSONViewContext);
    const [context, setContext] = useState(parentContext);
    // set the theme based on passed theme or preferred theme
    useEffect(() => {
        setCurrentTheme(theme || (dark ? preferredThemes.dark : preferredThemes.light));
    }, [theme]);
    // if passing context specific params to JSONView, then set those based on either parent context or default context
    useEffect(() => {
        setContext({
            ...context,
            collapsedStringLength: collapsedStringLength ?? parentContext.collapsedStringLength,
            maxArrayElements: maxArrayElements ?? parentContext.maxArrayElements,
            maxObjectElements: maxObjectElements ?? parentContext.maxObjectElements,
            defaultOpenLevels: defaultOpenLevels ?? parentContext.defaultOpenLevels,
        });
    }, [collapsedStringLength, maxArrayElements, maxObjectElements, defaultOpenLevels]);
    useEffect(() => {
        const style = {
            "--theme-base00": currentTheme.base00,
            "--theme-base01": currentTheme.base01,
            "--theme-base02": currentTheme.base02,
            "--theme-base03": currentTheme.base03,
            "--theme-base04": currentTheme.base04,
            "--theme-base05": currentTheme.base05,
            "--theme-base06": currentTheme.base06,
            "--theme-base07": currentTheme.base07,
            "--theme-base08": currentTheme.base08,
            "--theme-base09": currentTheme.base09,
            "--theme-base0A": currentTheme.base0A,
            "--theme-base0B": currentTheme.base0B,
            "--theme-base0C": currentTheme.base0C,
            "--theme-base0D": currentTheme.base0D,
            "--theme-base0E": currentTheme.base0E,
            "--theme-base0F": currentTheme.base0F,
        };
        setStyle(style);
    }, [currentTheme]);
    useEffect(() => {
        setJSON(data);
    }, [data]);
    return (_jsx(JSONViewContext.Provider, { value: context, children: _jsx("div", { className: classNames("json-view", { 'json-view--dark': dark }), style: style, children: _jsx("dl", { children: _jsx(JSONNode, { nodeKey: rootNodeName || "root", value: json, preview: preview }) }) }) }));
};
export default JSONView;
//# sourceMappingURL=JSONView.js.map
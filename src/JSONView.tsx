import {Base16Theme, solarized} from "base16";
import './json-view.css';
import {CSSProperties, useContext, useEffect, useState} from "react";
import JSONNode from "./JSONNode";
import classNames from "classnames";
import {JSONViewContext, JSONViewSettings, jvSettings, preferredThemes} from "./JSONViewContext";


export interface JSONViewProps {
    data: any,
    theme?: Base16Theme,
    dark?: boolean,
    rootNodeName?: string,
    collapsedStringLength?: number,
    maxArrayElements?: number,
    maxObjectElements?: number,
    defaultOpenLevels?: number,
}

const JSONView = ({
                      data,
                      theme,
                      dark,
                      rootNodeName,
                      collapsedStringLength,
                      maxArrayElements,
                      maxObjectElements,
                      defaultOpenLevels
                  }: JSONViewProps) => {
    const [currentTheme, setCurrentTheme] = useState<Base16Theme>(solarized);
    const [style, setStyle] = useState<CSSProperties>({})
    const [json, setJSON] = useState({});

    // if wrapped in a parent context then use that context
    const parentContext = useContext(JSONViewContext);
    const [context, setContext] = useState<JSONViewSettings>(parentContext);

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
        })
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
        } as CSSProperties;
        setStyle(style);
    }, [currentTheme]);

    useEffect(() => {
        setJSON(data);
    }, [data])

    return (
        <JSONViewContext.Provider value={context}>
            <div className={classNames("json-view", {'json-view--dark': dark})} style={style}>
                <dl>
                    <JSONNode nodeKey={rootNodeName || "root"} value={json}/>
                </dl>
            </div>
        </JSONViewContext.Provider>
    )
}
export default JSONView;

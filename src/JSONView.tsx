import {type Base16Theme} from "base16";
import {type CSSProperties, useContext, useEffect, useState} from "react";
import JSONNode from "./JSONNode";
import classNames from "classnames";
import {defaultSettings, JSONViewContext, preferredThemes} from "./JSONViewContext";
import JSONViewStyleContainer from "./JSONViewStyleContainer";
import type {JSONViewSettings} from "./types";


export interface JSONViewProps<T = unknown> {
    data: T,
    theme?: Base16Theme,
    dark?: boolean,
    rootNodeName?: string,
    collapsedStringLength?: number,
    maxArrayElements?: number,
    maxObjectElements?: number,
    defaultOpenLevels?: number,
}

export default function JSONView<T = unknown>({
                                                  data,
                                                  theme,
                                                  dark,
                                                  rootNodeName,
                                                  collapsedStringLength,
                                                  maxArrayElements,
                                                  maxObjectElements,
                                                  defaultOpenLevels,
                                              }: JSONViewProps<T>) {
    const [style, setStyle] = useState<CSSProperties>({})
    const [json, setJSON] = useState<T | null>(data);

    const parentContext = useContext<JSONViewSettings>(JSONViewContext);

    useEffect(() => {
        Promise.resolve().then(() => {
            const nextTheme = theme ?? (dark ? preferredThemes.dark : preferredThemes.light);
            const style = {
                "--theme-base00": nextTheme.base00,
                "--theme-base01": nextTheme.base01,
                "--theme-base02": nextTheme.base02,
                "--theme-base03": nextTheme.base03,
                "--theme-base04": nextTheme.base04,
                "--theme-base05": nextTheme.base05,
                "--theme-base06": nextTheme.base06,
                "--theme-base07": nextTheme.base07,
                "--theme-base08": nextTheme.base08,
                "--theme-base09": nextTheme.base09,
                "--theme-base0A": nextTheme.base0A,
                "--theme-base0B": nextTheme.base0B,
                "--theme-base0C": nextTheme.base0C,
                "--theme-base0D": nextTheme.base0D,
                "--theme-base0E": nextTheme.base0E,
                "--theme-base0F": nextTheme.base0F,
            } as CSSProperties;
            setStyle(style);
        })
    }, [theme, dark]);

    const context:JSONViewSettings = {
        collapsedStringLength: collapsedStringLength ?? parentContext?.collapsedStringLength ?? defaultSettings.collapsedStringLength,
        maxArrayElements: maxArrayElements ?? parentContext.maxArrayElements ?? defaultSettings.maxArrayElements,
        maxObjectElements: maxObjectElements ?? parentContext.maxObjectElements ?? defaultSettings.maxObjectElements,
        defaultOpenLevels: defaultOpenLevels ?? parentContext.defaultOpenLevels ?? defaultSettings.defaultOpenLevels,
    }

    useEffect(() => {
        Promise.resolve().then(() => {
            setJSON(data);
        })
    }, [data])

    return (
        <JSONViewContext.Provider value={context}>
            <JSONViewStyleContainer>
                <div className={classNames("json-view", {'json-view--dark': dark})} style={style}>
                    <dl>
                        <JSONNode nodeKey={rootNodeName || "root"} value={data} open={defaultOpenLevels}/>
                    </dl>
                </div>
            </JSONViewStyleContainer>
        </JSONViewContext.Provider>
    )
}

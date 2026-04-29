import JSONView from "../src/JSONView";
import {type ChangeEvent, useEffect, useState} from "react";


import {defaultSettings, JSONViewContext} from "../src";
import {getTestData, testData} from "./testData";
import type {Base16Theme} from "base16";
import {themes} from "./themes";


interface DataState {
    loading?: boolean,
    data: unknown,
    error?: string,
}

const initialState: DataState = {data: null};


const defaultTheme = 'monokai';
const darkDefault = true;

const App = () => {
    const [filename, setFilename] = useState<string>('artists-search');
    const [theme, setTheme] = useState<Base16Theme>(themes['tube']);
    const [themeName, setThemeName] = useState<string>('tube');
    const [dark, setDark] = useState(darkDefault);
    const [data, setData] = useState<DataState>(initialState);

    useEffect(() => {
        Promise.resolve(getTestData(filename))
            .then(data => {
                console.log(filename, data);
                setData({data, loading: false});
            })
            .catch(err => {
                if (err instanceof Error) {
                    setData({data: null, error: err.message, loading: false});
                }
            })
    }, [filename]);

    const changeHandler = (ev: ChangeEvent<HTMLSelectElement>) => {
        const key = ev.target.value;
        console.log(key);
        if (!themes[key]) {
            return;
        }
        setThemeName(key);
        setTheme(themes[key]);
    }

    return (
        <div>
            <h1>React JSON View tests</h1>
            <div className="row g-3 align-items-baseline">
                <div className="col-auto">
                    <label htmlFor="select-theme">Theme</label>
                </div>
                <div className="col-auto">
                    <select className="form-select form-select-sm" value={themeName} onChange={changeHandler}
                            id="jv--select-theme">
                        {Object.keys(themes).map(key => <option key={key} value={key}>{key}</option>)}
                    </select>
                </div>
                <div className="col-auto">
                    <select className="form-select form-select-sm" value={filename}
                            onChange={(ev) => setFilename(ev.target.value)}>
                        <option value="">-</option>
                        {Object.keys(testData).map(key => (
                            <option key={key} value={testData[key].filename}>{testData[key].title}</option>))}
                    </select>
                </div>
                <div className="col-auto">
                    <div className="form-check form-check-inline">
                        <input type="radio" checked={dark} id="jv--dark-toggle" className="form-check-input"
                               onChange={() => setDark(true)}/>
                        <label className="form-check-label" htmlFor="jv--dark-toggle">Dark Mode</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input type="radio" checked={!dark} id="jv--light-toggle" className="form-check-input"
                               onChange={() => setDark(false)}/>
                        <label className="form-check-label" htmlFor="jv--light-toggle">Light Mode</label>
                    </div>
                </div>
            </div>
            <JSONViewContext.Provider value={{...defaultSettings, maxArrayElements: 10}}>
                <JSONView data={data.data} theme={theme} dark={dark} rootNodeName={testData[filename]?.title}/>
            </JSONViewContext.Provider>
        </div>
    )
}

export default App;

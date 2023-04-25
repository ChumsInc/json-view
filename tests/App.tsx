import JSONView from "../src/JSONView";
import {ChangeEvent, useEffect, useState} from "react";
import {
    apathy,
    ashes,
    atelierDune,
    atelierForest,
    atelierHeath,
    atelierLakeside,
    atelierSeaside,
    Base16Theme,
    bespin,
    brewer,
    bright,
    chalk,
    codeschool,
    colors,
    eighties,
    embers,
    flat,
    google,
    grayscale,
    greenscreen,
    harmonic,
    hopscotch,
    isotope,
    marrakesh,
    mocha,
    monokai,
    ocean,
    paraiso,
    pop,
    railscasts,
    shapeshifter,
    solarized,
    summerfruit,
    threezerotwofour,
    tomorrow,
    tube,
    twilight
} from "base16";
import {JSONViewContext, jvSettings} from "../src";
import JSONPreview from "./JSONPreview";

interface ThemeList {
    [key: string]: Base16Theme,
}

const themes: ThemeList = {
    solarized, chalk, apathy, monokai, codeschool, ashes, pop, atelierDune,
    atelierForest, atelierHeath, atelierLakeside, atelierSeaside,
    bespin, brewer, bright, colors, embers, flat, google, eighties, grayscale, harmonic,
    greenscreen, isotope, hopscotch, mocha, ocean,
    paraiso, marrakesh, railscasts, tube, shapeshifter, summerfruit,
    tomorrow, twilight, threezerotwofour
}

interface DataState {
    loading?: boolean,
    data: any,
    error?: string,
}

const initialState: DataState = {data: null};

interface TestURLList {
    [key: string]: {
        title: string,
        url: string
    },
}

const testURLs: TestURLList = {
    artists: {
        title: 'Artists Search',
        url: '/tests/artists-search.json',
    },
    painOfSalvation: {
        title: 'Pain of Salvation',
        url: '/tests/pos.json'
    },
    dreamTheater: {
        title: 'Dream Theater',
        url: '/tests/dream-theater.json'
    },
    currentSong: {
        title: 'Now Playing',
        url: '/tests/current-song.json'
    },
    random: {
        title: 'Saved Random Data',
        url: '/tests/random-2.json'
    },

}

async function fetchData(urlKey: string) {
    try {
        if (!urlKey || !testURLs[urlKey]) {
            return {data: null};
        }
        const res = await fetch(testURLs[urlKey].url);
        const json = await res.json();
        return {data: json};
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.warn("reducer()", err.message);
            return {data: null, error: err.message};
        }
        console.warn("reducer()", err);
        return {data: null, error: 'unknown error'};
    }

}

const defaultTheme = 'monokai';
const darkDefault = true;

const App = () => {
    const [filename, setFilename] = useState<string>('artists');
    const [data, setData] = useState<DataState>(initialState);
    const [theme, setTheme] = useState<Base16Theme>(monokai);
    const [themeName, setThemeName] = useState<string>('tube');
    const [dark, setDark] = useState(darkDefault);

    useEffect(() => {
        setTheme(themes[defaultTheme]);
        setThemeName(defaultTheme);

    }, [])

    useEffect(() => {
        setData({data: {loading: true}});
        fetchData(filename)
            .then(data => setData(data));
    }, [filename]);

    // useEffect(() => {
    //     fetchData(filename)
    //         .then(data => setData(data));
    // }, []);

    const changeHandler = (ev: ChangeEvent<HTMLSelectElement>) => {
        const key = ev.target.value;
        console.log(key);
        if (!themes[key]) {
            return;
        }
        setThemeName(key);
        setTheme(themes[key]);
    }

    const renderPreview = (data: any) => {
        return (<JSONPreview data={data}/>);
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
                        {Object.keys(testURLs).map(key => (
                            <option key={key} value={key}>{testURLs[key].title}</option>))}
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
            <JSONViewContext.Provider value={{...jvSettings, maxArrayElements: 100}}>
                <JSONView data={data.data} theme={theme} dark={dark} rootNodeName={testURLs[filename]?.title}
                          collapsedStringLength={5} defaultOpenLevels={1} maxArrayElements={25} maxObjectElements={100}
                          preview={renderPreview}/>
            </JSONViewContext.Provider>
        </div>
    )
}

export default App;

# JSONView Component

---

A component for rendering data to a collapsible tree

[![License](https://img.shields.io/github/license/UtahGooner/json-view)](https://github.com/UtahGooner/json-view)
[![Latest version](https://img.shields.io/github/package-json/v/UtahGooner/json-view)](https://github.com/UtahGooner/json-view)
[![Size](https://img.shields.io/github/repo-size/UtahGooner/json-view)](https://github.com/UtahGooner/json-view)


## Usage

```tsx
import {solarized} from "base16";
import {JSONView} from 'json-veiw';
import 'json-view/dist/json-view.css';

const myData: any = {test: 'this is a test', success: true};

const previewFunction = (data:any) => {
    if (Array.isArray(data)) {
        return null;
    }
    const keys = Object.keys(data);
    const [key1, key2, ...rest] = keys;
    if (rest.length) {
        return <span>{key1}, {key2 ?? null}, &hellip;</span>
    }
    return (
        <span>{key1},{key2 ?? null}</span>
    )

}

<JSONView data={myData} theme={solarized} dark={true} rootNodeName={'myData'}
          collapsedStringLength={5} defaultOpenLevels={1}
          maxArrayElements={25} maxObjectElements={100}/>

/* optionally can use the JSONViewContext Provider */
<JSONViewContext.Provider data={{...defaultSettings, maxArrayElements: 100}}>
    <JSONView data={data.data} rootNodeName={'myData'} previewFunction={previewFunction} />
</JSONViewContext.Provider>

```
## Requirements
Required packages (required as peerDependencies):
```json
{
  "peerDependencies": {
    "css-loader": "^6.2.0",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "style-loader": "^3.2.1"
  }
}
```

## Install

`npm install @chumsinc/json-view`

`npm install base16` (optional to apply a new theme)

## Props


| name                  | type        | default    | description                                                                      |
|-----------------------|-------------|------------|----------------------------------------------------------------------------------|
| data (required)       | any         | n/a        | Any data to be viewed                                                            |
| theme                 | Base16Theme | google     | Color theme, defaults to Monokai (dark) <br/>or Google (light)                   |
| rootNodeName          | string      | "root"     | Name of the root node                                                            |
| collapsedStringLength | number      | 5          | Number of characters to show on collapsed string<br/> (can inherit from context) |
| defaultOpenLevels     | number      | 1          | depth of open nodes<br/>(can inherit from context)                               |
| maxArrayElements      | number      | 25         | Number of array values to show<br/>(can inherit from context)                    |
| maxObjectElements     | number      | 100        | Number of object members to show<br/>(can inherit from context)                  |


## Styling


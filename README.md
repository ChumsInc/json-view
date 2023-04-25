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


<JSONView data={myData} theme={solarized} dark={true} rootNodeName={'myData'}
          collapsedStringLength={5} defaultOpenLevels={1}
          maxArrayElements={25} maxObjectElements={100}/>

/* optionally can use the JSONViewContext Provider */
<JSONViewContext.Provider data={{...jvSettings, maxArrayElements: 100}}>
    <JSONView data={data.data} rootNodeName={'myData'}/>
</JSONViewContext.Provider>

```

## Install

`npm install github:UtahGooner/json-view`

## Props

| prop                  | type        | props/context | optional | default | description                                                                       |
|-----------------------|-------------|---------------|----------|---------|-----------------------------------------------------------------------------------|
| data                  | any         | props         | no       | n/a     | Any data to be viewed                                                             |
| theme                 | Base16Theme | props         | yes      | google  | Color theme, defaults to Monokai (dark) or Google (light)              |
| rootNodeName          | string      | props         | yes      | "root"  |                                                                         |
| collapsedStringLength | number      | props/context | yes      | 5       | Number of characters to show on collapsed string |
| defaultOpenLevels     | number      | props/context | yes      | 1       | depth of open nodes @TODO                        |
| maxArrayElements      | number      | props/context | yes      | 25      | Number of array values to show                   |
| maxObjectElements     | number      | props/context | yes      | 100     | Number of object members to show @TODO           |


## Styling


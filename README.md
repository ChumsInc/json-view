# JSONView Component

---

A component for rendering data to a collapsible tree

[![Latest version](https://img.shields.io/github/package-json/v/UtahGooner/json-view)](https://github.com/UtahGooner/chums-components)


## Usage

```tsx
import {solarized} from "base16";

const myData: any = {test: 'this is a test', success: true};


<JSONView data={myData} theme={solarized} dark={true} rootNodeName={'myData'}
          collapsedStringLength={5} defaultOpenLevels={1}
          maxArrayElements={25} maxObjectElements={100}/>
```

## Install
`npm install github:UtahGooner/json-view`

## Props
| prop                  | type        | default                         | description                                                 |
|-----------------------|-------------|---------------------------------|-------------------------------------------------------------|
| data                  | any         | -                               | Any data to be viewed                                       |
| theme                 | Base16Theme | Monokai (dark) or Google (light) | (optional) Color theme                                      |
| dark                  | boolean     | false                           | (optional) Dark or Light Theme                              |
| rootNodeName          | string      | "root"                          | (optional)                                                  |
| collapsedStringLength | number      | 5                               | (optional) Number of characters to show on collapsed string |
| defaultOpenLevels     | number      | 1                               | (optional) depth of open nodes @TODO                        |
| maxArrayElements      | number      | 25                              | (optional) Number of array values to show                   |
| maxObjectElements     | number      | 100                             | (optional) Number of object members to show @TODO           |

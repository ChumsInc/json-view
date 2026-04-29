import type {KeyedObject, NumberValue} from "./types";

export const jsonNodeValue = (value:unknown) => {
    try {
        return JSON.stringify(value, undefined, 2);
    } catch(err:unknown) {
        if (err instanceof Error) {
            return err.message;
        }
        return null;
    }
}

export const isNumberNode = (value:unknown|NumberValue):value is NumberValue  => {
    const _type = typeof value;
    return _type === 'number' || _type === 'bigint' || _type === 'boolean';
}

export const isKeyedObject = (value:unknown|KeyedObject):value is KeyedObject => {
    return typeof value === 'object' && value !== null;
}

import type { KeyedObject, NumberValue } from "./types";
export declare const jsonNodeValue: (value: unknown) => string | null;
export declare const isNumberNode: (value: unknown | NumberValue) => value is NumberValue;
export declare const isKeyedObject: (value: unknown | KeyedObject) => value is KeyedObject;

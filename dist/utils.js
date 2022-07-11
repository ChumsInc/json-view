export const nodeType = (value) => {
    const type = typeof value;
    switch (type) {
        case 'object':
            if (value === null) {
                return 'null';
            }
            if (Array.isArray(value)) {
                return 'array';
            }
            return type;
        default:
            return type;
    }
};
export const jsonNodeValue = (value) => {
    try {
        return JSON.stringify(value, undefined, 2);
    }
    catch (err) {
        if (err instanceof Error) {
            return err.message;
        }
        return null;
    }
};
//# sourceMappingURL=utils.js.map
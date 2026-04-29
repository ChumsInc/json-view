const JSONPreview = ({data}:{data: unknown}) => {

    if (Array.isArray(data)) {
        return (<>&hellip;{data.length}</>)
    }
    if (typeof data === 'object' && data !== null) {
        const keys = Object.keys(data);
        const [key1, key2, ...rest] = keys;
        if (rest.length) {
            return <span>{key1}, {key2 ?? null}, &hellip;</span>
        }
        return (
            <span>{key1},{key2 ?? null}</span>
        )
    }
    return (<>{data}</>)
}

export default JSONPreview;

import React from "react";

const JSONPreview = ({data}:{data: any}) => {

    if (Array.isArray(data)) {
        return (<>&hellip;{data.length}</>)
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

export default JSONPreview;

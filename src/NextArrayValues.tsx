import React, {useContext} from "react";
import {JSONViewContext} from "./JSONViewContext";

interface NextArrayValuesProps {
    currentIndex: number,
    maxItems: number,
    onClick: () => void,
}
const NextArrayValues = ({currentIndex, maxItems, onClick}:NextArrayValuesProps) => {
    const {maxArrayElements} = useContext(JSONViewContext);
    return (
        <div className="json-view--node" onClick={onClick}>
            <dt className="json-view--key">[{(currentIndex + 1) * maxArrayElements}&hellip;{maxItems - 1}]</dt>
            <dd className="json-view--value">next</dd>
        </div>
    )
}
export default NextArrayValues;

import React, {useContext} from "react";
import {JSONViewContext} from "./JSONViewContext";

interface PrevArrayValuesProps {
    currentIndex: number,
    onClick: () => void,
}
const PrevArrayValues = ({currentIndex, onClick}:PrevArrayValuesProps) => {
    const {maxArrayElements} = useContext(JSONViewContext);
    return (
        <div className="json-view--node" onClick={onClick}>
            <dt className="json-view--key">[0&hellip;{(currentIndex * maxArrayElements) - 1}]</dt>
            <dd className="json-view--collapsed-array">prev</dd>
        </div>
    )
}

export default PrevArrayValues

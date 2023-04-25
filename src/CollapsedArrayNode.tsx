import React from "react";
import {ArrayValueProps} from "./ArrayNode";
import {PreviewFunction} from "./types";

const defaultPreview: PreviewFunction = (value: any[]) => <>[&hellip;{value.length}]</>

export const CollapsedArrayNode = ({value, preview}: Pick<ArrayValueProps, 'value' | 'preview'>) => {
    const previewFunction = preview ?? defaultPreview;
    return (
        <span className="json-view--collapsed-array">
            {value.length > 0 && (<span>{previewFunction(value)}</span>)}
        </span>
    )
}

export default React.memo(CollapsedArrayNode);

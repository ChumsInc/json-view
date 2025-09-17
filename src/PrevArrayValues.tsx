import {useContext} from "react";
import {JSONViewContext} from "./JSONViewContext";
import StyledNode from "./StyledNode.tsx";
import MoreResultsTitle from "./MoreResultsTitle.tsx";
import MoreResultsLink from "./MoreResultsLink.tsx";

interface PrevArrayValuesProps {
    currentIndex: number,
    onClick: () => void,
}

const PrevArrayValues = ({currentIndex, onClick}: PrevArrayValuesProps) => {
    const {maxArrayElements} = useContext(JSONViewContext);
    return (
        <StyledNode onClick={onClick}>
            <MoreResultsTitle>[0 &hellip; {(currentIndex * maxArrayElements) - 1}]</MoreResultsTitle>
            <MoreResultsLink className="json-view--value">prev</MoreResultsLink>
        </StyledNode>
    )
}

export default PrevArrayValues

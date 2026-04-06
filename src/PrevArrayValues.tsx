import {useContext} from "react";
import {JSONViewContext} from "./JSONViewContext";
import StyledNode from "./StyledNode";
import MoreResultsTitle from "./MoreResultsTitle";
import MoreResultsLink from "./MoreResultsLink";

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

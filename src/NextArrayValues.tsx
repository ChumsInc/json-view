import {useContext} from "react";
import {JSONViewContext} from "./JSONViewContext";
import StyledNode from "./StyledNode";
import MoreResultsTitle from "./MoreResultsTitle";
import MoreResultsLink from "./MoreResultsLink";

interface NextArrayValuesProps {
    currentIndex: number,
    maxItems: number,
    onClick: () => void,
}
const NextArrayValues = ({currentIndex, maxItems, onClick}:NextArrayValuesProps) => {
    const {maxArrayElements} = useContext(JSONViewContext);
    return (
        <StyledNode onClick={onClick}>
            <MoreResultsTitle>[{(currentIndex + 1) * maxArrayElements} &hellip; {maxItems - 1}]</MoreResultsTitle>
            <MoreResultsLink>next</MoreResultsLink>
        </StyledNode>
    )
}
export default NextArrayValues;

/// <reference types="react" />
interface NextArrayValuesProps {
    currentIndex: number;
    maxItems: number;
    onClick: () => void;
}
declare const NextArrayValues: ({ currentIndex, maxItems, onClick }: NextArrayValuesProps) => JSX.Element;
export default NextArrayValues;

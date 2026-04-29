export interface TestData {
    title: string;
    filename: string;
}
export declare const testData: Record<string, TestData>;
export declare const getTestData: (filename: string) => Promise<unknown | null>;

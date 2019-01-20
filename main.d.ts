export default class JoinCSV {
    private csv1;
    private csv2;
    private left1;
    private right1;
    constructor(csv1: string, csv2: string, left1: string, right1: string);
    PerformJoin(RecordCleanFunction?: (nameOfCSV: string, record: any) => void): Promise<JoinedData>;
    convertData2CSV(data: any[], writePath?: string): Promise<string>;
    private parseCSVFile;
}
export interface JoinedData {
    data: any[];
    report: {
        diff: {
            a: any[];
            b: any[];
            a_and_b: any[];
            a_not_in_b: any[];
            b_not_in_a: any[];
        };
        prose: {
            summary: string;
            full: string;
        };
    };
}

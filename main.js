"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const papaparse_1 = require("papaparse");
const fs_1 = require("fs");
let converter = require("json-2-csv");
const joiner = require("joiner");
class JoinCSV {
    constructor(csv1, csv2, left1, right1) {
        this.csv1 = csv1;
        this.csv2 = csv2;
        this.left1 = left1;
        this.right1 = right1;
    }
    PerformJoin(RecordCleanFunction) {
        return __awaiter(this, void 0, void 0, function* () {
            //parse the path to CSV1
            let parsed1 = yield this.parseCSVFile(this.csv1);
            //console.log(parsed1);
            //pass in the name of the CSV to the record cleanup function if cleanup is needed for the file
            if (RecordCleanFunction) {
                //iterate and pass each record back
                for (var record of parsed1) {
                    RecordCleanFunction(this.csv1, record);
                }
            }
            //parse the path to CSV2
            let parsed2 = yield this.parseCSVFile(this.csv2);
            //pass in the name of the CSV to the record cleanup function if cleanup is needed for the file
            if (RecordCleanFunction) {
                //iterate and pass each record back
                for (var record of parsed2) {
                    RecordCleanFunction(this.csv2, record);
                }
            }
            //perform join on cleaned data
            var joinedRecords = joiner({
                leftData: parsed1,
                leftDataKey: this.left1,
                rightData: parsed2,
                rightDataKey: this.right1
            });
            //return cleaned data
            return joinedRecords;
        });
    }
    convertData2CSV(data, writePath) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(function (resolve, reject) {
                converter.json2csv(data, (err, csv) => {
                    if (err) {
                        reject(err);
                    }
                    if (writePath) {
                        fs_1.writeFileSync(writePath, csv);
                    }
                    resolve(csv);
                });
            });
        });
    }
    parseCSVFile(pathToCSV) {
        const file = fs_1.readFileSync(pathToCSV, "utf8");
        return new Promise(function (success, error) {
            papaparse_1.parse(file, {
                header: true,
                complete: results => {
                    success(results.data);
                },
                error: err => {
                    console.log(err);
                    error("Failed to Parse");
                }
            });
        });
    }
}
exports.default = JoinCSV;
//# sourceMappingURL=main.js.map
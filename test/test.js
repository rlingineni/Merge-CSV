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
const main_1 = require("../main");
let converter = require("json-2-csv");
waitForParse();
function waitForParse() {
    return __awaiter(this, void 0, void 0, function* () {
        let csvJoiner = new main_1.default("/Users/raviteja_lingineni/Documents/Projects/JoinCSV/ts/test/test1.csv", "/Users/raviteja_lingineni/Documents/Projects/JoinCSV/ts/test/test2.csv", "num", "id", {
            isFilePath: true
        });
        var result = yield csvJoiner.PerformJoin(cleanUpRecord);
        console.log(JSON.stringify(result.data));
        var csvResult = yield csvJoiner.convertData2CSV(result.data, "test3.csv");
        console.log(csvResult);
    });
}
function cleanUpRecord(csvNumber, record) {
    if (csvNumber == 2) {
        record["property1"] = "my new cleaned value";
    }
}
//# sourceMappingURL=test.js.map
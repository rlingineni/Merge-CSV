import JoinCSV from "../main";
import { stringify } from "querystring";
let converter = require("json-2-csv");

waitForParse();

async function waitForParse() {
	let csvJoiner = new JoinCSV(
		"/Users/raviteja_lingineni/Documents/Projects/JoinCSV/ts/test/test1.csv",
		"/Users/raviteja_lingineni/Documents/Projects/JoinCSV/ts/test/test2.csv",
		"num",
		"id",
		{
			isFilePath: true
		}
	);

	var result = await csvJoiner.PerformJoin(cleanUpRecord);
	console.log(JSON.stringify(result.data));
	var csvResult = await csvJoiner.convertData2CSV(result.data, "test3.csv");
	console.log(csvResult);
}

function cleanUpRecord(csvNumber: number, record: any) {
	if (csvNumber == 2) {
		record["property1"] = "my new cleaned value";
	}
}

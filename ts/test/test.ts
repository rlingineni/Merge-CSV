import JoinCSV from "../main";
import { stringify } from "querystring";
let converter = require("json-2-csv");

waitForParse();

async function waitForParse() {
	let csvJoiner = new JoinCSV(
		"/Users/raviteja_lingineni/Documents/Projects/JoinCSV/ts/test/test1.csv",
		"/Users/raviteja_lingineni/Documents/Projects/JoinCSV/ts/test/test2.csv",
		"num",
		"id"
	);

	var result = await csvJoiner.PerformJoin(cleanUpRecord);
	//console.log(JSON.stringify(result.data));
	var csvResult = await csvJoiner.convertData2CSV(result.data, "test3.csv");
	console.log(csvResult);
}

function cleanUpRecord(name: string, record: any) {
	if (name.includes("test1")) {
		record.prop2 = "my new transformed value";
	}
}

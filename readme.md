# JOIN CSV

Use it to join two CSVs on a single key. Also pass in a function to clean up a record when the data doesn't line up exactly.

Joining is powered by the node [joiner](https://github.com/mhkeller/joiner) library. Take a look at the tests folder for a demo.

**Note:** CSVs must have headers

```typescript
import JoinCSV from "JoinCSV";

let csvJoiner = new JoinCSV(".. path to CSV1", ".. path to CSV 2", "id", "anotherId", true); //last option is if the CSV is a path to a file or not
var result = await csvJoiner.PerformJoin();
console.log(result);
```

### Custom Record Manipulation

You can also clean up the data records by passing in a record cleaning up function. Just manipulate the record object so that the data is cleaned when joining. This is run before the join occurs.

```typescript
//number gives the first or second csv
//record is the json csv record pertaining to that file, just manipulate it and clean your data.

var result = await csvJoiner.PerformJoin(cleanUpRecord);

function cleanUpRecord(csvNumber: number, record: any) {
	if (csvNumber == 2) {
		record["property1"] = record["property1"] + "my new cleaned value";
	}
}
```

### Output to CSV

Write your files back to CSV to get a final merged dataset.

```javascript
var csvResult = await csvJoiner.convertData2CSV(result.data, "test3.csv");
```

Post an issue if you need help, or open a PR to make enhancements. Take a look at the test folder for a demo program.

#CSVJOIN

Use it to join two CSVs on a single key

Joining is powered by the [joiner](https://github.com/mhkeller/joiner) library.

```
import JoinCSV from "JoinCSV";

    let csvJoiner = new JoinCSV(
		".. path to CSV1",
		".. path to CSV 2",
		"Key in CSV1",
		"Key in CSV2"
	);

	var result = await csvJoiner.PerformJoin(cleanUpRecord);
	console.log(result);
```

You can also clean up the data records by passing in a record cleaning up function. Just manipulate the record object so that the data is cleaned when joining.

```
//name is the path of the csv and record is the json csv record pertaining to that file

 function cleanUpRecord(name: string, record: any) {
	if (name.includes("mycsv1")) {
		record.name = record.name + "extra stuff";
	} else {
	}

```

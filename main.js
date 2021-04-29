function main() {

	// Null check validation
	if (process.argv.length == 2){ 
		console.log("Please enter valid numbers");
	}
	var args = process.argv.slice(2);
	var result;


	for (var i = 0; i <= args.length - 1 ; i++) {
		currStr = printNumToString(args[i]);
		if(i == 0)
			result = currStr;
		else
			result = result + "," + currStr;
	}
  console.log(result);
}

/**
* Creates new function to print Number to String
* param: Number (Integers)
* return Converted String
**/

function printNumToString(num){
	var arr = ["Zero","One", "Two","Three","Four","Five","Six","Seven","Eight","Nine"];
	var str = "";
	if(num == 0){
  	return arr[0];
  }
	while(num >0){
		rem = num % 10;
		num = Math.floor (num / 10);
		str = arr[rem] + str;
	}
	return str;
}


if (require.main === module) {
  main();
}
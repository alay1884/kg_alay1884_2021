function main() {
  console.log("Hello world");
  var num = 21;
  
  print(num); 
}

function print(num){
	var arr = ["zero","one", "two","three","four","five","six","seven","eight","nine"];
	var str = "";
	if(num == 0){
  	console.log(arr[0])
  	return;
  }
	while(num >0){
		rem = num % 10;
		num = Math.floor (num / 10);
		str = arr[rem] + str;
	}
	console.log(str);
	console.log("hi");
}



if (require.main == module) {
  main();
}
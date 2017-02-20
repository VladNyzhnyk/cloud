var age;
do {
 age = +prompt("vvedite vozrast: ");
} while(isNaN (age));

var otvet = getAgeInfo(age);
alert (otvet);
function getAgeInfo(age) {
	if (age < 20 ) {
		 return "vu molodoy";
	}
	else if (age > 40) { 
	 	return "vu vzroslbIu";
	 }
	 else {
	 	return "vu zreluu";
	 }

}
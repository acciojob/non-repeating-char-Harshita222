function firstNonRepeatedChar(str) {
 // Write your code here
	str = str.toLowerCase();
	if (str === ""){
		return null;
	}
	for (let i = 0; i < str.length; i++) {
		let char = str[i]
	if (str.indexOf(char)=== str.lastIndexOf(char)) {
		return char
	}
		}
	return null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

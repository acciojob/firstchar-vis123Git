function firstChar(text) {
	for (let i = 0; i < text.length; i++) {
	  let str =  text.charAt(i)
		if(str != " " ){
		
			return str
		}
	}
	return ""
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));

function toCase(text) {
  // write your code here
	let str=""
	for(let i=0;i<text.length;i++){
		if(text.charCodeAt(i)>=65 && text.charCodeAt(i)<=91)
			str+=String.fromCharCode(text.charCodeAt(i)+32)
			else
			str+=text.charAt(i)
	}
	str+="-"
	for(let i=0;i<text.length;i++){
		if(text.charCodeAt(i)>=97 && text.charCodeAt(i)<=123)
			str+=String.fromCharCode(text.charCodeAt(i)-32)
			else
			str+=text.charAt(i)
	}
	return str
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));

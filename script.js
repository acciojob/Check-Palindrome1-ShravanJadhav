// complete the given function

function palindrome(str){
    let l = 0;
	let r= str.length;

	while(l<r){
		if(str[l]!=str[r])
			return false;
	}
	return true;
	
}
module.exports = palindrome

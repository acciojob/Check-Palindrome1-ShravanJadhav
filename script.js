// complete the given function

function palindrome(str){
 //    let l = 0;
	// let r= str.length;

	// while(l<r){
	// 	if(str[l]!=str[r])
	// 		return false;

	// 	l++;
	// 	r--;
	// }
	// return true;

	str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // Check if the string is a palindrome
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      return false;
    }
  }

  return true;
}
module.exports = palindrome

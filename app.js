

function reverseString (str)
{

    var listOfChar = str.split('');

    var reverseListOfChar = listOfChar.reverse();

    var reversedChar = listOfChar.join('');

    return reversedChar;

}

function isPalindrome(str)
{

var reversed = reverseString(str);

if(str === reversed)
{
    return true;
}
else
{
   return false;
}

}





console.log(isPalindrome("hiih"));
console.log(isPalindrome('gone'));
console.log(isPalindrome("lol"));
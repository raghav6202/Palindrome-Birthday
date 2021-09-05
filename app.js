

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

function numberToString(date)

//conversion of number data type to string data type.
{

    var dateStr = {day:" " , month:" " , year:" "}

    if(date.day < 10)
    {

        dateStr.day = '0' + date.day;


    }

    else
    {

        dateStr.day = date.day.toString();

    }


    if(date.month < 10)
    {

        dateStr.month = '0' + date.month;


    }

    else
    {

        dateStr.month = date.month.toString();

    }


    dateStr.year =date.year.toString();


    return dateStr;

}

var date = {

    day:25,
    month:10,
    year:2020
}
console.log(numberToString(date));
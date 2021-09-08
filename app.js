

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

function numberToString(date)                 //helper function

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


function getAllFormats (date) //converts to different formats
{

    var dateStr = numberToString(date) ;   //using helper function

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month+ dateStr.day ;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);  // we need only the last two digits of yyyy
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month+ dateStr.day ;

    return  [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy, yymmdd];


}

function checkPalindromeForAllFormats(date)
{
    var listPalindrome = getAllFormats(date);

    // default
    var flag = false;

    for(var i=0 ; i<listPalindrome.length ;i++){
if(isPalindrome(listPalindrome[i]))

{
    var flag = true;
  break;
}

    }

    return flag;
}



function isLeapYear (year)
{

    if(year % 400 === 0)
    {
return true;
    }
    if(year % 100 === 0)
    {
        return false;
    }

    if(year % 4 === 0)
    {
        return true;
    }

    else
    {

        return false;
    }
}

function getNextDate (date)
{
var day = date.day + 1; //day increment
var month = date.month;
var year = date.year;

var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];





if(month === 2)
//february 
{
    if(isLeapYear(year))
    {
        if(day > 29)
        {
            day = 1;
            month++
        }
    }

    else
    {

        if(day > 28)
        {
            day = 1;
            month++;
        }
    }


}
else
{

if(day > daysInMonth[month - 1]) //month increment if allthe days in the month are completed
{

    day = 1;
    month++
}
}

if(month > 12)
{
month = 1;
year++;

}

return {
    day: day,
    month: month,
    year: year
  };
}

function getNextPalindrome(date)
{

    var howFarPalinDate = 0;
    var nxtDate = getNextDate(date);

    while(1)
    {

        howFarPalinDate++;
        var isItPalindrome = checkPalindromeForAllFormats(nxtDate);
        if(isItPalindrome)
        {
            break;
        }
        else
        {
            nxtDate = getNextDate(nxtDate);
        }
    }

    return[howFarPalinDate,nxtDate];
}


function getPreviousDate (date)
{

    var day = date.day - 1;  //0
    var month = date.month;  
    var year = date.year;  

    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

    if(day === 0)
    {
        month--;  //2
        if(month === 0 )
        {
            day = 31;
            month = 12;
            year--;
        }
    
        else if(month === 2)
        {
            if(isLeapYear(year))
            {
                
                day = 29;
             
            }

            else
            {
                
                day = 28;
             
            }
            
        }
    

        else
        {
            day = daysInMonth[month - 1]; // used during first day of other months
        }
    }

    return {
        day:day,
        month:month,
        year:year
    }
    

}




function getPreviousPalindrome (date)
{

    var howFarPalinDate = 0;
    var prevDate = getPreviousDate(date);


while(1)
    {

        howFarPalinDate--;
        var isItPalindrome = checkPalindromeForAllFormats(prevDate);
        if(isItPalindrome)
        {
            break;
        }
        else
        {
            prevDate = getPreviousDate(prevDate);
        }
    }

    return[howFarPalinDate,prevDate];


}



var dateInput = document.querySelector('#date-input');

var checkButton = document.querySelector('#check-btn');

var outputDisplay = document.querySelector('#display-output');

function clickHandler()
{

var bdayStr = dateInput.value; //assigning variable to date input

if(bdayStr !== '')
{

    var listOfDate = bdayStr.split("-");

    var date = {

        day:listOfDate[2], //assign day,month,year to the elements listOfDate year.
        month:listOfDate[1],
        year:listOfDate[0]
    }

    var isItPalindrome = checkPalindromeForAllFormats(date);

    if(isItPalindrome)
    {
showMessage("Congratulations your Birthday is a Palindrome")

    }

}

}

checkButton.addEventListener('click', clickHandler);

function showMessage(display)
{

    outputDisplay.innerText = display;

}
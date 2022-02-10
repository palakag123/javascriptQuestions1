function findNumberOfDigits(number)
{
    let lenghtNumber=0;
    while(number > 0)
        {
            r = Math.round(n%10);
            number = Math.floor(number/10);
            lenghtNumber += 1;
        }
        return lenghtNumber;
}

function findArmstrong(num)
{
    let setOfArmstrong = [];
    for (i = 0; i <= num; i++)
    {   
        n=i;
        let sum=0;
        let numberOfDigits=findNumberOfDigits(i);
        while(n > 0)
        {
            lastDigit = Math.round(n%10);
            sum += Math.pow( lastDigit,numberOfDigits );
            n = Math.floor(n/10);
        }
        if (sum === i)
        {
            setOfArmstrong.push(sum)
        }
        else
            continue;
    }
    return setOfArmstrong;
}
ans = findArmstrong(1700);
console.log(ans);
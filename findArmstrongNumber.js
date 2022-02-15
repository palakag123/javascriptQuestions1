function findNumberOfDigits(number){
    if(number === undefined)
        throw new Error('no number input');
    if(number < 0)
        throw new Error('negative numbers not valid input');
    let lenghtNumber=0;
    while(number > 0){
            number = Math.floor(number/10);
            lenghtNumber += 1;
        }
        return lenghtNumber;
}

function findArmstrong(num){
    if(num === undefined)
        throw new Error('no number input');
    if(num < 0)
        throw new Error('negative numbers not valid input');
    let temp;
    let setOfArmstrong = [];
    for (index = 0; index <= num; index++)
    {   
        temp = index;
        let sum = 0;
        let numberOfDigits = findNumberOfDigits(index);
        while(temp > 0)
        {
            lastDigit = Math.round(temp % 10);
            sum += Math.pow( lastDigit, numberOfDigits );
            temp = Math.floor(temp/10);
        }
        if (sum === index){
            setOfArmstrong.push(sum)
        }
    }
    return setOfArmstrong.toString();
}
ans = findArmstrong(1700);
console.log(ans);

module.exports={
    findArmstrong,
    findNumberOfDigits
}
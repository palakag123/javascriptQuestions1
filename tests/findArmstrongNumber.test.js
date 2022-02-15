//function findNumberOfDigits

const a = require('../findArmstrongNumber.js');

describe('find number of digits function', function(){
    it('should give number of digits in the number', function(){
        const numberOfDigits = a.findNumberOfDigits(20);
        expect(numberOfDigits).toBe(2);
    })
    it('should throw invalid input error if negative integer', function(){
        expect(()=>{a.findNumberOfDigits(-23)}).toThrow('negative numbers not valid input');
    });
    it('should return invalid input if no number input', function(){
        expect(()=> {a.findNumberOfDigits()}).toThrow('no number input')
    });
});

describe( 'find Armstrong numbers function', function(){
    it('should return array of armstrong number upto a range', function(){
        const arrayOfArmstrong = a.findArmstrong(1700);
        expect(arrayOfArmstrong).toBe('0,1,2,3,4,5,6,7,8,9,153,370,371,407,1634');
    })
    it('should return invalid input if no number input', function(){
        expect(()=> {a.findArmstrong()}).toThrow('no number input')
    });
    it('should throw invalid input error if negative integer', function(){
        expect(()=>{a.findNumberOfDigits(-23)}).toThrow('negative numbers not valid input');
    });
})


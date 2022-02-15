//Find out if there are repeating words in a given sentence. Make sure to do this in O(n) time.
//Create a function that takes a sentence as input
function findRepeatingWords(sentence, delimiter=" "){
    if (sentence === undefined)
        throw new Error('no sentence input');
    if(typeof(sentence)!== 'string')
        throw new Error('sentence is not a string');

    let countOfWords = {};
    let splitSentence=sentence.split(delimiter);
    for(i=0; i<splitSentence.length;i++)
    {
        if (countOfWords[splitSentence[i]]){
            console.log("There are repeating words");
            return true;
        }
            countOfWords[splitSentence[i]]=1;
    }
    return false;
}

findRepeatingWords("hi hi how are you", " ");
module.exports = {repeatingWords:findRepeatingWords};
//Find out if there are repeating words in a given sentence. Make sure to do this in O(n) time.
//Create a function that takes a sentence as input
function findRepeatingWords(sentence, delimiter){
    let countOfWords = {};
    let splitSentence=sentence.split(delimiter);
    for(i=0; i<splitSentence.length;i++)
    {
        if (countOfWords[splitSentence[i]]){
            console.log("There are repeating words");
            return;
        }
            countOfWords[splitSentence[i]]=1;
    }
}

findRepeatingWords("hi hi how are you", " ");
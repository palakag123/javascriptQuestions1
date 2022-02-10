//Find out if there are repeating words in a given sentence. Make sure to do this in O(n) time.
//Create a function that takes a sentence as input
function findRepeatingWords(sentence)
{
    let count = {};
    let splitSentence=sentence.split(" ");
    for(i=0; i<splitSentence.length;i++)
    {
        if (count[splitSentence[i]])
            count[splitSentence[i]] += 1;
        else
            count[splitSentence[i]]=1;

    }
    let val = Object.values(count);

    for(key in count)
    {
        if(count[key] > 1)
        {
            return true
        }
    }
    return false;

    
}

console.log(findRepeatingWords("how are you hi"));
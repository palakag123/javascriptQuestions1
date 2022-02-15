const obj = require('../repeatingWords.js');

describe('repeatingWords function', function() {

    it('should return true if repeating words present', function() {
        const result = obj.repeatingWords("hi hi how are you", " ");
        expect(result).toBe(true);
    });
    it('should return false if no repeating words present', function() {
        const result = obj.repeatingWords("hi how are you", " ");
        expect(result).toBe(false);
    });
    it('should cosider " " as delimiter if not specified', function() {
        const result = obj.repeatingWords("hi hi how are you");
        expect(result).toBe(true);
    });
    it('should throw error if no sentence input', function() {
        try{ 
            obj.repeatingWords();
        }
        catch(err){
            expect(err.message).toBe('no sentence input');
        }
    });
    it('should throw error if sentence not a string', function() {
        expect(()=>obj.repeatingWords(788)).toThrow('sentence is not a string');
    });

})
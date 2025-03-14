import words from 'an-array-of-english-words';

/**
 * Finds all possible words that can be formed from a given set of letters
 * @param letters The letters to use for forming words
 * @param useExactlyOnce Whether to use each letter exactly once
 * @param minLength Minimum length of words to include
 * @returns An array of words sorted alphabetically
 */
function findWords(letters: string, useExactlyOnce: boolean = false, minLength: number = 1): string[] {
  // Convert letters to lowercase and create a character frequency map
  const lettersLower = letters.toLowerCase();
  const letterMap: Record<string, number> = {};
  
  for (const char of lettersLower) {
    letterMap[char] = (letterMap[char] || 0) + 1;
  }
  
  // Filter the dictionary to find valid words
  const validWords = words.filter(word => {
    // Skip words that are too short
    if (word.length < minLength) return false;
    
    // Skip words that are too long
    if (useExactlyOnce && word.length !== letters.length) return false;
    if (!useExactlyOnce && word.length > letters.length) return false;
    
    // Create a copy of the letter frequency map
    const letterMapCopy = { ...letterMap };
    
    // Check if the word can be formed using the available letters
    for (const char of word.toLowerCase()) {
      if (!letterMapCopy[char] || letterMapCopy[char] === 0) {
        return false;
      }
      letterMapCopy[char]--;
    }
    
    // If we need to use all letters exactly once, check that all letters were used
    if (useExactlyOnce) {
      for (const char of lettersLower) {
        if (letterMapCopy[char] !== 0) {
          return false;
        }
      }
    }
    
    return true;
  });
  
  // Sort the valid words alphabetically
  return validWords.sort();
}

/**
 * Main function to find words from the given letters
 */
function main(): void {
  // Get letters from command line arguments or use default "tabind"
  const letters = process.argv[2] || "tabind";
  
  console.log(`Using letters: "${letters}"\n`);
  
  // Find words that use exactly the given letters once
  const exactWords = findWords(letters, true);
  
  console.log(`Found ${exactWords.length} words using exactly the letters "${letters}" once:`);
  exactWords.forEach(word => console.log(word));
  
  // Find all possible words from the given letters (at least 3 letters)
  const allWords = findWords(letters, false, 3);
  
  console.log(`\nFound ${allWords.length} words (3+ letters) that can be formed from the letters "${letters}":`);
  allWords.forEach(word => console.log(word));
}

main(); 
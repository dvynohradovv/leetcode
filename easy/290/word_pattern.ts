function wordPattern(pattern: string, s: string): boolean {
  let letterToWord: Record<string, string> = {};
  let wordToLetter: Record<string, string> = {};

  let words: string[] = s.split(" ");
  if (pattern.length != words.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    let letter: string = pattern[i];
    let word: string = words[i];
    if (
      (letterToWord.hasOwnProperty(letter) && letterToWord[letter] != word) ||
      (wordToLetter.hasOwnProperty(word) && wordToLetter[word] != letter)
    ) {
      return false;
    }

    letterToWord[letter] = word;
    wordToLetter[word] = letter;
  }

  return true;
}

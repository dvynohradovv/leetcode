function canConstruct(ransomNote: string, magazine: string): boolean {
  let magazineCharToCount: Record<string, number> = {};
  for (const char of magazine) {
    magazineCharToCount[char] = (magazineCharToCount[char] || 0) + 1;
  }

  for (const char of ransomNote) {
    if (!magazineCharToCount[char]) {
      return false;
    }
    magazineCharToCount[char]--;
  }

  return true;
}

function isPalindrome(s: string): boolean {
  let clean_s: string = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let reversed_clean_s: string = clean_s.split("").reverse().join("");

  return clean_s == reversed_clean_s;
}

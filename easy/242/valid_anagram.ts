import { createHash } from "crypto";

// With HASH idea
function isAnagram1(s: string, t: string): boolean {
  function hashArray(arr: any[]): string {
    const hash = createHash("sha256");
    hash.update(JSON.stringify(arr));
    return hash.digest("hex");
  }
  if (s.length != t.length) return false;

  let sHash: string = hashArray(s.split("").sort());
  let tHash: string = hashArray(t.split("").sort());

  return sHash == tHash;
}

// With Dict idea
function isAnagram2(s: string, t: string): boolean {
  if (s.length != t.length) return false;

  let sMap: Record<string, number> = {};
  let tMap: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {
    sMap[s[i]] = (sMap[s[i]] || 0) + 1;
    tMap[t[i]] = (tMap[t[i]] || 0) + 1;
  }

  for (const key of Object.keys(sMap)) {
    if (sMap[key] !== tMap[key]) {
      return false;
    }
  }
  return true;
}

// Increment and decrement idea
function isAnagram3(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const charCount: Record<string, number> = {};
  for (let i = 0; i < s.length; i++) {
    charCount[s[i]] = (charCount[s[i]] || 0) + 1;
    charCount[t[i]] = (charCount[t[i]] || 0) - 1;
  }

  return Object.values(charCount).every((count) => count === 0);
}

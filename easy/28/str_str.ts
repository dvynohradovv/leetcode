function strStr(haystack: string, needle: string): number {
  let n: number = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle[n]) {
      if (n == needle.length - 1) {
        return i - n;
      }
      n++;
    } else {
      i -= n;
      n = 0;
    }
  }
  return -1;
}

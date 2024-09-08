function isSubsequence(s: string, t: string): boolean {
  // is s subsequence of t
  let s_ind: number = 0;
  for (let i: number = 0; i < t.length; i++) {
    if (t[i] == s[s_ind]) {
      s_ind++;
    }
    if (s_ind >= s.length) {
      return true;
    }
  }

  return s_ind >= s.length;
}

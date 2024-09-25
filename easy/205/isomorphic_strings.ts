function isIsomorphic(s: string, t: string): boolean {
  let sVal2tVal: Record<string, string> = {};
  let tVal2sVal: Record<string, string> = {};

  for (let i = 0; i < s.length; i++) {
    let sVal: string = s[i];
    let tVal: string = t[i];
    if (
      (sVal2tVal[sVal] && sVal2tVal[sVal] !== tVal) ||
      (tVal2sVal[tVal] && tVal2sVal[tVal] !== sVal)
    ) {
      return false;
    }

    sVal2tVal[sVal] = tVal;
    tVal2sVal[tVal] = sVal;
  }
  return true;
}

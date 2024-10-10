function romanToInt(s: string): number {
  const romanToInteger: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum: number = 0;
  let last: number = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const curr = romanToInteger[s[i]];
    if (curr >= last) {
      sum += curr;
    } else {
      sum -= curr;
    }
    last = curr;
  }

  return sum;
}

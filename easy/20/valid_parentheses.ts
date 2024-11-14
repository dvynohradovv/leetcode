function isValid(s: string): boolean {
  const brackets: Record<string, string> = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  let stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    let b: string = s[i];
    if (b in brackets) {
      stack.push(b);
      continue;
    }

    if (stack.length == 0) return false;

    if (b == brackets[stack[stack.length - 1]]) stack.pop();
    else return false;
  }

  return stack.length == 0;
}

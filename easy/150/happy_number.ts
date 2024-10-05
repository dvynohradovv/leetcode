function isHappy(n: number): boolean {
  let cacheSet = new Set<number>();

  while (n != 1) {
    if (cacheSet.has(n)) {
      return false;
    }
    cacheSet.add(n);

    let newN: number = 0;
    for (let num of n.toString()) {
      newN += Number(num) * Number(num);
    }
    n = newN;
  }

  return true;
}

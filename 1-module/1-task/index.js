function factorial(n) {
  let res = n;
  while(n > 1) {
    res  = res * (n-1);
    n = n - 1;
  }
  if (n == 0) return 1;
  return res;
}

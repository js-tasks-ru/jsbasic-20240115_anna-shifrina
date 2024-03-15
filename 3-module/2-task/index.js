function filterRange(arr, a, b) {
  let result = [];
  for(let user of arr) {
    if(typeof user === "number" && (a <= user) && (user <= b)) {
      result.push(user);
    }
  }
  return result;
}

function namify(users) {
  let result = [];
  for (let user of users) {
    result.push(user.name);
  }
  return result;
};

class UserStorage {
  login(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "hur" && password === "01") ||
          (id === "heo" && password === "02")
        ) {
          resolve(id);
        }
        else {
          reject(new Error("User not found"));
        }
      }, 1000);
    });
  }

  getRole(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'hur') {
          resolve({ name: 'jin', role: 'admin' });
        } else if (user === 'heo') {
          resolve('huhuhu');
        }
        else {
          reject(new Error("role error"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = "hur";
const password = "01";
const funk = (user) => {
  alert(`${user} is logged in`)
};
userStorage.login(id, password)
  // .then((user) => userStorage.getRole(user))
  // return 생략시 반드시  {} 는 생략되어야함.
  .then((user) => { return userStorage.getRole(user) }

    // funk(user)
  )
  .then((user) => alert(`your name is ${user.name}, your role is ${user.role}`))
  .catch(console.log)

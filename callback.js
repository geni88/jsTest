class UserStorage {
  login(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (id === "hur" && password === "01") {
        onSuccess(id)
      } else {
        onError(new Error('error'))
      }
    }, 2000);
  };

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "hur") {
        onSuccess({ name: 'jin', roles: "admin" })
      } else {
        onError(new Error('error'))
      }
    }, 2000);
  }
}

const userStorage = new UserStorage();
const id = "hur";
const password = "01";
userStorage.login(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userole) => {
        alert(`your name is ${userole.name} your roles is ${admin}`)
      },
      () => { console.log(error); }
    )
  }
)
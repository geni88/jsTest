class UserStorage {
  login(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((id === "hur" && password === "01") ||
          (id === "heo" && password === "02")
        ) { resolve(user) }
        else {
          reject(new Error("User not found")
          )
        }
      }, 1000)
    })
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'hur') {
          resolve({ name: jin, role: admin })
        } else {
          reject(new Error("role error")
        }
      })
    })
  }

  login(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (id === 'hur' && password === "01") {
        onSuccess(id)
      } else {
        onError(new Error('login error'))
      }
    }, 1000);
  };

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'hur') {
        onSuccess({ name: 'jin', roles: "admin" });
      } else {
        onError(new Error('error'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = 'hur';
const password = "01";
// userStorage.login(
//   id,
//   password,
//   (user) => {
//     userStorage.getRoles(
//       user,
//       (userole) => {
//         alert(`your name is ${userole.name} 🤣 your roles is ${userole.roles}`)
//       },
//       (error) => { console.log('role error') }
//     )
//   },
//   (error) => { console.log('id error') }
// )

const userData = new Promise((resolve, reject) => {
  userStorage.login(
    id,
    password,
    (user) => { resolve(user) },
    (error) => { console.log(error) }
  )
}
)
userData
  .then((user) => {
    userStorage.getRoles(
      user,
      (userole) => {
        alert(`your name is ${userole.name} 🤣 your roles is ${userole.roles}`)
      },
      (error) => { console.log(error) }
    )
  })
  .catch((error) => { console.log(error) }
  );
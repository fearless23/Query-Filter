const {Query} = require("./classBased")
const {transform} = require("./fnBased")
const {users} = require("./data")

console.info("USERS\n")
console.table(users)

const query = {
  city: { eq:"==", val: "Delhi"},
  age:  {eq:"<", val: 40},
}
console.info("QUERY\n")
console.table(query)


const filteredUsers = transform(users,query)
console.table(filteredUsers)


const xx = new Query(users)


const filteredUsers2 = xx
.where("city", "==", "Delhi")
.where("age", "==", 21)
.users

console.table(filteredUsers2)
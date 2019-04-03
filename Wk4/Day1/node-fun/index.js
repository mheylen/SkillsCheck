const data = require("./users.json");

function readAllUsers() {
return data;
}
console.log(data)

const userID = (id) => {
   return data.filter(user => user.id === id) [0];
    }
    console.log(userID(6))

const userEmail = (email) => {
    return data.filter(user => user.email === email) [0]
    }
    console.log(userEmail('lcollishaw2@google.com'));

    const userGmail = () => {
   return data.filter(user => user.email.includes('google'))
    }
    console.log(userGmail());


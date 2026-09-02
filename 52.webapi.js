// Web storage API -- allows us to store & read data in browser
// Web storage API -- localStorage, sessionStorage

// localStorage -- store, read, update and remove data
// no expiry date: data never gets lost even if you close the browser
//localstorage store data as key value pair --- string
// setItem(key,value)
localStorage.setItem("Username", "Faysal Ahmed Ramim")
localStorage.setItem("Password", "12345  ")
// getItem (key)
// const username = localStorage.getItem("Username");
// const userpassword = localStorage.getItem("Password");
// console.log(username, userpassword);
//update
localStorage.setItem("Username", "Faysal Faiz");
localStorage.setItem("Password", "12345  ")
const username = localStorage.getItem("Username");
const userpassword = localStorage.getItem("Password");
//console.log(username, userpassword);

//remove
localStorage.removeItem("Username");
localStorage.removeItem("Password");

//console.log(username, userpassword);

// Again 
const countries = ["bangladesh","nepal"];
localStorage.setItem("countries",JSON.stringify(countries));
// getItem
 const countrieslist = JSON.parse(localStorage.getItem("countries"));
 console.log(countrieslist);
 localStorage.clear();
//localstorage vs session storage
// 10 mb vs 5mb
// permanent vs session (tab)
sessionStorage.setItem("user", "Ramim");
const username = sessionStorage.getItem("user");
console.log(username);
//sessionStorage.clear();

const userperson = {id : "101", name : "Faysal"};
sessionStorage.setItem("userperson",JSON.stringify(userperson));
const userinfo = JSON.parse(sessionStorage.getItem("userperson"));
console.log(userinfo);
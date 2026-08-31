var names = new Array();
names[0] = "Faysal";
names[1] = "Ahmed";
names[2] = "Ramim";
names[3] = "Faiz";
names[4] = "Nil";
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log(names.length);
names.push("Halima");
console.log(names.length);
console.log(names);
names.push("Nur Islam");
console.log(names);
names.pop();
names.pop();
console.log(names);
console.log(names.length);
//var names = [.........]  we can also make this
//push and pop just use as normal vector/array
var country1 = ["Bangladesh", "India"];
var country2 = ["pakistan", "Nepal"];
var country = country1.concat(country2)
console.log(country);
console.log(country.length);
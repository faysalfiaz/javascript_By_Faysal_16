// object store multiple value
// var student1 = {
//     name : "Faysal Ahmed Ramim",
//     age : 22,
//     cgpa : 3.22,
//     lang : ["Bangali","Hindi","English"]
// }
// console.log(student1.lang);

function Student(name, age, cgpa, lang) {
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    this.display = function () {
       console.log(this.name);
       console.log(this.age); 
       console.log(this.cgpa);
       console.log(this.lang);

    }
}
var student1 = new Student("Faysal Ahmed Ramim", 22, 3.22, ["Bangali", "Hindi", "English"]);
var student2 = new Student("Faiz", 23, 3.12, ["Hindi", "English"]);

student1.display();
student2.display();
// console.log(student1.name);
// console.log(student2.name);
var names = ["Faysal","Ramim","Ahmed"];
console.log(names);
// shift use for pop value from front;;
names.shift();
console.log(names);

// unshift use push value in front of array
names.unshift("Halima");
console.log(names);
// splice use for add and remove 
// here 2 is number of position where we want to add,0 is the position is delete,
names.splice(2,0,"karim","Rahim");
console.log(names);
names.splice(1,2);
console.log(names);
//remove value from front 
// it is donot change the actual Array
// here sort function works with alphabate just 
var newArray = names.slice(1);
console.log(newArray);

// sort array
var sortednames= names.sort();
console.log(sortednames);
// we can also reverse using funcation

//sort numbers
var numbers = [20,1,50,45,12];
numbers.sort(function(a,b){
    return a-b;
});

// if we want to sort as reverse  we have to do just b-a
console.log(numbers);
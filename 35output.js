
var Ul = new Array();
var sum = 0;
for( var i = 0; i<5 ; i++)
{
    Ul[i] = parseInt(prompt("Enter a number :"));
  

}
for( var i = 0; i<Ul.length ; i++)
{
    
    sum = sum + Ul[i];
  

}
console.log("The sum is : " +sum);
console.log(Ul.length);
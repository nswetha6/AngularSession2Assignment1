# AngularSession2Assignment1

//1. Create a FAT ARROW function which will take parameters of string and number

var function1 = (s1:string, n1:number) => console.log("this function has parameters string and number --> "+s1 +" and "+n1);
function1("String Swetha",6);

//2. The function should be of type string.
function function2():string{
    console.log("funciton2 is of type string");
    return "abc";
}
var x= function2();
console.log(x);


// 3. The function should return the value with the string and number then create
// function.html, add compiled file into this HTML like(function.js). The output should
// display as string and number message.

function function4(s2:string,n2:number):any{
     // return "string is "+s2 + "number is "+ n2;
      return `string passed --> ${s2} 
      and number passed --> ${n2}`;
  }
var y= function4("Some String", 6);
//alert("testing");
document.getElementById("test").innerHTML= y;





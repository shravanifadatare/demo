//if else 
let mark = 35;
if ( mark >= 35 ) {
    console.log("pass");
} else {
    console.log("fail");
}

//if else ladder
let grade = 67;
if(grade >= 90) {
    console.log("grade a")
} else if(grade >= 75) {
console.log("grade b");
}  else if(grade >= 55) {
console.log("grade c");
}  else if(grade <= 35) {
console.log("fail");
}

//switch statement
let dept = "co";
switch (dept) {
    case "co":
        console.log("co");
        break;
    case "mech":
        console.log("mech");
        break;
    case "IT":
        console.log("IT"); 
        break;
    default:
        console.log("just another dept");   
}
let attendance = 85
let status = (attendance >= 75) ? "eligible for exam" : "not eligible for exam";
console.log(status)

//for loop 

for (let i = 0; i <= 20; i++){
    console.log(i);   
}
//while loop
let i = 2
while(i <= 20) {
    console.log(i);
    i = i+ 2;
}

//do while 
let i1 = 1;
do{ 
    console.log(i1);
    i1++;
} while (i1 <= 10);
console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 0; i <= 100; i++){
    if(i % 2 != 0){
        console.log(i)
    }
}
let num = 1;
console.log("While loop");
while (num <= 100){
    if (num % 2 != 0){
        console.log(num);
    }
    num++;
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let i = 0; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(`${i} FizzBuzz`);
    }
    else if(i % 3 == 0){
        console.log(`${i} Fizz `);
    }
    else if(i % 5 == 0){
        console.log(`${i} Buzz`);
    }
}

console.log(`Do/While FizzBuzz`)
let i = 1;
do{
    if(i % 3 == 0 && i % 5 == 0){
        console.log(`${i} FizzBuzz`);
    }
    else if(i % 3 == 0){
        console.log(`${i} Fizz`);
    }
    else if(i %5 == 0){
        console.log(`${i} Buzz`);
    }
    else{
        console.log(i);
    }

    i++;

}while( i <= 100)


//exercise 4
let value = Math.round((Math.random() * 500)); 
let n = Math.round(Math.random() * (500 - 100) + 100);
console.log(`${value} This is value`);
for(var x = 0; x <= n; x++){
    if(x == value){
        console.log(`${x} found value!`);
    }
 } 
    console.log(`n = ${n}`) 
    console.log(`i = ${x}`) 
    if(x != value){
        console.log("value not found");
    }
    


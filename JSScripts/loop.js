let num = 11
if (num % 2 == 0) {
    console.log(`num :=${num} is even`);
}
else if (num % 2 == 1) {
    console.log(`num:=${num} is odd`);
}
else {
    console.log(`num:=${num} not a number`);
}
console.log(" Ternary Operation...");
(num % 2 == 0) ? console.log(`num :=${num} is even`) : console.log(`num:=${num} is odd`);

console.log(" While Loop...");
let q = 0
while (q < 10) {
    console.log(q);
    q++;
}

console.log(" For Loop...");
for (let nm = 0; nm < 10; nm += 2) {
    console.log(nm);
    if (nm > 6)
        break;
}
console.log(" For Continue..");
for (let j = 0; j < 5; j++) {
    if (j % 2 == 0) {
        continue
    }
    console.log(j);

}
console.log(" comma..");
let x=10
let y=(++x,x++)
console.log(x,y);


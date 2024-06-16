let stud = {
    id: "122250",
    ph: [1987, 1567]
}
function studPrint(studData) {
    console.log(`Student detail: id=${stud.id}`);

}
studPrint(stud)

function studPrintN(cnt = 3) {
    for (let i = 0; i < cnt; i++) {
        console.log(i);
    }

}
studPrintN()
console.log("============================");
function add() {
    let sum = 0
    for (let n = 0; n < arguments.length; n++) {
        sum += arguments[n];
    }
    return sum;
}
console.log(add(1, 2, 3, 4, 5));
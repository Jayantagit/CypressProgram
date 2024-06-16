let hello = () => {
    console.log("Hello");
}
hello()

let studarr = [2, 9, 8, 7, 4, true, { name: "j", age: 30 }]

for (s of studarr)
    console.log(s);

let lenarr = studarr.length
console.log(JSON.stringify(studarr[lenarr - 1]));
studarr.pop()
studarr.push("pV")
studarr.unshift("Jayanta")
console.log(studarr);

console.log("===========Object===============");
let person = { name: "jayanta", gender: "male", isActive: true }
console.log(person.name);
console.log(person["name"]);
person.city = "Kol"
console.log(person);
console.log(JSON.stringify(person));
for (let p in person) {
    console.log(p + ":" + person[p]);
}
console.log("===========Function===============");


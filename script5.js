
const person = {
    name: "john",
    age: 30,
    city: "New York",
};

//disply all objects using for loop

let text = "";
for (let x in person) {
    text += person[x] + " "
};

document.getElementById('demo').innerHTML = text;

const myArray = Object.values(person);

document.getElementById("demo1").innerHTML = myArray;

const fruits = {
    Bananas: 300,
    Oranges: 200,
    Apple: 500
};

let txt = "";
for (let [fruit, amount] of Object.entries(fruits)) {
    text += "<br>" + fruit + " : " + amount;
}
document.getElementById('demo2').innerHTML = text;

document.getElementById('demo3').innerHTML=JSON.stringify(person);
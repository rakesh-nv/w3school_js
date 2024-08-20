function myFunction(p1, p2) {
    return p1 * p2;
}

let result = myFunction(4, 3);
document.getElementById('demo').innerHTML = result;


//Real life objects

//js Object definitation

//How to define a javascript Object
// ->using a object literal
// ->using the new keword
// ->using an object constructer

const car = {
    name: "Fiat",     //object literals 
    model: "500",
    weighr: "850kg",
    color: "white",

}

// using new keyeord

const person = new Object();
person.firstName = "john";
person.lastName = "Doen";
person.age = 50;
person.eyeColor = "blue";

document.getElementById('demo1').innerHTML = person.firstName + " is " + person.age + " years old";

const person1 = {
    firstName1: "John",
    lastName1: "Doe",
    id: 5566,
    fullName1: function () {
        return this.firstName1 + " " + this.lastName1;
    }
};

document.getElementById("demo2").innerHTML = person1.fullName1();

//nested objects

const myObj = {
    name: "john",
    age: 30,
    myCars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat",
    }
}
document.getElementById('demo3').innerHTML = myObj.myCars.car2;

// This 

const person3 = {
    firstName: "john",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
document.getElementById('demo4').innerHTML = (person3.fullName()).toUpperCase();

//display the objects

document.getElementById('demo5').innerHTML = person3.firstName + ", " + person3.age + ", " + person3.id;

// Display properties in a loop

const person4 = {
    nam: 'john',
    age: 30,
    city: "new york",
};
let text = "";
for (let x in person4) {
    text += person4[x] + ", ";
};
document.getElementById('demo6').innerHTML = text;

//"Object.values()" creating array fron the property values:
const person5 = {
    nam: 'john',
    age: 30,
    city: "new york",
};
const myArray = Object.values(person5);
document.getElementById('demo7').innerHTML = myArray;


// JavaScript objects can be converted to a string with JSON method JSON.stringify().
// JSON.stringify() is included in JavaScript and supported in all major browsers.

const person6 = {
    nam: 'john',
    age: 30,
    city: "new york",
};
//stringifying the object
let myString = JSON.stringify(person6);
document.getElementById('demo8').innerHTML = myString;
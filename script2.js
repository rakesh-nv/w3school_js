
//arrays
function myFunction() {
    const cars = [" saab", " volo", " BMW"];

    cars[0] = " Tyota";
    cars.push(" Audi")

  document.getElementById('demo').innerHTML = cars;
}

// constant objeats

//create an object:
const car = {
    type: "Fiat",
    model: "500",
    color: "white",
};

car.color = "red";
car.owner = "johnson";

function myFunction1() {
    document.getElementById('demo1').innerHTML = "car type is :" + car.type;

}

const person = {
    firstName: "john",
    lastName: "Doe",
    age: 50,
    eyeColour: "blue"
};
document.getElementById('demo2').innerHTML = person.firstName + " is " + person.age + " years old";

const date=new Date();
document.getElementById('demo3').innerHTML = "date is :" + date;
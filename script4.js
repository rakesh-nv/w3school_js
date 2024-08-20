function person(first,last,age,eye){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.eyeColor=eye;

}

const myFather = new person("john","Doe",50,"blue");

document.getElementById('demo').innerHTML="my father is "+ myFather.age +".";
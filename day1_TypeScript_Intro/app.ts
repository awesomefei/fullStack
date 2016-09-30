

class Customers{
  firstName : string;
  lastName : string;
  getFullName(firstName:string, lastName:string){
    this.firstName = firstName;
    this.lastName = lastName;
    return `${firstName} ${lastName}`;
  }
}

let customer = new Customers();
console.log(customer.getFullName("tim", "tom"));

abstract class Vehicle {

    public report() {
        console.log(`Year: ${this.year}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
    }

    constructor(public year: number, public make: string, public model: string) { }
}


class Car extends Vehicle {
    constructor(year: number, make: string, model: string) {
        super(year, make, model);
    }
}


class Truck extends Vehicle {
    public report() {
        super.report();
        console.log(`Towing Capacity: ${this.towingCapacity}`);
    }

    constructor(year, make, model, public towingCapacity) {
        super(year, make, model);
    }
}

// create a car
let myCar = new Car(2015, 'Toyota', 'Camry');
myCar.report();

// create a truck
let myTruck = new Truck(2016, 'Dodge', 'Ram', 5000);
myTruck.report();


class Hamburger{
    name = "Hamburger";
    constructor(public price){
    }
    getPrice(){
        return this.price;
    }
}

class CheeseBurger extends Hamburger{
    name = "Cheeseburger";
    constructor (price){
        super(price+1);
    }
}
let cheese = new CheeseBurger(10);
console.log(cheese);

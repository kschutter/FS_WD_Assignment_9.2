class Airplane {
    // Default constructor takes in and assigns properties without checks or changed
    constructor(model, capacity, maxSpeed) {
        this.model = model;
        this.capacity = capacity;
        this.maxSpeed = maxSpeed;
    }

    // Print all properties assigned with the constructor
    print() {
        console.log("Model: " + this.model);
        console.log("Seating Capacity: " + this.capacity + " people");
        console.log("Max Speed: " + this.maxSpeed + " mph");
    }
}

// Initialize and print 3 different planes
var plane1 = new Airplane("Cessna", 30, 300);
plane1.print();
var plane2 = new Airplane("747", 100, 700);
plane2.print();
var plane3 = new Airplane("Boeing", 250, 1300);
plane3.print();

// Increase all planes capacity by 10
plane1.capacity += 10;
plane2.capacity += 10;
plane3.capacity += 10;

// Delete all planes max speed
plane1.maxSpeed = null;
plane2.maxSpeed = null;
plane3.maxSpeed = null;

// Set all planes average speed to 600
plane1.avgSpeed = 600;
plane2.avgSpeed = 600;
plane3.avgSpeed = 600;
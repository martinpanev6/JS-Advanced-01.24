class Person{
    firstName;
    lastName;
    age;
    email;

    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

function createPersonObjects() {
    const persons = [
        new Person("Anna", "Simpson", 22, "anna@yahoo.com"),
        new Person("SoftUni"), // Assuming SoftUni doesn't have age and email
        new Person("Stephan", "Johnson", 25),
        new Person("Gabriel", "Peterson", 24, "g.p@gmail.com"),
    ];
    return persons;
}

// Example usage:
// Creating an array of Person objects
const peopleArray = createPersonObjects();

// Printing the information for each person in the array
peopleArray.forEach(person => {
    console.log(person.toString());
});
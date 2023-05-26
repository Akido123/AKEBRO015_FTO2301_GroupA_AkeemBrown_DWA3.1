// @ts-check

/**
 * Represents a person.
 * @class
 */
class Person {
  /**
   * Create a person.
   * @constructor
   * @param {string} name - The name of the person.
   * @param {number} age - The age of the person.
   */
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  /**
   * Get the name of the person.
   * @returns {string} The name of the person.
   */
  getName() {
    return this.name;
  }

  /**
   * Set the name of the person.
   * @param {string} name - The new name of the person.
   */
  setName(name) {
    this.name = name;
  }

  /**
   * Get the age of the person.
   * @returns {number} The age of the person.
   */
  getAge() {
    return this.age;
  }

  /**
   * Set the age of the person.
   * @param {number} age - The new age of the person.
   */
  setAge(age) {
    this.age = age;
  }
}

// Create a new person object
const person = new Person('Alice', 25);

// Get the name and age of the person
console.log(person.getName());
console.log(person.getAge());
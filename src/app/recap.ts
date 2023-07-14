const username: string | number ="Mario " ;

const sum = (a: number, b: number) => {
  return a + b;
}

sum(2, 3);

class Person {
  constructor(private age: number, public name: string) {
  }

  getAge() {
    return this.age;
  }

  getName() {
    return this.name;
  }

  setAge(age: number) {
    this.age = age;
  }

  setName(name: string) {
    this.name = name;
  }

}

const person = new Person(20, "Mario");
person.getAge();
person.getName();

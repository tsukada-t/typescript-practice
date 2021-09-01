export {};

class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person('たつや', 20);
console.log(me);

export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Tatsuya';
  static lastName: string = 'Tsukada';

  static work() {
    return `Hello, TypeScript. This is ${this.firstName}`;
  }
}

console.log(Me.isProgrammer);
console.log(Me.work());

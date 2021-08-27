export {};

type Mojiretsu = string;

const fooString: Mojiretsu = 'Hello';

type Profile = {
  name: string;
  age: number;
};

const example1: Profile = {
  name: 'tty',
  age: 23,
};

type Profile2 = typeof example1;
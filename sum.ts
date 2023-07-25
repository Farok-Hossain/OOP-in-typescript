type Add = (a: number, b: number) => number;
const add5: Add = (a, b) => {
  return a + b;
};

const sum4 = add5(2, 7);
console.log(sum4);

class Calculator {
  add1(a: number, b: number): number {
    return a + b;
  }
}

const calculator = new Calculator();
const sum3 = calculator.add1(2, 5);
console.log(sum3);

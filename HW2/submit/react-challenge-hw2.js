class ArrayUtilities {
  addZeros = (arr) => arr.map((number) => number + "0");

  moreThanFifty = (arr) => arr.filter((number) => number > 50);

  removeFirst = (arr) => {
    let arr2 = arr.slice();
    arr2.shift();
    return arr2;
  };

  reducer = (acc, cur) => Number(acc) + Number(cur);

  sumAll = (arr) => arr.reduce(this.reducer);

  divide = (number) => String(number).split("");
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let ArrayUtil = new ArrayUtilities();

const addZeros = ArrayUtil.addZeros(numbers);
console.log(addZeros);

const moreThanFifty = ArrayUtil.moreThanFifty(addZeros);
console.log(moreThanFifty);

const noFirst = ArrayUtil.removeFirst(moreThanFifty);
console.log(noFirst);

const sumAll = ArrayUtil.sumAll(noFirst);
console.log(sumAll);

const divided = ArrayUtil.divide(sumAll);
console.log(divided);

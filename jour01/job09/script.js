// console.log("Hello Javasript!");

const numbers = [2, 15, 8, 12, 30];
let order = asc;

function asc(a, b) {
    return a - b;
  }
function desc(a, b) {
    return b - a;
  }

function tri(numbers, order){
    numbers.sort(order);
    numbers.reverse(order);
    console.log(numbers);
}

tri(numbers, order);
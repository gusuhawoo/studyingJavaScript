// closure = class private

// closure
// function makeCounter() {
//   let count = 0;
//   function increase() {
//     count++;
//     console.log(count);
//   }
//   return increase;
// }

// const increase = makeCounter();
// increase();
// increase();
// increase();

// class private
class Counter {
  #count = 0;
  increase() {
    this.#count++;
    console.log(this.#count);
  }
}
const counter = new Counter();
counter.increase();

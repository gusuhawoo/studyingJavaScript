// private(#), public(basic), protected
class Fruit {
  #name;
  #emoji;
  type = 'fruits';
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
console.log(apple);
const orange = new Fruit('orange', '🍊');
console.log(orange);

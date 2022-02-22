var lifeCounter = document.getElementById("lifeCounter");

var count = 0;

const INCREMENTLIFE = document.getElementById("increment");
const DECREMENTLIFE = document.getElementById("decrement");

const INCREMENTLIFE10 = document.getElementById("increment10");
const DECREMENTLIFE10 = document.getElementById("decrement10");


INCREMENTLIFE.addEventListener("click", function increment() {
  count++;
  lifeCounter.innerHTML = count;
});

DECREMENTLIFE.addEventListener("click", function decrement() {
  count--;
  lifeCounter.innerHTML = count;
});

INCREMENTLIFE10.addEventListener("click", function increment() {
  count += 10;
  lifeCounter.innerHTML = count;
});

DECREMENTLIFE10.addEventListener("click", function decrement() {
  count -= 10;
  lifeCounter.innerHTML = count;
});

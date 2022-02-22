var monsterLifeOne = document.getElementById("monsterLiOne")
var monsterLifeTwo = document.getElementById("monsterLiTwo")
var monsterLifeThree = document.getElementById("monsterLiThree")
var monsterLifeFour = document.getElementById("monsterLiFour")

var monsterOne = 0
var monsterTwo = 0
var monsterThree = 0
var monsterFour = 0

const INCREMENT = getElementById("decrementOne")
const DECREMENT = getElementById("incrementOne")

const INCREMENT2 = getElementById("decrementTwo")
const DECREMENT2 = getElementById("incrementTwo")

const INCREMENT3 = getElementById("decrementThree")
const DECREMENT3 = getElementById("incrementThree")

const INCREMENT4 = getElementById("decrementFour")
const DECREMENT4 = getElementById("incrementFour")


INCREMENT.addEventListener("click",
    function increment() {
        monsterOne++;
        monsterLifeOne.innerHTML = monsterOne;
    }
)

DECREMENT.addEventListener("click",
    function increment() {
        monsterOne--;
        monsterLifeOne.innerHTML = monsterOne;
    }
)



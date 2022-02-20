var lifeCounter  = document.getElementById("lifeCounter")

var pl  = document.getElementById("counterPl")
var po  = document.getElementById("counterPo")
var pp  = document.getElementById("counterPp")
var pc  = document.getElementById("counterPc")

var count = 0
var countpl = 00
var countpo = 00
var countpp = 00
var countpc = 00

const INCREMENTLIFE = document.getElementById("increment")
const DECREMENTLIFE = document.getElementById("decrement")

const INCREMENTLIFE10 = document.getElementById("increment10")
const DECREMENTLIFE10 = document.getElementById("decrement10")

const INCREMENTPL = document.getElementById("incrementPl")
const DECREMENTPL = document.getElementById("decrementPl")

const INCREMENTPO = document.getElementById("incrementPo")
const DECREMENTPO = document.getElementById("decrementPo")

const INCREMENTPP = document.getElementById("incrementPp")
const DECREMENTPP = document.getElementById("decrementPp")

const INCREMENTPC = document.getElementById("incrementPc")
const DECREMENTPC = document.getElementById("decrementPc")


INCREMENTLIFE.addEventListener("click",
    function increment() {
        count++;
        lifeCounter.innerHTML = count;
    }
)

DECREMENTLIFE.addEventListener("click",
    function decrement() {
        count--;
        lifeCounter.innerHTML = count;
    }
)


INCREMENTLIFE10.addEventListener("click",
    function increment() {
        count+=10;
        lifeCounter.innerHTML = count;
    }
)

DECREMENTLIFE10.addEventListener("click",
    function decrement() {
        count-=10;
        lifeCounter.innerHTML = count;
    }
)

//PL COUNTER

INCREMENTPL.addEventListener("click",
    function incrementpl() {
        countpl++;
        pl.innerHTML = countpl;
    }
)

DECREMENTPL.addEventListener("click",
    function decrementpl() {
        countpl--;
        pl.innerHTML = countpl
    }
)

//PO COUNTER

INCREMENTPO.addEventListener("click",
    function incrementpl() {
        countpo++;
        po.innerHTML = countpo;
    }
)

DECREMENTPO.addEventListener("click",
    function decrementpl() {
        countpo--;
        po.innerHTML = countpo
    }

  
)

//PP COUNTER

INCREMENTPP.addEventListener("click",
    function incrementpl() {
        countpp++;
        pp.innerHTML = countpp;
    }
)

DECREMENTPP.addEventListener("click",
    function decrementpl() {
        countpp--;
        pp.innerHTML = countpp
    }
)

//PC COUNTER

INCREMENTPC.addEventListener("click",
    function incrementpl() {
        countpc++;
        pc.innerHTML = countpc;
    }
)

DECREMENTPC.addEventListener("click",
    function decrementpl() {
        countpc--;
        pc.innerHTML = countpc
    }
)




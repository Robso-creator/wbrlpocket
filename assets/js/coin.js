var pl = document.getElementById("counterPl");
var po = document.getElementById("counterPo");
var pp = document.getElementById("counterPp");
var pc = document.getElementById("counterPc");

const btn = document.querySelector("#send");

const INCREMENTPL = document.getElementById("incrementPl");
const DECREMENTPL = document.getElementById("decrementPl");

const INCREMENTPO = document.getElementById("incrementPo");
const DECREMENTPO = document.getElementById("decrementPo");

const INCREMENTPP = document.getElementById("incrementPp");
const DECREMENTPP = document.getElementById("decrementPp");

const INCREMENTPC = document.getElementById("incrementPc");
const DECREMENTPC = document.getElementById("decrementPc");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  var countpl = pl.value;
  var countpo = po.value;
  var countpp = pp.value;
  var countpc = pc.value;


  //PL COUNTER

  INCREMENTPL.addEventListener("click", function incrementpl() {
    countpl++;
    pl.value = countpl;
  });

  DECREMENTPL.addEventListener("click", function decrementpl() {
    countpl--;
    pl.value = countpl;
  });

  //PO COUNTER

  INCREMENTPO.addEventListener("click", function incrementpl() {
    countpo++;
    po.value = countpo;
  });

  DECREMENTPO.addEventListener("click", function decrementpl() {
    countpo--;
    po.value = countpo;
  });

  //PP COUNTER

  INCREMENTPP.addEventListener("click", function incrementpl() {
    countpp++;
    pp.value = countpp;
  });

  DECREMENTPP.addEventListener("click", function decrementpl() {
    countpp--;
    pp.value = countpp;
  });

  //PC COUNTER

  INCREMENTPC.addEventListener("click", function incrementpl() {
    countpc++;
    pc.value = countpc;
  });

  DECREMENTPC.addEventListener("click", function decrementpl() {
    countpc--;
    pc.value = countpc;
  });
});

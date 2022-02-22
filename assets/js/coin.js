var pl = document.getElementById("counterPl");
var po = document.getElementById("counterPo");
var pp = document.getElementById("counterPp");
var pc = document.getElementById("counterPc");
var pb = document.getElementById("counterPb");


const INCREMENTPL = document.getElementById("incrementPl");
const DECREMENTPL = document.getElementById("decrementPl");

const INCREMENTPO = document.getElementById("incrementPo");
const DECREMENTPO = document.getElementById("decrementPo");

const INCREMENTPP = document.getElementById("incrementPp");
const DECREMENTPP = document.getElementById("decrementPp");

const INCREMENTPC = document.getElementById("incrementPc");
const DECREMENTPC = document.getElementById("decrementPc");

const INCREMENTPB = document.getElementById("incrementPb");
const DECREMENTPB = document.getElementById("decrementPb");
  
  //PL COUNTER

  INCREMENTPL.addEventListener("click", function incrementpl() {
    var countpl = pl.value
    countpl++;
    pl.value = countpl;
  });

  DECREMENTPL.addEventListener("click", function decrementpl() {
    var countpl = pl.value
    countpl--;
    pl.value = countpl;
  });

  //PO COUNTER

  INCREMENTPO.addEventListener("click", function incrementpl() {
    var countpo = po.value
    countpo++;
    po.value = countpo;
  });

  DECREMENTPO.addEventListener("click", function decrementpl() {
    var countpo = po.value
    countpo--;
    po.value = countpo;
  });

  //PP COUNTER

  INCREMENTPP.addEventListener("click", function incrementpl() {
    var countpp = pp.value
    countpp++;
    pp.value = countpp;
  });

  DECREMENTPP.addEventListener("click", function decrementpl() {
    var countpp = pp.value
    countpp--;
    pp.value = countpp;
  });

  //PC COUNTER

  INCREMENTPC.addEventListener("click", function incrementpl() {
    var countpc = pc.value
    countpc++;
    pc.value = countpc;
  });

  DECREMENTPC.addEventListener("click", function decrementpl() {
    var countpc = pc.value
    countpc--;
    pc.value = countpc;
  });

  //PB COUNTER

  INCREMENTPB.addEventListener("click", function incrementpl() {
    var countpb = pb.value
    countpb++;
    pb.value = countpb;
  });

  DECREMENTPB.addEventListener("click", function decrementpl() {
    var countpb = pb.value
    countpb--;
    pb.value = countpb;
  });
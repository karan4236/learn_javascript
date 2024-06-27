function plus() {
  console.log("--function called----");
  let a = document.getElementById("value1").value;
  let b = document.getElementById("value2").value;
  let c = parseInt(a) + parseInt(b);
  document.getElementById("result").innerHTML = c;

  console.log("=====result", c);
}

function minus() {
  console.log("----minus work---");
  let min1 = document.getElementById("value1").value;
  let min2 = document.getElementById("value2").value;
  let min3 = parseInt(min1) - parseInt(min2);
  document.getElementById("result").innerHTML = min3;

  console.log("result", min3);
}



function multiply() {
  console.log("----miltiply work---");
  let multi1 = document.getElementById("value1").value;
  let multi2 = document.getElementById("value2").value;
  let multi3 = parseInt(multi1) * parseInt(multi2);
  document.getElementById("result").innerHTML = multi3;

  console.log("result", multi3);
}


function multiply() {
  console.log("----divid work---");
  let divid1 = document.getElementById("value1").value;
  let divid2 = document.getElementById("value2").value;
  let divid3 = parseInt(divid1) / parseInt(divid2);
  document.getElementById("result").innerHTML = divid3;

  console.log("result", divid3);
}

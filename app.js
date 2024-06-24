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
}

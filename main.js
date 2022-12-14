
let btnEq = form.veql;
let btn = document.querySelector(".btn")

function val(result) {
  form.disp.value = form.disp.value + result;
}

function calculate(){
  if (form.disp.value == "") {
    alert("please enter numbers");
  }else {
    form.disp.value = eval(form.disp.value );
  }
}

btnEq.addEventListener("dblclick",function () {
  form.disp.value = "";
})
btn.addEventListener("click",function () {
  form.disp.value = "";
})

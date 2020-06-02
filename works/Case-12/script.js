
var f1, f2, zn;
document.addEventListener('click', function(event) {
  if (event.target.dataset.num != undefined) {
    document.querySelector(".result>input").value+=event.target.value;
  }
  if (event.target.dataset.oper != undefined) {
    if(event.target.value == "+" || event.target.value == "-" || event.target.value == "*" || event.target.value == "/")
    {
      window.zn = zn = event.target.value;
      window.fl = f1 = Number(document.querySelector(".result>input").value);
      document.querySelector(".result>input").value = '';
    }
    if(event.target.value == "=")
    {
      f2 = Number(document.querySelector(".result>input").value);
      if (zn == "+") {
        f2+=f1;
        document.querySelector(".result>input").value = f2;
      }
      if (zn == "-") {
        f1-=f2;
        document.querySelector(".result>input").value = f1;
      }
      if (zn == "*") {
        f1*=f2;
        document.querySelector(".result>input").value = f1;
      }
      if (zn == "/") {
        f1/=f2;
        document.querySelector(".result>input").value = f1;
      }
    }
  }
});

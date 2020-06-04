function myrandom() {
  let one_num = document.getElementById("First_num").value.toString();
  let sec_num = document.getElementById("Second_num").value.toString();
  let regex = /[0-9]/;
  if (sec_num<one_num || !regex.test(one_num) || !regex.test(sec_num))
    document.getElementById("Res_num").value = "Error";
  else{
    min = Math.ceil(one_num);
    max = Math.floor(sec_num);
    document.getElementById("Res_num").value = Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

function validate(evt) {
  let theEvent = evt;
  let key = theEvent.keyCode;
  key = String.fromCharCode( key );
  let regex = /[0-9]/;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

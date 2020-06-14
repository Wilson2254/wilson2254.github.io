function make_splice(){
  let cell = document.getElementById('input_splice').value;
  cell = cell.split('');
  cell.splice(2, 3);
  cell = cell.join('');
  document.getElementById('res_splice').value = cell;
}

function make_reverse(){
  let cell = document.getElementById('input_reverse').value;
  cell = cell.split('').reverse().join('');
  document.getElementById('res_reverse').value = cell;
}

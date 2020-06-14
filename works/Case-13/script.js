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

function make_concat(){
  let cell1 = document.getElementById('input_concat1').value.split('');
  let cell2 = document.getElementById('input_concat2').value.split('');
  let cell = cell1.concat(cell2);
  document.getElementById('res_concat').value = cell.join('');
}

function make_for(){
  let cell = document.getElementById('input_for').value.split('');
  cell.forEach((item) => {
  document.getElementById('res_for').value+=item+' ';
  });
}

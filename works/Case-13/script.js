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

function make_num(){
  let cell = document.getElementById('input_num1').value.split('');
  let cell2 = document.getElementById('input_num2').value.split('');
  cell = cell.indexOf(document.getElementById('input_num2').value);
  document.getElementById('res_num').value = cell;
  document.getElementById('res_num2').value = cell2.includes(document.getElementById('input_num2').value);
}

function find_fruit(){
  let cell = document.getElementById('input_find_item2').value;
  let fruit = [
  {id: 1, name: "Apple"},
  {id: 2, name: "Banana"},
  {id: 3, name: "Orange"}
];
  document.getElementById('res_fruit').value = fruit.find(item => item.id == cell).name;
}

function make_filter(){
  let a = 0;
  let cell = document.getElementById('input_filter1').value.split('');
  let cell2 = document.getElementById('input_filter2').value.split('');
  cell.filter(item => {
    if(item==cell2)
    a++;
  });
  document.getElementById('res_filter').value = a;
}

function make_map(){
  let res = document.getElementById('input_map1').value.split('').map(item => item*document.getElementById('input_map2').value.split(''));
  document.getElementById('res_map').value = res.join('');
}

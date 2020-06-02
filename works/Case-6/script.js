function countRabbits() {
  let one_num = document.getElementById("First_num").value;
  let sec_num = document.getElementById("Second_num").value;
  let res_num = function getRandomInRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
  document.getElementById("Res_num").value = res_num(one_num, sec_num);
}

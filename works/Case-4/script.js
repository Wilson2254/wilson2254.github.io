// function countRabbits() {
//   let one_num = document.getElementById("First_num").value;
//   let sec_num = document.getElementById("Second_num").value;
//   let res_num = function getRandomInRange(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };
//   document.getElementById("Res_num").value = res_num(one_num, sec_num);
// }
// var randomRotation = anime({
//   targets: '.square',
//   rotate: function() {
//     return anime.random(-180, 180);
//   },
//   autoplay: false
// });
//
// document.querySelector('.play-rotate').onclick = randomRotation.restart;

function result_form() {
  let student = document.getElementById('student').value;
  let group = document.getElementById('group').value;
  let course = document.getElementById('course').value;
  let spec_s = document.getElementById('spec_s').value;
  let disc = document.getElementById('disc').value;
  let teacher = document.getElementById('teacher').value;
  let day = document.getElementById('day').value;
  let month = document.getElementById('month').value;
  let time = document.getElementById('time').value;
  let spec_t = document.getElementById('spec_t').value;
  let change = document.getElementsByName('change');
    for (var i = 0; i < change.length; i++) {
        if (change[i].type == "radio" && change[i].checked) {
            change = change[i].value;
        }
    }
	let name1 = 'STUDENT';
  let name2 = 'GROUP';
  let name3 = 'COURSE';
  let name4 = 'FACULTY';
  let name5 = 'SUBJECT';
  let name6 = 'TEACHER';
  let name7 = 'FACULTY';
  let name8 = 'DAY';
  let name9 = 'MONTH';
  let name10 = 'TIME';
  let name11 = 'CHANGE FORM';
  let tables = "<table border=1 id=\"1\">" +
	"<tr>" +
	  "<th>" + name1 + "</th>" + "<th>" + student + "</th>" +
		"</tr>"+
		"<tr>" +
	  "<th>" + name2 + "</th>" + "<th>" + group + "</th>" +
		"</tr>"+
		"<tr>" +
	  "<th>" + name3 + "</th>" +	"<th>" + course + "</th>" +
		"</tr>"+
		"<tr>"+
		"<th>" + name4 + "</th>" +	"<th>" + spec_s + "</th>" +
		"</tr>"+
    "<tr>"+
		"<th>" + name5 + "</th>" +	"<th>" + disc + "</th>" +
		"</tr>"+
    "<tr>"+
		"<th>" + name6 + "</th>" +	"<th>" + teacher + "</th>" +
		"</tr>"+
    "<tr>"+
		"<th>" + name7 + "</th>" +	"<th>" + spec_t + "</th>" +
		"</tr>"+
    "<tr>"+
		"<th>" + name8 + "</th>" +	"<th>" + day + "</th>" +
		"</tr>"+
    "<tr>"+
		"<th>" + name9 + "</th>" +	"<th>" + month + "</th>" +
		"</tr>"+
    "<tr>"+
		"<th>" + name10 + "</th>" +	"<th>" + time + "</th>" +
		"</tr>"+
    "<tr>"+
		"<th>" + name11 + "</th>" +	"<th>" + change + "</th>" +
		"</tr>"+
	"</table>";

    document.getElementById('result').innerHTML = tables;
}

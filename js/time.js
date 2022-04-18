function disptime() {
	var time = new Date();
	var year = time.getFullYear();
	var month = time.getMonth();
	var day = time.getDate();
	var hh = time.getHours();
	var mm = time.getMinutes();
	var ss = time.getSeconds();
	if (day < 10) {
		day = "0" + day;
	}
	if (month < 10) {
		month = "0" + month;
	}
	if (hh < 10) {
		hh = "0" + hh;
	}
	if (mm < 10) {
		mm = "0" + mm;
	}
	if (ss < 10) {
		ss = "0" + ss;
	}
	document.getElementById("updatetime").innerHTML = "更新于：" + year + "." + month + "." + day + "&nbsp;&nbsp;" + hh +
		":" + mm + ":" + ss;
}
disptime();
let timeId = 0;

function start() {
	timeId = setInterval("disptime()", 1000);
}
start();

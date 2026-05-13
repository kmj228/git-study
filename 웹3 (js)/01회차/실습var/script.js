
theBtn1 = document.querySelector(".cha1");
theBtn2 = document.querySelector(".cha2");
theBtn3 = document.querySelector(".cha3");

function changeH1(name) {
	document.querySelector("h1").innerHTML = name;
}

function changeH3(age) {
	document.querySelector("h3").innerHTML = age;
}

theBtn1.addEventListener("click", function(){
	changeH1("짱구");
	changeH3(5);
})

theBtn2.addEventListener("click", function(){
	changeH1("짱아");
	changeH3(1);
})

theBtn3.addEventListener("click", function(){
	changeH1("철수");
	changeH3(7);
})









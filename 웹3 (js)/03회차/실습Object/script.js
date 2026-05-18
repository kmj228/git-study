
//  이상해씨

var poke1 = {
	name: document.getElementById('name1'),
	level: document.getElementById('level1'),
	cha: document.getElementById('cha1')
}

if (parseInt(poke1.level.innerHTML) > 10) {
	document.getElementById('name1').innerHTML = '이상해풀';
	document.getElementById("cha1").src = 'icon01_2.png';
}
else if (parseInt(poke1.level.innerHTML) > 20) {
	document.getElementById('name1').innerHTML = '이상해꽃';
	document.getElementById("cha1").src = 'icon01_3.png';
}

// 파이리

var poke2 = {
	name: document.getElementById('name2'),
	level: document.getElementById('level2'),
	cha: document.getElementById('cha2')
}

if (parseInt(poke2.level.innerHTML) > 10) {
	document.getElementById('name2').innerHTML = '리자드';
	document.getElementById("cha2").src = 'icon02_2.png';
}
else if (parseInt(poke2.level.innerHTML) > 20) {
	document.getElementById('name2').innerHTML = '리자몽';
	document.getElementById("cha2").src = 'icon02_3.png';
}

// 꼬부기

var poke3 = {
	name: document.getElementById('name3'),
	level: document.getElementById('level3'),
	cha: document.getElementById('cha3')
}

if (parseInt(poke3.level.innerHTML) > 10) {
	document.getElementById('name3').innerHTML = '어니부기';
	document.getElementById("cha3").src = 'icon03_2.png';
}
else if (parseInt(poke3.level.innerHTML) > 20) {
	document.getElementById('name3').innerHTML = '이상해꽃';
	document.getElementById("cha3").src = 'icon03_3.png';
}



var poketmon = [
	// 이상해씨
	{
		name: document.getElementById('name1'),
		level: document.getElementById('level1'),
		cha: document.getElementById('cha1')
	},
	// 파이리
	{
		name: document.getElementById('name2'),
		level: document.getElementById('level2'),
		cha: document.getElementById('cha2')
	},
	// 꼬부기
	{
		name: document.getElementById('name3'),
		level: document.getElementById('level3'),
		cha: document.getElementById('cha3')
	}
]

function poketClick(indexNum) {

	poketmon[indexNum].level += 5;

	if (indexNum == 0) {
		poketmon[indexNum].level.innerHTML = poketmon[indexNum].level;
	}
	else if (indexNum == 1) {
		poketmon[indexNum].level.innerHTML = poketmon[indexNum].level;
	}
}



//  이상해씨

if (parseInt(poketmon[0].level.innerHTML) > 10) {
	document.getElementById('name1').innerHTML = '이상해풀';
	document.getElementById("cha1").src = 'icon01_2.png';
}
else if (parseInt(poketmon[0].level.innerHTML) > 20) {
	document.getElementById('name1').innerHTML = '이상해꽃';
	document.getElementById("cha1").src = 'icon01_3.png';
}

// 파이리

if (parseInt(poketmon[1].level.innerHTML) > 10) {
	document.getElementById('name2').innerHTML = '리자드';
	document.getElementById("cha2").src = 'icon02_2.png';
}
else if (parseInt(poketmon[1].level.innerHTML) > 20) {
	document.getElementById('name2').innerHTML = '리자몽';
	document.getElementById("cha2").src = 'icon02_3.png';
}

// 꼬부기


if (parseInt(poketmon[2].level.innerHTML) > 10) {
	document.getElementById('name3').innerHTML = '어니부기';
	document.getElementById("cha3").src = 'icon03_2.png';
}
else if (parseInt(poketmon[2].level.innerHTML) > 20) {
	document.getElementById('name3').innerHTML = '이상해꽃';
	document.getElementById("cha3").src = 'icon03_3.png';
}

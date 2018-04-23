// let elements = [
//     {
// 	   img: "assets/shot-1.jpg",
// 	   text: "Стандартный пакет",
// 	   time: "08 апреля 2012"
//     },
//     {
// 	   img: "assets/shot-2.jpg",
// 	   text: "Новый ЦФТ-банк",
// 	   time: "09 сентября 2016"
//     },
//     {
// 	   img: "assets/shot-3.jpg",
// 	   text: "Каталог разработок",
// 	   time: "13 октября 2014"
//     },
//     {
// 	   img: "assets/shot-4.jpg",
// 	   text: "Новые карты",
// 	   time: "23 апреля 2015"
//     },
//     {
// 	   img: "assets/shot-5.jpg",
// 	   text: "Мобильное приложение",
// 	   time: "9 ноября 2016"
//     },
//     {
// 	   img: "assets/shot-6.jpg",
// 	   text: "Новые технологии",
// 	   time: "11 августа 2013"
//     },
//     {
// 	   img: "assets/shot-7.jpg",
// 	   text: "Моментальные платежи",
// 	   time: "7 декабря 2014"
//     }
// ]

function showElements(response) {

elements = JSON.parse(response);
let rightButton = document.getElementsByClassName('arrow-right')[0];

let i = 0;
while (i < 3) {
    let randomElementIndex = Math.floor(Math.random() * elements.length);
    
    let div = document.createElement('div');
  	div.className = "main-logo__item";

  	let img = document.createElement('img');
  	img.src = "assets/" + elements[randomElementIndex].guid + ".jpg";
  	img.width = "300";
  	img.height = "198";
	div.appendChild(img);	  	

	let h3 = document.createElement('h3');
	h3.className = "main-logo__header";
	h3.innerText = elements[randomElementIndex].text;
	div.appendChild(h3);

	let time = document.createElement('time');
	time.className = "date";
	time.innerText = parceUnixTime(elements[randomElementIndex].lastUpdate);
	time.dateTime = time.innerText;
	div.appendChild(time);

	rightButton.parentNode.insertBefore(div, rightButton);

	elements.splice(randomElementIndex, 1);
	i++;
};
}

function mainLogoPackage() {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", "js/app_packages.json", true);
	xhr.send();
	xhr.onload = function(e) {
		showElements(e.target.response);
	}
};

function parceUnixTime(unixTime){
	let date = new Date(unixTime*1000);
	let options = { day: '2-digit', year: 'numeric', month: 'long' };
	formattedTime = date.toLocaleDateString('ru-RU', options);

	return formattedTime;
};

mainLogoPackage();


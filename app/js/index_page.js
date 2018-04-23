import { initSlider } from './indexPage.js';


document.addEventListener("DOMContentLoaded", function(){
	const xhr = new XMLHttpRequest();
	xhr.open("GET", '/API/app_packages.json', true);
	xhr.send();
	xhr.onload = function() {
		const packageList = JSON.parse(xhr.responseText);
		initSlider(packageList);		
	}
});

console.log(localStorage.getItem('clickedLink'));
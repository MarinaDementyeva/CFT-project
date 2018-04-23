function GetAndShowElement(id) {
    const xhr = new XMLHttpRequest();
	xhr.open("GET", "js/app_content.json", true);
    xhr.onload = function(e) {
		ShowElement(id, e.target.response);
	}
    xhr.send()
}

function ShowElement(id, response){
	let elements = JSON.parse(response);
	let element = elements[id];
    

    let temp = document.getElementsByTagName("template")[0];
    let clon = temp.content.cloneNode(true);

    clon.getElementById("templateTitle").innerText = element.title;
    clon.getElementById("templateDate").innerText = element.lastUpdate;
    clon.getElementById("templateImage").innerText = element.guid;
    clon.getElementById("templateContent").innerText = element.info;
    clon.getElementById("templateDemands").innerText = element.demands;
    clon.getElementById("templateDescription").innerText = element.description;
    clon.getElementById("templatePrice").innerText = element.price;

    let contentWrapper = document.getElementsByClassName('content__wrapper')[0];
    contentWrapper.appendChild(clon);
}

function parceUnixTime(unixTime){
    let date = new Date(unixTime*1000);
    let options = { day: '2-digit', year: 'numeric', month: 'long' };
    formattedTime = date.toLocaleDateString('ru-RU', options);

    return formattedTime;
};
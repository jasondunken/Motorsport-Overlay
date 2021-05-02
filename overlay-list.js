/* 2021 BitByteBytes.io */
const session = "FP1";

const totalLaps = 66;
let currentLap = 1;

const drivers = [
	{ name: "Lewis Hamilton", lastName: "Hamilton", nameShort: "Ham", team: "Mercedes", carNum: "44", icon: "./assets/mercedes.png", color: "#00D2BE" }, 
	{ name: "Valteri Bottas", lastName: "Bottas", nameShort: "Bot", team: "Mercedes", carNum: "77", icon: "./assets/mercedes.png", color: "#00D2BE" }, 
	{ name: "Max Verstappen", lastName: "Verstappen", nameShort: "Ver", team: "Red Bull", carNum: "33", icon: "./assets/red_bull.png", color: "#0600EF" }, 
	{ name: "Sergio Perez", lastName: "Perez", nameShort: "Per", team: "Red Bull", carNum: "11", icon: "./assets/red_bull.png", color: "#0600EF" },
	{ name: "Charles Leclerc", lastName: "Leclerc", nameShort: "Lec", team: "Ferrari", carNum: "16", icon: "./assets/ferrari.png", color: "#DC0000" }, 
	{ name: "Carlos Sainz Jr.", lastName: "Sainz", nameShort: "Sai", team: "Ferrari", carNum: "55", icon: "./assets/ferrari.png", color: "#DC0000" }, 
	{ name: "Pierre Gasly", lastName: "Gasly", nameShort: "Gas", team: "AlphaTauri", carNum: "10", icon: "./assets/alphatauri.png", color: "#2B4562" }, 
	{ name: "Yuki Tsunoda", lastName: "Tsunoda", nameShort: "Tsu", team: "AlphaTauri", carNum: "22", icon: "./assets/alphatauri.png", color: "#2B4562" },
	{ name: "Lando Norris", lastName: "Norris", nameShort: "Nor", team: "McLaren", carNum: "4", icon: "./assets/mclaren.png", color: "#FF8700" }, 
	{ name: "Daniel Ricciardo", lastName: "Ricciardo", nameShort: "Ric", team: "McLaren", carNum: "3", icon: "./assets/mclaren.png", color: "#FF8700" }, 
	{ name: "Kimi Raikkonen", lastName: "Raikkonen", nameShort: "Rai", team: "Alfa Romeo", carNum: "7", icon: "./assets/alfa_romeo.png", color: "#900000" }, 
	{ name: "Antonion Giovinazzi", lastName: "Giovinazzi", nameShort: "Gio", team: "Alfa Romeo", carNum: "99", icon: "./assets/alfa_romeo.png", color: "#900000" },
	{ name: "Esteban Ocon", lastName: "Ocon", nameShort: "Oco", team: "Alpine", carNum: "31", icon: "./assets/alpine.png", color: "#0090FF" }, 
	{ name: "Fernando Alonso", lastName: "Alonso", nameShort: "Alo", team: "Alpine", carNum: "14", icon: "./assets/alpine.png", color: "#0090FF" }, 
	{ name: "Sebastien Vettel", lastName: "Vettel", nameShort: "Vet", team: "Aston Martin", carNum: "5", icon: "./assets/aston_martin.png", color: "#006F62" }, 
	{ name: "Lance Stroll", lastName: "Stroll", nameShort: "Str", team: "Aston Martin", carNum: "18", icon: "./assets/aston_martin.png", color: "#006F62" },
	{ name: "Nikita Mazepin", lastName: "Mazepin", nameShort: "Maz", team: "Haas", carNum: "9", icon: "./assets/haas.png", color: "#FFFFFF" }, 
	{ name: "Mick Schumacher", lastName: "Schumacher", nameShort: "Sch", team: "Haas", carNum: "47", icon: "./assets/haas.png", color: "#FFFFFF" }, 
	{ name: "Nicholas Latifi", lastName: "Latifi", nameShort: "Lat", team: "Williams", carNum: "6", icon: "./assets/williams.png", color: "#005AFF" }, 
	{ name: "George Russell", lastName: "Russell", nameShort: "Rus", team: "Williams", carNum: "63", icon: "./assets/williams.png", color: "#005AFF" }
]

function incrementLaps() {
	currentLap++;
	setLaps();
}

function decrementLaps() {
	currentLap--;
	setLaps();
}

function setLaps() {
	document.getElementById('laps').innerHTML = `<span onclick="incrementLaps()">Lap ${currentLap}</span>/<span onclick="decrementLaps()">${totalLaps}</span>`;
}

function updateList() {
	let listContainer = document.getElementById('list-container');
	
	let html = '';
	for (let driver of drivers) {
		// driver with team color icon containing overall position then driver last name
		// html += `<div class="driver"><div class="icon" style="background-color: ${driver.color}" onClick="moveDriverUp('${driver.name}')">${drivers.indexOf(driver) + 1}</div><div onClick="moveDriverDown('${driver.name}')">${driver.lastName}</div></div>`;
		// driver with team logo icon then overall position then last name
		html += `<div class="driver-with-icon"><img src="${driver.icon}" width="32" height="32" onClick="moveDriverUp('${driver.name}')"/><div class="position">${drivers.indexOf(driver) + 1}</div><div onClick="moveDriverDown('${driver.name}')">${driver.lastName}</div></div>`
	}
	listContainer.innerHTML = html;
}

function moveDriverUp(name) {
	const oldPos = getDriverPos(name);
	const newPos = driverPos - 1;
	if (newPos < 0) return;
	swapDrivers(oldPos, newPos);
}

function moveDriverDown(name) {
	const oldPos = getDriverPos(name);
	const newPos = driverPos + 1;
	if (newPos > drivers.length - 1) return;
	swapDrivers(oldPos, newPos);
}

function getDriverPos(name) {let d;
	drivers.find((driver) => {
		if (name === driver.name) {
			d = driver;
		}
	})
	return driverPos = drivers.indexOf(d);
}

function swapDrivers(oldPos, newPos) {
	const temp = drivers[newPos];
	drivers[newPos] = drivers[oldPos];
	drivers[oldPos] = temp;
	updateList();
}

document.getElementById('session').innerHTML = session;
setLaps();
updateList();
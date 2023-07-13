const convertBtn = document.getElementById("convert-btn");
const unit = document.getElementById("set-metric");

convertBtn.addEventListener("click", convert);
unit.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		convert();
	}
});

function convert() {
	convertLength();
	convertVolume();
	convertMass();
}

function convertLength() {
	const resultLength = document.getElementById("result-length");
	const meterToFeet = unit.value * 3.281;
	const feetToMeter = unit.value / 3.281;

	if (unit.value > 1) {
		resultLength.innerHTML = `${unit.value} meters = ${meterToFeet.toFixed(3)} feet <br> ${
			unit.value
		} feet = ${feetToMeter.toFixed(3)} meters`;
	} else {
		resultLength.innerHTML = `${unit.value} meter = ${meterToFeet.toFixed(3)} feet <br> ${
			unit.value
		} foot = ${feetToMeter.toFixed(3)} meter`;
	}
}

function convertVolume() {
	const resultVolume = document.getElementById("result-volume");
	const litersToGallons = unit.value * 0.264;
	const gallonsToLiters = unit.value / 0.264;

	if (unit.value > 1) {
		resultVolume.innerHTML = `${unit.value} liters = ${litersToGallons.toFixed(3)} gallons <br> ${
			unit.value
		} gallons = ${gallonsToLiters.toFixed(3)} liters`;
	} else {
		resultVolume.innerHTML = `${unit.value} liter = ${litersToGallons.toFixed(3)} gallon <br> ${
			unit.value
		} gallon = ${gallonsToLiters.toFixed(3)} liters`;
	}
}

function convertMass() {
	const resultMass = document.getElementById("result-mass");
	const kiloToPounds = unit.value * 2.204;
	const poundsToKilos = unit.value / 2.204;

	if (unit.value > 1) {
		resultMass.innerHTML = `${unit.value} kilogram = ${kiloToPounds.toFixed(3)} pounds <br> ${
			unit.value
		} pounds = ${poundsToKilos.toFixed(3)} kilograms`;
	} else {
		resultMass.innerHTML = `${unit.value} kilogram = ${kiloToPounds.toFixed(3)} pounds <br> ${
			unit.value
		} pound = ${poundsToKilos.toFixed(3)} kilogram`;
	}
}

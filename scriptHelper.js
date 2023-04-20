// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let doc = document.getElementById("missionTarget");
               doc.innerHTML = 
               `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance}</li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">`
   
}

function validateInput(testInput) {
   let input = Number(testInput);
    if(isNaN(input)){
        return "Not a number";
    } else if (input === ""){
        return "Empty";
    } else if (isNaN(input) === false){
        return "Is a number";
    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");
   let faultyItems = document.getElementById("faultyItems");

if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
    alert("Please enter a value in all fields.");
}else if(validateInput(pilot) === "Is a number" || validateInput(copilot) === "Is a number" || validateInput(fuelLevel) === "Not a number" || validateInput(cargoLevel) === "Not a number"){
    alert("Please enter strings for names, and numbers for fuel and mass.");
} else {
    pilotStatus.innerHTML = `${pilot} is ready!`;
    copilotStatus.innerHTML = `${copilot} is ready!`;
    list.style.visibility = "visible";
    switch(true){
        case ((fuelLevel < 10000) && (cargoLevel > 10000)):
            fuelStatus.innerHTML = "Not enough fuel to launch";
            cargoStatus.innerHTML = "Cargo too heavy to launch";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            break;
        case ((fuelLevel >= 10000) && (Number(cargoLevel) > 10000)):
            fuelStatus.innerHTML = "Enough fuel to launch";
            cargoStatus.innerHTML = "Cargo too heavy to launch";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            break;
        case ((fuelLevel < 10000) && (cargoLevel <= 10000)):
            fuelStatus.innerHTML = "Not enough fuel to launch";
            cargoStatus.innerHTML = "Cargo light enough to launch";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            break;
        default:
            fuelStatus.innerHTML = `Enough fuel to launch ${fuelLevel}`;
            cargoStatus.innerHTML = `Cargo light enough to launch ${cargoLevel}`;
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "green";
            break;
        }; 
    };
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

// Write your JavaScript code here!

// const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper"); [this kept breaking everything so I had to comment it out]

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
   }).then(function () {
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let selectPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, selectPlanet.name, selectPlanet.diameter, selectPlanet.star, selectPlanet.distance, selectPlanet.moons, selectPlanet.image)
    })

let faultyItemsList = document.getElementById("faultyItems");
faultyItemsList.style.visibility = "hidden";

let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let userPilotInput = document.querySelector("input[name=pilotName]");
    let userCopilotInput = document.querySelector("input[name=copilotName]");
    let userFuelInput = document.querySelector("input[name=fuelLevel]");
    let userCargoInput = document.querySelector("input[name=cargoMass]");
    formSubmission(document, faultyItemsList, userPilotInput.value, userCopilotInput.value, Number(userFuelInput.value), Number(userCargoInput.value));
    })
})


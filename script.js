// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   let userInputs = document.getElementById('faultyItems');
   form.addEventListener("submit", function(event) {
       let pilotNameInput = document.querySelector("input[name=pilotName]").value;
       let copilotNameInput = document.querySelector("input[name=copilotName]").value;
       let fuelLevelInput = document.querySelector("input[name=fuelLevel]").value;
       let cargoMassInput = document.querySelector("input[name=cargoMass]").value;
       if (!isNaN(pilotNameInput) || !isNaN(copilotNameInput) || isNaN(fuelLevelInput) || isNaN(cargoMassInput)) {
          alert("Make sure to enter valid information for each field!");
          event.preventDefault();
       } 
      document.getElementById('pilotStatus').innerHTML=`Pilot ${pilotNameInput}`;
      document.getElementById('copilotStatus').innerHTML=`Co-Pilot ${copilotNameInput}`;

         if(fuelLevelInput<10000){
            document.getElementById('faultyItems').style.visibility='visible';
            document.getElementById("fuelStatus").innerHTML=`Warning: Fuel too low for launch`
            document.getElementById('launchStatus').innerHTML=`Shuttle not ready for launch`;
            document.getElementById('launchStatus').style.color = "red";
            event.preventDefault();
         } 
         
         if(cargoMassInput>10000){
            document.getElementById("cargoStatus").innerHTML=`Warning: Cargo mass too high for launch`
            document.getElementById('launchStatus').innerHTML=`Shuttle not ready for launch`;
            document.getElementById('launchStatus').style.color = "red";
            event.preventDefault();
         }

         if(fuelLevelInput>10000 && cargoMassInput<10000){
            document.getElementById('launchStatus').innerHTML=`Shuttle is ready for launch`;
            document.getElementById('launchStatus').style.color = "green"
            event.preventDefault();
         }

  });  
});


fetch("https://handlers.education.launchcode.org/static/planets.json")
.then(function(response){
  return response.json();
}).then(function(json){
   let div=document.getElementById("missionTarget");
/* This block of code shows how to format the HTML once you fetch some planetary JSON!*/
div.innerHTML = `
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[3].name}</li>
   <li>Diameter: ${json[3].diameter}</li>
   <li>Star: ${json[3].star}</li>
   <li>Distance from Earth: ${json[3].distance}</li>
   <li>Number of Moons: ${json[3].moons}</li>
</ol>
<img src="${json[3].image}">
`
});

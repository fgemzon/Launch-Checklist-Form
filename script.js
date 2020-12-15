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



/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${Mars}</li>
   <li>Diameter: ${6779 km}</li>
   <li>Star: ${Sol}</li>
   <li>Distance from Earth: ${225 million km from Earth}</li>
   <li>Number of Moons: ${2}</li>
</ol>
<img src="${https://mars.nasa.gov/system/resources/detail_files/7808_global-color-views-mars-PIA00407-full2.jpg}">
*/

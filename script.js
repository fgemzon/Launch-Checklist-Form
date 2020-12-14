// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   let inputs = document.getElementById('faultyItems');
   form.addEventListener("submit", function(event) {
       let pilotNameInput = document.querySelector("input[name=pilotName]").value;
       let copilotNameInput = document.querySelector("input[name=copilotName]").value;
       let fuelLevelInput = document.querySelector("input[name=fuelLevel]").value;
       let cargoMassInput = document.querySelector("input[name=cargoMass]").value;
       if (pilotNameInput === "" || copilotNameInput === "" || isNaN(fuelLevelInput) || isNaN(cargoMassInput) ) {
          alert("Make sure to enter valid information for each field!");
          inputs.style.visibility = 'hidden';
          
       }else{
          inputs.style.visibility = 'visible';
          document.getElementById('pilotStatus').innerHTML=`Pilot ${pilotNameInput}`;
          document.getElementById('coPilotStatus').innerHTML=`Co-Pilot ${copilotNameInput}`;
          
         event.preventDefault();
       }
  });  
});



/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${Mars}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

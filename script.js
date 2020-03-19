window.addEventListener("load", function(){
   let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {
      let piName = document.getElementById("pilotName");
      let coPiName = document.querySelector("input[name=copilotName]");
      let fuel = document.querySelector("input[name=fuelLevel");
      let mass = document.querySelector("input[name=cargoMass");

      if (piName.value === "" || coPiName.value === "" || fuel.value === "" || mass.value === "") {
         alert("All Fields Required");
         event.preventDefault();
      }

      if (typeof piName.value !== "string") {
         alert("Invalid Input.");
         event.preventDefault();
      }

      // if (Number.isNaN(piName.value)) || (Number.isNaN(coPiName.value)) {
      //    alert("Invalid Entry.");
      //    event.preventDefault();
         
      // }
      

      // if (Number.isNaN(fuel) || (Number.isNaN(mass)) {
      //    alert("Invalid Entry.");
      //    event.preventDefault();
      // }
   })
})

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

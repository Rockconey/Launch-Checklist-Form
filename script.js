window.addEventListener("load", function(){
   let form = document.querySelector("form");
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        response.json().then(function(json) {
          
           console.log(json[5]);
           let jsonObj = json;

           const div = document.getElementById("missionTarget");
         //   let randInd =   
         //   jsonObj[Math.floor(Math.random() * arr.length)];

           div.innerHTML = 

            `<h2>Mission Destination</h2>
           <ol>
               <li>Name: ${jsonObj[5].name}</li>
               <li>Diameter: ${jsonObj[5].diameter}</li>
               <li>Star: ${jsonObj[5].star}</li>
               <li>Distance from Earth: ${jsonObj[5].distance}</li>
               <li>Number of Moons: ${jsonObj[5].moons}</li>           
           </ol>
           <img src="${jsonObj[5].image}">
           <br>
           <button id="random">Choose Random Destination</button>`
           ;

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
            

   form.addEventListener("submit", function(event) {
      let piName = document.getElementById("pilotName");
      let coPiName = document.querySelector("input[name=copilotName]");
      let fuel = document.querySelector("input[name=fuelLevel");
      let mass = document.querySelector("input[name=cargoMass");

      let updateInfo = document.getElementById("faultyItems");
      let readyPilot = document.getElementById("pilotStatus");
      let readyCoPilot = document.getElementById("copilotStatus");
      let fuelStat = document.getElementById("fuelStatus");
      let launchStat = document.getElementById("launchStatus");

      

      if (piName.value === "" || coPiName.value === "" || fuel.value === "" || mass.value === "") {
         alert("All Fields Required");
         event.preventDefault();
      }

      if (isNaN(piName.value)) {
         console.log("Good to go.");
      } else {
         alert("Invalid Input.");
         event.preventDefault();
      }

      if (isNaN(coPiName.value)) {
         console.log("Good to go.");
      } else {
         alert("Invalid Input.");
         event.preventDefault();
      } 
      

      if (isNaN(fuel.value) || (isNaN(mass.value))) {
         alert("Invalid Entry.");
         event.preventDefault();
        
      }

      if (fuel.value < 10000) {
         event.preventDefault();
         
         document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey."
        
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch."
         document.getElementById("launchStatus").style.color = "red";
         
         document.getElementById("faultyItems").style.visibility = "visible";
      } else {
         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch.";
         document.getElementById("launchStatus").style.color = "green";
         event.preventDefault();
      }

      if (mass.value > 10000) {
         event.preventDefault();
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off."
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch."
         document.getElementById("launchStatus").style.color = "red";

      }else {
         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch.";
         document.getElementById("launchStatus").style.color = "green";
         event.preventDefault();
      }

      

      readyPilot.innerHTML = (`${piName.value} Ready`);
      readyCoPilot.innerHTML = (`${coPiName.value} Ready`);
      
      
      
         })
      })
   })
})

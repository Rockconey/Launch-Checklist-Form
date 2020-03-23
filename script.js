window.addEventListener("load", function(){

   let form = document.querySelector("form");

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        response.json().then(function(json) {
          
           const random = document.getElementById("random");
           const div = document.getElementById("missionTarget");

           random.addEventListener("click", function() {

               let randInd = json[Math.floor(Math.random() * json.length)];

               div.innerHTML = 

                `<h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${randInd.name}</li>
                  <li>Diameter: ${randInd.diameter}</li>
                  <li>Star: ${randInd.star}</li>
                  <li>Distance from Earth: ${randInd.distance}</li>
                  <li>Number of Moons: ${randInd.moons}</li>           
               </ol>
               <img src="${randInd.image}">
               <br>`;
            })
           
            

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
         let cargoStat = document.getElementById("cargoStatus")

      

         if (piName.value === "" || coPiName.value === "" || fuel.value === "" || mass.value === "") {
            alert("All Fields Required");
            event.preventDefault();
         }

      

         if (!isNaN(coPiName.value) || !isNaN(piName.value)) {
            alert("Invalid Input.");
            event.preventDefault();
         } 

         if (isNaN(fuel.value) || (isNaN(mass.value))) {
            alert("Invalid Input.");
            event.preventDefault();
        
         }

         if (fuel.value < 10000) {
            event.preventDefault();
            fuelStat.innerHTML = "There is not enough fuel for the journey.";        
            launchStat.innerHTML = "Shuttle not ready for launch.";
            launchStat.style.color = "red";
            updateInfo.style.visibility = "visible";        
         }

         if (mass.value > 10000) {
            event.preventDefault();
            launchStat.innerHTML = "Shuttle not ready for launch.";
            launchStat.style.color = "red";
            updateInfo.style.visibility = "visible";
            cargoStat.innerHTML = "There is too much mass for the shuttle to take off."
         }

         if (isNaN(coPiName.value) && isNaN(piName.value) && !isNaN(fuel.value) && !isNaN(mass.value) && fuel.value >=10000 && mass.value <= 10000) {
            launchStat.innerHTML = "Shuttle is ready for launch"
            launchStat.style.color = "green";
         }

      

         readyPilot.innerHTML = (`${piName.value} Ready`);
         readyCoPilot.innerHTML = (`${coPiName.value} Ready`);
      
      
      
         })
      })
   })
})

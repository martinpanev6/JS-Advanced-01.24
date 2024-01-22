function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   const textAreRef = document.querySelector('textarea');
   const bestRestarauntInfo = document.querySelector('#bestRestaurant p'); 
   const bestRestarauntWorkers = document.querySelector('#workers p');

   function onClick () {
      
      let data = JSON.parse(textAreRef.value);
      let result = {};

      for(let line of data){
         let [name, workers] = line.split(' - ');

         if(!result.hasOwnProperty(name)){
            result[name] = {
               avgSalary: 0,
               bestSalary: 0,
               workers: []
            };
         }
         let currentWorkers = getArrWorkers(workers, result[name].workers);
         result[name].workers = sortWorkers(currentWorkers);
         updateSalary(result[name]);
      }
      let bestRestaraunt = findBestRestaraunt(result);
      appendBestRestaurnat(bestRestaraunt);
      appendBestWorkers(bestRestaraunt[1].workers);
   }

   function appendBestWorkers(workers){
      let buff = '';
      workers.forEach(worker => buff += `Name: ${worker.name} With Salary: ${worker.salary} `)
      bestRestarauntWorkers.textContent = buff;
   }

   function appendBestRestaurnat(data){
      bestRestarauntInfo.textContent = `Name: ${data[0]} Average Salary: ${data[1].avgSalary.toFixed(2)} Best Salary: ${data[1].bestSalary.toFixed(2)}`
   }

   function findBestRestaraunt(restaraunts){
      return Object.entries(restaraunts).sort((a, b) => {
        return b[1].avgSalary - a[1].avgSalary
      })[0];
   }

   function sortWorkers(workers){
      return workers.sort((workerA, workerB) => workerB.salary - workerA.salary);
   }

   function updateSalary(restaraunt){
      let sumOfSalary = 0;
      let bestSalary = 0;
      restaraunt.workers.forEach(worker => {
         sumOfSalary += worker.salary;
         if(bestSalary < worker.salary){
            bestSalary = worker.salary;
         }
      });
      restaraunt.bestSalary = bestSalary;
      restaraunt.avgSalary = sumOfSalary / restaraunt.workers.length;
   }

   function getArrWorkers(workersData, existedWorkers){
      let arrOfWorkers = workersData.split(', ');
      for(let tokens of arrOfWorkers){
         let [name, salary] = tokens.split(' ');
         salary = Number(salary);
         existedWorkers.push({
            name,
            salary
         });
      }
      return existedWorkers;
   }
}
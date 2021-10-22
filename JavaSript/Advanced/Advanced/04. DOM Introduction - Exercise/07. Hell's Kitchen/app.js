function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const input = JSON.parse(document.querySelector('#inputs textarea').value);
      const result = [];

      for (const line of input) {
         let [restaurant, workers] = line.split(' - ');

         workers = workers.split(', ').map(w => {
            let [worker, salary] = w.split(' ');

            return {
               name: worker,
               salary: +salary
            };
         });

         const restExist = result.find(r => r.name === restaurant);
         if (restExist) {
            restExist.workers = restExist.workers.concat(workers);
         } else {
            result.push({
               name: restaurant,
               workers: workers
            });
         }
      }

      for (let i = 0; i < result.length; i++) {
         const restaurant = result[i];
         restaurant.order = i;
         restaurant.avgSalary = restaurant.workers.reduce((acc, worker) => acc + worker.salary, 0) / restaurant.workers.length;
         restaurant.maxSalary = Math.max(...restaurant.workers.map(worker => worker.salary));
      }

      result.sort((a, b) => b.avgSalary - a.avgSalary || a.order - b.order);
      result[0].workers.sort((a, b) => b.salary - a.salary);
      const restaurant = result[0];

      document.querySelector('#bestRestaurant p').textContent = `Name: ${restaurant.name} Average Salary: ${restaurant.avgSalary.toFixed(2)} Best Salary: ${restaurant.maxSalary.toFixed(2)}`;
      document.querySelector('#workers p').textContent = restaurant.workers.map(worker => `Name: ${worker.name} With Salary: ${worker.salary}`).join(' ');
   }
}
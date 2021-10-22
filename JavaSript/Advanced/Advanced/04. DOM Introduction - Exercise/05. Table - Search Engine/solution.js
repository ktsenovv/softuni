function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchField = document.getElementById('searchField').value.toLowerCase();
      const items = document.querySelectorAll('tbody tr');

      for (const item of Array.from(items)) {
         const itemContent = item.textContent.toLowerCase();

         if (itemContent.includes(searchField)) {
            item.classList.add('select');
         } else {
            item.classList.remove('select');
         }
      }
   }
}
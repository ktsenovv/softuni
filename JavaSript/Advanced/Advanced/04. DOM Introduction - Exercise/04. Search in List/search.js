function search() {
   const towns = document.getElementsByTagName('li');
   const searchText = document.getElementById('searchText').value;
   const result = document.getElementById('result');

   let matches = 0;
   for (const town of towns) {
      const townName = town.textContent;

      if (townName.includes(searchText)) {
         town.innerHTML = `<bold><u>${townName}</u></bold>`;
         matches++;
      } else {
         town.innerHTML = `${townName}`;
      }
   }

   result.textContent = `${matches} matches found`;
}
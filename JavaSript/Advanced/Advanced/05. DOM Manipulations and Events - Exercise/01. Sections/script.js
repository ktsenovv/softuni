function create(words) {
   const output = document.getElementById('content');
   output.addEventListener('click', onClick);

   for (let word of words) {
      const divEl = document.createElement('div');
      const pEl = document.createElement('p');
      pEl.style.display = 'none';
      pEl.textContent = word;
      divEl.appendChild(pEl);
      output.appendChild(divEl);
   }

   function onClick(e) {
      const element = e.target;
      if (element.tagName == 'DIV' && element != output) {
         element.children[0].style.display = '';
      }
   }
}
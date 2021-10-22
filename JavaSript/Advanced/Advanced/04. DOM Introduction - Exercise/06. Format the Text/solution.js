function solve() {
  const input = document.getElementById('input').value;
  const output = document.getElementById('output');

  let text = input.split('.').filter(x => x.length > 0);

  for (let i = 0; i < text.length; i += 3) {
    let sentences = [];
    
    for (let j = 0; j < 3; j++) {
      console.log(i + j);
      if (text[i + j]) {
        sentences.push(text[i + j]);
      }
    }

    let paragraph = sentences.join('. ') + '.';
    output.innerHTML += `<p>${paragraph}</p>`;
  }
}
function solve() {
  const input = document.getElementById('text').value;
  const type = document.getElementById('naming-convention').value;

  const toCamelCase = (text) => {
    return text.split(' ').map((word, index) => {
      if(index == 0)  {
        return word.toLowerCase();
      }
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
  };

  const toPascalCase = (text) => text.split(' ').map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join('');

  let result = '';
  if (type == 'Camel Case') {
    result = toCamelCase(input);
  } else if (type == 'Pascal Case') {
    result = toPascalCase(input);
  } else {
    result = 'Error!';
  }

  document.getElementById('result').innerHTML = result;
}
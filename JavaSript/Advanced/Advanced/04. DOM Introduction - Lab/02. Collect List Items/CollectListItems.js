function extractText() {
    const elements = document.querySelectorAll('#items li');
    
    const result = [...elements].map(x => x.textContent).join('\n');

    document.getElementById('result').value = result;
}
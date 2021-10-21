function extract(content) {
    const element = document.getElementById(content).textContent;
    const pattern = /\(([^)]+)\)/g;
    const result = [];

    let match = pattern.exec(element);
    while (match) {
        result.push(match[1]);
        match = pattern.exec(element);
    }

    return result.join('; ');
}
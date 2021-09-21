function rightPlace(example, replace, match) {
    let modified = example.replace('_', replace);
    let output = (modified === match) ? 'Matched' : 'Not Matched';
    console.log(output);
}
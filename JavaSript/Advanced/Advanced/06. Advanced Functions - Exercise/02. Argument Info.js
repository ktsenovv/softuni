function argumentInfo(...args) {
    const typeCounter = {};

    args.forEach(v => {
        console.log(`${typeof v}: ${v}`);
        !typeCounter[typeof v] ? typeCounter[typeof v] = 1 : typeCounter[typeof v] += 1;
    });

    Object.keys(typeCounter).sort((a, b) => typeCounter[b] - typeCounter[a]).forEach(key => console.log(`${key} = ${typeCounter[key]}`));
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });

console.log();

argumentInfo({ name: 'bob'}, { name: 'pesho'}, 3.333, 9.999, 'dog');
function fancyBarcodes(input) {
    let n = Number(input.shift());

    let pattern = /@#+([A-Z][A-Za-z\d]{4,}[A-Z])@#+/;

    for (let i = 0; i < n; i++) {
        let match = pattern.exec(input[i]);

        if (match != null) {
            nums = match[1].replace(/\D+/g, '');
            
            if (nums == '') {
                console.log('Product group: 00');
            } else {
                console.log('Product group: ' + nums);
            }
        } else {
            console.log('Invalid barcode');
        }
    }
}

fancyBarcodes([
    "3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"
]);

console.log();

fancyBarcodes([
    "6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"
]);
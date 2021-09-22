function cone(r, h) {
    console.log(`volume = ${(((Math.PI * r * r) * h) / 3).toFixed(4)}`);
    console.log(`area = ${(Math.PI * r * (r + Math.sqrt(r * r + h * h))).toFixed(4)}`);
}

cone(3, 5);
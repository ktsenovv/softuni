function areaVolumeCalculator(area, vol, input) {
    const objects = JSON.parse(input);

    function calculate(obj) {
        const areaObj = Math.abs(area.call(obj));
        const volumeObj = Math.abs(vol.call(obj));
        return {
            area: areaObj,
            volume: volumeObj
        }
    }

    return objects.map(calculate);
}

console.log(areaVolumeCalculator(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
));

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};
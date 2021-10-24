function attachEventsListeners() {
    const [inputField, outputField] = document.querySelectorAll('input[type="text"]');
    const [input, output] = document.getElementsByTagName('select');
    const button = document.getElementById('convert');

    button.addEventListener('click', convert);

    const ratios = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    function convert() {
        let valueMeters = inputField.value * ratios[input.value];
        let convertedValue = valueMeters / ratios[output.value];
        outputField.value = convertedValue;
    }
}
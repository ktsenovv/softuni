function attachGradientEvents() {
    const output = document.getElementById('result');
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);

    function gradientMove(e) {
        const offset = Math.floor(e.offsetX / e.target.clientWidth * 100);
        output.textContent = `${offset}%`;
    }

    function gradientOut() {
        output.textContent = '';
    }
}
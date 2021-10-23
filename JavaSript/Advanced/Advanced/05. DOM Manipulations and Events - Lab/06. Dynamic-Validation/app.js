function validate() {
    document.getElementById('email').addEventListener('change', emailValidate);

    function emailValidate(e) {
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
        const output = e.target;

        if (pattern.test(output.value)) {
            output.classList.remove('error');
        } else {
            output.classList.add('error');
        }
    }
}
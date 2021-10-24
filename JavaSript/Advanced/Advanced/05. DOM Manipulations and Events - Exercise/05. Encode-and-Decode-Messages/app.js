function encodeAndDecodeMessages() {
    const buttons = document.getElementsByTagName('button');
    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    function encode(e) {
        const element = e.target;
        const textarea = element.parentElement.querySelector('textarea');
        const textareaDec = buttons[1].parentElement.querySelector('textarea');

        const encoded = textarea.value
            .split('')
            .map(c => String.fromCharCode(c.charCodeAt(0) + 1))
            .join('');
        
        textareaDec.value = encoded;
        textarea.value = '';
    }

    function decode(e) {
        const element = e.target;
        const textarea = element.parentElement.querySelector('textarea');

        textarea.value = textarea.value
            .split('')
            .map(c => String.fromCharCode(c.charCodeAt(0) - 1))
            .join('');
    }
}
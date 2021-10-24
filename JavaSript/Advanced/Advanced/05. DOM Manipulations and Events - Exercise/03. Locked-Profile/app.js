function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
        .forEach(b => b.addEventListener('click', onToggle));

    function onToggle(e) {
        const element = e.target;
        const isActive = element.parentElement.querySelector('input[type="radio"][value="unlock"]').checked;

        if (isActive) {
            const moreInfo = Array
                .from(element.parentElement.querySelectorAll('div'))
                .find(d => d.id.includes('HiddenFields'));

            if (element.textContent == 'Show more') {
                element.textContent = 'Hide it';
                moreInfo.style.display = 'block';
            } else {
                element.textContent = 'Show more';
                moreInfo.style.display = '';
            }
        }
    }
}
function toggleText() {
    let button = document.querySelector('.toggle-text-button');
    let text = document.querySelector('#text');
    function toggle() {
        if (text.hasAttribute('hidden')) {
            text.removeAttribute('hidden');
        } else {
            text.setAttribute('hidden', '');
        }
    }
    button.addEventListener('click', toggle);
}

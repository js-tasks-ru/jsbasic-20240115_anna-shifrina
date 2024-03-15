function hideSelf() {
    let button = document.querySelector('.hide-self-button');
    function hide() {
        button.setAttribute('hidden','true');
    };
    button.addEventListener('click', hide);
}

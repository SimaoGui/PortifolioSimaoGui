document.addEventListener('DOMContentLoaded', () => {

    let titleH1 = document.getElementById("title");
    let textP1 = document.getElementById("paragrafo");
    let imgSetup = document.getElementById("imgSetup");

    ScrollReveal({
        reset: false,
        distance: '100px',
        duration: 1000,
        delay: 200,
        opacity: 0,
    });

    ScrollReveal().reveal(titleH1, {origin: 'left', easing: 'ease-in-out' });
    ScrollReveal().reveal(textP1, {origin: 'bottom', easing: 'ease-in-out' });
    ScrollReveal().reveal(imgSetup, {origin: 'top', easing: 'ease-in-out' });

});
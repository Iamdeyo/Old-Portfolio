
const fadeElements = document.querySelectorAll('.fadeElements');

let i = 0
while (i < fadeElements.length) {
    fadeElements[i].classList.add('startfade');
    i+=1
}

function scrollFadeup() {
    fadeElements.forEach((fet) => {
        conT = fet.getBoundingClientRect().top;
        if (conT <= document.documentElement.clientHeight * 0.9) {
            fet.classList.add('fadeup');
        }
    })
    
}
// scrollFadeup();
window.addEventListener('scroll', scrollFadeup)



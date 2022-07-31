// active Navbar on scroll control
const content = document.querySelectorAll('.contents');
const navLinks = document.querySelectorAll('nav a');

let current = '';

window.addEventListener('scroll', NavLinksOnScroll);

function NavLinksOnScroll() {
    
    content.forEach((cont) => {
        const contentTop = cont.offsetTop;

        if (window.scrollY > contentTop - 80) {
            
            current = cont.getAttribute('id');
        }
        
    })

    navLinks.forEach((navli)=>{
        navli.classList.remove('activelink');
        if (navli.classList.contains(current + 'links')) {
            navli.classList.add('activelink');
        }
    })

    // --- project counter activation on scroll----//
    if (document.querySelector('.aboutMelinks').classList.contains('activelink')) {
        startInterval()
    }
    //
}

// mobile view menu and hamburger control //

navLinks.forEach((hideNav) => {
    hideNav.addEventListener('click', openClose)
})

const hamburger = document.getElementById('hamburger');
const navbars = document.getElementById('navbars');

hamburger.addEventListener('click', openClose);
function openClose() {
    navbars.classList.toggle('navAppear');
    hamburger.classList.toggle('hamCross');
}

//-------------------------------------------------------//
// ------ Home page Animation ----------------------------//

let divheader = [document.querySelector('div#homeOne').innerHTML, document.querySelector('div#homeTwo').innerHTML];

let headernumber = 0

changer()
setInterval(changer, 7000);

function changer() {

    if (headernumber < divheader.length) {
        document.querySelector('div#home').innerHTML = divheader[headernumber];
        headernumber++
    } else {
        headernumber = 0;
    }
    
}
// -----------------------------------------------------------//
// --- project counter----//

const projectCounter = document.getElementById('projectComplete');
let counter = 0;
function Procounter() {
    counter+=1
    return counter;
}

projectCounter.innerText = 0;

function startInterval() {
    let intOne = setInterval(protimer, 500);
    function protimer() {
        if (counter < 50) {
            projectCounter.innerText = Procounter();
        } else {
            clearInterval(intOne);
        }
    }
}
// ------------ FadeUp Animation onScroll ---//
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
//---------------------------------------------------//








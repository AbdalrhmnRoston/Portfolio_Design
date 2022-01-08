// Efects Landing On Reload

setTimeout(textLandOnReload, 2000)

function textLandOnReload () {
    let textLanding = document.querySelector('.landing .text');
    textLanding.classList.add('text-show');
}

let header = document.getElementsByTagName('header')[0];

window.onscroll = function () {
    if (window.pageYOffset > 600) {
        header.classList.add('fixed');
    } if (window.pageYOffset <= 600) {
        header.classList.remove('fixed');
    }
}

// Mega Menu //

// Show And Hiedin Mega Menu
let masterLinks = document.querySelectorAll('.master-link');
let allLinksMega = document.querySelectorAll('.mega-menu-1 li a');
let megaMenu = document.querySelector('.mega-menu-1');

masterLinks.forEach((el) => {
    el.addEventListener('click', () => {
        let classMega = el.getAttribute('data-target');
        if (classMega) {
            document.querySelector(`.${classMega}`).classList.toggle('mega-active');
        }
    })
})   

// Close Mega Menu On Click Any Link

allLinksMega.forEach((el) => {
    el.addEventListener('click', () => megaMenu.classList.remove('mega-active'));
})


// Section Our Skills //

let skillFill = document.querySelectorAll('.our-skills .skill .row span');
let skillProg = document.querySelectorAll('.our-skills .skill .row');
let sectionOurSkills = document.getElementById('our-skills');


function fillSkills () {
    skillFill.forEach((el) => {
    el.style.width = el.parentElement.dataset.progres;
    })
}

// Auto Fill Skills Bar From Git Scroll Postion
window.addEventListener('scroll', () => {window.pageYOffset >= sectionOurSkills.offsetTop - sectionOurSkills.offsetHeight / 2 ? fillSkills() : '';});

// Auto Create Element With Class Name "garnesh-circel"

let garneshCircel = document.querySelectorAll('.garnesh-circel');

garneshCircel.forEach((el) => createCircel(el));

function createCircel (el) {
    for (let i = 0; i <= 131; i++) {
        let span = document.createElement('span');
        el.appendChild(span);
    }
}

// Section Top Videos //

let selectVideo = document.querySelectorAll('.top-videos .choose-video ul li');
let videos = document.querySelectorAll('.top-videos .show-video ul li img');


selectVideo.forEach((el) => {
    el.addEventListener('click', () => {
        // Add Class Active From Target Elements
        toggeleClassActive(selectVideo, el);
        chooseTarget(videos, el);
    })
})

function toggeleClassActive (arr, el) {
    // Remove Class Active From All Array
    arr.forEach((e) => {
        e.classList.remove("active");
    });
    // Add Class Active From Target Elemente
    el.classList.add('active');
}

function chooseTarget (arr, el) {
    arr.forEach((e) => {
        // Remove All Elements
        e.classList.add('none');
        // Show Terget Element
        if (el.getAttribute('data-target') == e.getAttribute('src')) {
            e.classList.remove('none');
        }
    })
}

// Button Go Top //

let btnGoTop = document.querySelector('.go-top');

// Click Button Go Top 
btnGoTop.addEventListener('click', () => window.scrollTo(0, 0));

window.addEventListener('scroll', () => {
    // Show And Hiden Button Go Top
    controlBtnTop();
});

function controlBtnTop () {
    let sections = document.querySelectorAll('section')
    // If the user has reached a section 3 on the page
    if (window.pageYOffset >= sections[2].scrollHeight) {
        btnGoTop.classList.remove('none');
    } else {
        btnGoTop.classList.add('none');
    }
}
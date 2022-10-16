// Loader página
const overlay = document.querySelector(".overlay");

window.addEventListener('load', function () {
    overlay.style.display = 'none';
})

// Hamburger menu
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click', function () {
        close();
    })
})

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close() {
    mainMenu.style.top = '-100%';
}


// Logo setup

const mouseEnterHandle = (event) => {
    if (event.target.closest('p')) {
        event.target.closest('p').querySelectorAll('span').forEach(el => {
            el.style.width = el.scrollWidth + 'px';
        })
    }
}

const mouseOutHandle = (event) => {
    if (event.target.closest('p')) {
        event.target.closest('p').querySelectorAll('span').forEach(el => {
            el.style.width = 0;
        })
    }
}

document.addEventListener('mouseover', (event) => mouseEnterHandle(event))
document.addEventListener('mouseout', (event) => mouseOutHandle(event))

document.removeEventListener('mouseover', (event) => mouseEnterHandle(event))
document.removeEventListener('mouseout', (event) => mouseOutHandle(event))


// To section button

const toSection = document.querySelector('.to-section');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        toSection.classList.add('active');
    } else {
        toSection.classList.remove('active');
    }
})


// Navbar on Scroll
window.addEventListener("scroll", () => {
    let header = document.querySelector("#header");
    header.classList.toggle('sticky', window.scrollY > 0);
})

// Medias on scroll
const medias = document.querySelector('.medias');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        medias.classList.add('active');
    } else {
        medias.classList.remove('active');
    }
})

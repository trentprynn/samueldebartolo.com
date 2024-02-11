console.log('%cDeveloped by Trent Prynn, trentprynn@gmail.com', 'color: #f9f9f9; font-weight: 500; background: #333; padding: 5px; border-radius: 2px; font-family: Arial, sans-serif;');

setVH();

function debounce(func, wait) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), wait);
    };
}

window.addEventListener('resize', debounce(function() {
    setVH();
}, 250));

window.addEventListener('load', setVH);

function setVH() {
    document.body.style.height = window.innerHeight + 'px';
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
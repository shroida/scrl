// (function () {
//     function scrollH(e) {
//         // Prevent scroll default
//         e.preventDefault();
//         e = window.event || e;
//         let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
//         document.querySelector('.horizontal-scroll').scrollLeft -= (delta * 40);
//     }
//     if (document.querySelector('.horizontal-scroll').addEventListener) {
//         document.querySelector('.horizontal-scroll').addEventListener('mousewheel', scrollH, false);
//         document.querySelector('.horizontal-scroll').addEventListener('DOMMouseScroll', scrollH, false);
//     }
// })();
const parentscroll = document.querySelector('.parentscroll');
let scrollLine = document.querySelector('.scroll');

parentscroll.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (parentscroll.scrollLeft + e.deltaY > parentscroll.scrollWidth - parentscroll.clientWidth) {
        // Reached the end of horizontal scrolling
        parentscroll.scrollLeft = parentscroll.scrollWidth - parentscroll.clientWidth;
        window.scrollBy({
            top: e.deltaY,
            behavior: 'smooth'
        });
    } else {
        parentscroll.scrollLeft += e.deltaY;
        scrollLine.style.width = (parentscroll.scrollLeft / 2) + 'px';
    }
});
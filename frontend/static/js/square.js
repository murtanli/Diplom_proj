document.addEventListener("DOMContentLoaded", function () {
    const scrollingSquare = document.getElementById('square_front');
    const scrollingSquare2 = document.getElementById('square_front2');
    let lastScrollTop = 0;
    let lastScrollTop2 = 0;

    window.addEventListener("scroll", function () {
        const st = window.scrollY;
    
        if (scrollingSquare) {
            if (st > lastScrollTop) {
                // Прокрутка вниз
                const newTop = parseInt(scrollingSquare.style.top || '0') + 2;
                scrollingSquare.style.top = `${Math.min(newTop, 20)}px`;
            } else {
                // Прокрутка вверх
                const newTop = parseInt(scrollingSquare.style.top || '0') - 2;
                scrollingSquare.style.top = `${Math.max(newTop, -20)}px`;
            }
            lastScrollTop = st;
        }
    
        if (scrollingSquare2) {
            if (st > lastScrollTop2) {
                // Прокрутка вниз
                const newTop = parseInt(scrollingSquare2.style.top || '0') + 2;
                scrollingSquare2.style.top = `${Math.min(newTop, 20)}px`;
            } else {
                // Прокрутка вверх
                const newTop = parseInt(scrollingSquare2.style.top || '0') - 2;
                scrollingSquare2.style.top = `${Math.max(newTop, -20)}px`;
            }
            lastScrollTop2 = st;
        }
    });
    
});

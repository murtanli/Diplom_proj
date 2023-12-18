// Функция для проверки, долистал ли пользователь до элемента
/* function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Обработчик события прокрутки
window.addEventListener('scroll', function () {
    var checkElement = document.querySelector('.block1');
    var header = document.querySelector('header');
    var links = document.querySelectorAll('.links a');
    if (isElementInViewport(checkElement)) {
        header.style.backgroundColor = 'rgba(144, 250, 179, 0.4)';

        links.forEach(function(link) {
            link.style.color = "black";
        })

        console.log('Пользователь долистал до элемента "check-element"');
    } else {
        links.forEach(function(link) {
            link.style.color = "white";
        })
        header.style.backgroundColor = 'transparent';
    }
    
}); */

// Получите ссылку на элемент
document.addEventListener("DOMContentLoaded", function() {
    var element = document.querySelector('header');
    var links = document.querySelectorAll('.links a');
    
    // Добавьте обработчик события прокрутки
    window.addEventListener("scroll", function() {
        // Получите текущее положение прокрутки
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;

        if (scrollPosition > 800) {
            links.forEach(function(link) {
                link.style.color = "black";
            })
            element.style.backgroundColor = 'rgba(144, 250, 179, 0.8)';
        } else if (scrollPosition >= 400 && scrollPosition < 800) {
            links.forEach(function(link) {
                link.style.color = "white";
            })
            element.style.backgroundColor = 'transparent';
        }
        if (scrollPosition < 200) {
            element.style.top = '0';
        } else {
            element.style.top = '-40px';
        }
    });
});




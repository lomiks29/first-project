document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        // 1. Обработчик клика по кнопке бургера
        menuToggle.addEventListener('click', (event) => {
            // Предотвращаем всплытие события, чтобы клик по кнопке не срабатывал как "клик вне меню"
            event.stopPropagation(); 
            
            navMenu.classList.toggle('active');
            const isOpen = navMenu.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isOpen);
        });

        // 2. Обработчик клика по всему документу
        document.addEventListener('click', (event) => {
            // Проверяем, открыто ли меню
            const isOpen = navMenu.classList.contains('active');

            if (isOpen) {
                // event.target — это элемент, на который физически кликнул пользователь.
                // .closest() проверяет, находится ли этот элемент внутри указанного селектора.
                const isClickInsideMenu = event.target.closest('.nav-menu');
                const isClickInsideButton = event.target.closest('.menu-toggle');

                // Если кликнули НЕ по меню и НЕ по кнопке бургера — закрываем
                if (!isClickInsideMenu && !isClickInsideButton) {
                    navMenu.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    }
});

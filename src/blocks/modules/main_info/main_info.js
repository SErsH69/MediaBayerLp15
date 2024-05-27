const MainInfo = class MainInfo {
    constructor(){}
    animSvg() {
        document.addEventListener('DOMContentLoaded', function () {
            function applyAnimationWithDelay(containerSelector) {
                // Находим контейнеры, содержащие SVG с кругами
                const containers = document.querySelectorAll(containerSelector);
                
                // Проходимся по каждому контейнеру
                containers.forEach(container => {
                    // Получаем все круги внутри текущего контейнера
                    const circles = container.querySelectorAll('circle');
                    
                    // Задаем начальное значение для задержки
                    let delay = 0.1;
                    
                    // Проходимся по каждому кругу и применяем анимацию с задержкой
                    circles.forEach(circle => {
                        circle.style.opacity = 0; // Начальное состояние - невидимость
                        circle.style.animation = `fadeIn 1s ease forwards`; // Применение анимации
                        circle.style.animationDelay = `${delay}s`; // Применение задержки
                        delay += 0.1; // Увеличиваем задержку для следующего круга
                    });
                });
            }
            
            // Вызываем функцию для применения анимации к кругам в каждом блоке
            applyAnimationWithDelay('.main_info__line1');
            applyAnimationWithDelay('.main_info__line2');
        });
    }
    init() {
        this.animSvg();
    }
}

export default MainInfo;
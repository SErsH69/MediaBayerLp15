const MainPred = class MainPred {
    constructor(){}
    scrollTag() {
        document.addEventListener('DOMContentLoaded', function () {

            // Сначала получим ссылку на ваш блок
            const container = document.querySelector('.main_pred__strokes');

            // Затем создадим функцию, которая будет добавлять контент при достижении конца скролла
            function loadMoreContent() {
                // Создаем новый элемент
                const newElement = document.createElement('div');
                newElement.classList.add('main_pred__stroke');
                newElement.textContent = 'MoneYes'; // Здесь можете вставить любой ваш контент
                
                // Добавляем новый элемент в конец контейнера
                container.appendChild(newElement);
            }

            // Добавляем обработчик события прокрутки
            container.addEventListener('scroll', () => {
                // Проверяем, достигли ли мы конца контейнера
                if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
                    // Если достигли, загружаем еще контента
                    loadMoreContent();
                }
            });
        });
    }
    init() {
        this.scrollTag();
    }
}

export default MainPred;
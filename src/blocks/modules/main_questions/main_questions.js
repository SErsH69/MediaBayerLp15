const MainQues = class MainQues {
    constructor(){}
    openFaq() {
        document.addEventListener('DOMContentLoaded', function () {
            var faqBlocks = document.querySelectorAll('.main_questions__block');
            faqBlocks.forEach(function (block) {
                block.addEventListener('click', function () {
                    this.classList.toggle('isActive');
                });
            });
        });
    }
    init() {
        this.openFaq();
    }
}

export default MainQues;
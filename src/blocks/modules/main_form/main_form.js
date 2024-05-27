import noUiSlider from 'nouislider';

const MainForm = class MainForm {
    constructor(){}
    nSlider() {
        document.addEventListener('DOMContentLoaded', () => {
            var rangeSlider = document.getElementById('rangeSlider');
            var rangeSlider2 = document.getElementById('rangeSlider2');
            var rangeCostElement = document.getElementById('rangeCost');

            noUiSlider.create(rangeSlider, {
                start: [35000],
                step: 1000,
                range: {
                    'min': [1000],
                    'max': [50000]
                }
            });
            noUiSlider.create(rangeSlider2, {
                start: [8],
                range: {
                    'min': [1],
                    'max': [30]
                }
            });
        
            var rangeSliderValueElement = document.getElementById('slider-range-value');
            var rangeSliderValueElement2 = document.getElementById('slider-range-value2');
        
            function updateRangeCost() {
                var loanAmount = parseFloat(rangeSlider.noUiSlider.get());
                var loanTerm = parseFloat(rangeSlider2.noUiSlider.get());

                // Рассчитываем 7% от суммы займа
                var interest = loanAmount * 0.07;
                var totalCost = loanAmount + interest;

                // Форматируем числа с разделителями и символом рубля
                var formattedCost = totalCost.toLocaleString('ru-RU') + " ₽";

                // Обновляем значение элемента
                rangeCostElement.innerHTML = formattedCost;
            }

            rangeSlider.noUiSlider.on('update', function (values, handle) {
                var parsedValue = Math.round(parseFloat(values[handle]));
                var formattedValue = parsedValue.toLocaleString('ru-RU') + " ₽";
                rangeSliderValueElement.innerHTML = formattedValue;
                updateRangeCost();
            });
            rangeSlider2.noUiSlider.on('update', function (values, handle) {
                var parsedValue = parseFloat(values[handle]);
                var daysText = (parsedValue >= 1 && parsedValue <= 4) ? "дня" : "дней";
                var roundedValue = Math.round(parsedValue);
                rangeSliderValueElement2.innerHTML = (roundedValue == 1) ? roundedValue + " день" : roundedValue + " " + daysText;
                updateRangeCost();
            });
        });
    }
    init() {
        this.nSlider();
    }
}

export default MainForm;
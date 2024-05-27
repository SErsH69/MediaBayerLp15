import $ from 'jquery';
import 'slick-carousel';

const MainRev = class MainRev {
    constructor(){}
    initSlider() {
        document.addEventListener('DOMContentLoaded', () => {
            $('.js_main_rev').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                infinite: false,
                dots: true,
                responsive: [
                  {
                    breakpoint: 1023,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: true,
                      arrows: true
                    }
                  }
                ]
            });
        });
    }
    init() {
        this.initSlider();
    }
}

export default MainRev;
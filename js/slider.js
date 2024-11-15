class SliderController {
    slides = [];
    framestack = null;
    intervalTime = 4000;
    intervalId = null;
    currentSlide = -1;
    slideDirection = 1; // 1 o -1;
    constructor(){
        this.framestack = document.querySelector('.frametrack');
        this.slides = [...document.querySelectorAll('.frametrack .slide')];
        this.currentSlide = 0;
        this.moveToSlide(0);
    }

    moveToSlide(slideIndex) {
        if (this.intervalId) {
            clearTimeout(this.intervalId);
        }
        this.currentSlide = slideIndex;
        this.framestack.style.left = `-${(this.currentSlide*100)}vw`;
        this.tick();
    }

    tick(){
        this.intervalId = setTimeout(
            ()=>{
                if(this.currentSlide + this.slideDirection >= this.slides.length || this.currentSlide + this.slideDirection < 0){
                    this.slideDirection *= -1;
                }
                this.currentSlide += this.slideDirection;
                this.moveToSlide(this.currentSlide);
            }
            , this.intervalTime
        );
    }
}
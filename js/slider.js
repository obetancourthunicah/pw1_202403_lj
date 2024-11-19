class SliderController {
    slider = null;
    slides = [];
    framestack = null;
    intervalTime = 4000;
    intervalId = null;
    currentSlide = -1;
    slideDirection = 1; // 1 o -1;
    constructor(){
        this.slider = document.querySelector('.slider');
        this.framestack = document.querySelector('.frametrack');
        this.slides = [...document.querySelectorAll('.frametrack .slide')];
        this.currentSlide = 0;
        this.generateUI();
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
                this.moveToNext();
            }
            , this.intervalTime
        );
    }

    moveToNext(){
        if(this.currentSlide + this.slideDirection >= this.slides.length || this.currentSlide + this.slideDirection < 0){
            this.slideDirection *= -1;
        }
        this.currentSlide += this.slideDirection;
        this.moveToSlide(this.currentSlide);
    }

    generateUI(){
        let btnDerecha = document.createElement("div");
        btnDerecha.innerHTML = '&gt;';
        btnDerecha.classList.add('navigation-btn', 'navigate-right');
        btnDerecha.addEventListener('click', (e)=>{
            e.preventDefault();
            e.stopPropagation();
            this.slideDirection = 1;
            this.moveToNext();
        });

        let btnIzquierda = document.createElement("div");
        btnIzquierda.innerHTML = '&lt;';
        btnIzquierda.classList.add('navigation-btn', 'navigate-left');
        btnIzquierda.addEventListener('click', (e)=>{
            e.preventDefault();
            e.stopPropagation();
            this.slideDirection = -1;
            this.moveToNext();
        });

        this.slider.appendChild(btnIzquierda);
        this.slider.appendChild(btnDerecha);

        let contenedorNavegacion = document.createElement("div");
        contenedorNavegacion.classList.add('navigation-container');
        this.slides.forEach((_o, i)=>{
            let slideNavigate = document.createElement('div');
            slideNavigate.classList.add('navigation-index');
            slideNavigate.addEventListener('click', (e)=>{
                e.preventDefault();
                e.stopPropagation();
                this.moveToSlide(i);
            });
            contenedorNavegacion.appendChild(slideNavigate);
        });

        this.slider.appendChild(contenedorNavegacion);
    }
}
var main = function() { //главная функция

    $('.icon-menu').click(function() { /* выбираем класс icon-menu и
               добавляем метод click с функцией, вызываемой при клике */

        $('.menu').animate({ //выбираем класс menu и метод animate

            left: '0px' /* теперь при клике по иконке, меню, скрытое за
               левой границей на 285px, изменит свое положение на 0px и станет видимым */

        }, 500); //скорость движения меню в мс
        
        $('body').animate({ //выбираем тег body и метод animate

            left: '285px' /* чтобы всё содержимое также сдвигалось вправо
               при открытии меню, установим ему положение 285px */

        }, 500); //скорость движения меню в мс
    });


/* Закрытие меню */

    $('.icon-close').click(function() { //выбираем класс icon-close и метод click

        $('.menu').animate({ //выбираем класс menu и метод animate

            left: '-285px' /* при клике на крестик меню вернется назад в свое
               положение и скроется */

        }, 500); //скорость движения меню в мс
        
    $('body').animate({ //выбираем тег body и метод animate

            left: '0px' //а содержимое страницы снова вернется в положение 0px

        }, 500); //скорость движения меню в мс
    });
};
(function(){  
    
    var doc = document,
    index = 1;

    var Slider = function(){
        this.box = doc.querySelector('.carousel-container');
        this.slideBox = doc.querySelector('.carousel-slides');
        this.slides = doc.querySelectorAll('.slide');
        this.btns = doc.querySelectorAll('.btn'); 
        this.size = this.box.clientWidth;

        this.position();
        this.carousel();
    };


Slider.prototype.position = function() {
    var size = this.size;
    this.slideBox.style.transform = 'translateX('+(-index * size) + 'px)';
};

    Slider.prototype.carousel = function(){
        var i, max = this.btns.length, 
        that = this;

        for(i=0; i < max; i +=1){
            that.btns[i].addEventListener('click', Slider[that.btns[i].id].bind(null, that));
        };
    };  

        // стрелка влево
    Slider.prev = function(box) {
        box.slideBox.style.transition = "transform .3s ease-in-out";
        var size = box.size;
        index <= 0 ? false : index--;
        box.slideBox.style.transform = 'translateX('+(-index * size) + 'px)';
        box.jump();
    };

        // стрелка вправо
    Slider.next = function(box) {
        box.slideBox.style.transition = "transform .3s ease-in-out";
        var max = box.slides.length;
        var size = box.size;
        index >= max -1?false : index++;
        box.slideBox.style.transform = 'translateX('+(-index * size) + 'px)';
        box.jump();


    };

    Slider.prototype.jump = function(){
        var that = this;
        var size = this.size;
        this.slideBox.addEventListener('transitioned', function(){
            that.slides[index].id === "firstClone" ? index = 1 : index;
            that.slides[index].id === "lastClone" ? index = that.slides.length-2 : index;
            box.slideBox.style.transition = "none";
            box.slideBox.style.transform = 'translateX('+(-index * size) + 'px)';

        });


    };


    new Slider();




})();

$(document).ready(main); /* как только страница полностью загрузится, будет
               вызвана функция main, отвечающая за работу меню */
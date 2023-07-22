// ========== 各スワイパー ========== 
swiper_menu = new Swiper(
    ".swiper-menu",{
        slidesPerView:1,
        centeredSlides:true,
        loop:true,
        loopAdditionalSlides:1,
        speed:500,
        // autoplay:{
        //     delay:4000,
        //     disableOnInteraction:false
        // },
        // ナビボタンが必要なら追加
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    }
)

swiper_shop = new Swiper(
    ".swiper-shop",{
        slidesPerView:1,
        centeredSlides:true,
        loop:true,
        loopAdditionalSlides:1,
        speed:500,
        spaceBetween:20,
        autoplay:{
            delay:1500,
            disableOnInteraction:false
        },

        pagination: {
            el: '.swiper-pagination',
        },

        breakpoints: {
            // スライドの表示枚数：500px以上の場合
            768: {
                slidesPerView: 1.5,
                centeredSlides:true
            }
        }
    }
)

swiper_top = new Swiper(
    ".swiper-top",{
        slidesPerView:1,
        centeredSlides:true,
        loop:true,
        loopAdditionalSlides:1,
        speed:1000,
        autoplay:{
            delay:1500,
            disableOnInteraction:false
        },

        pagination: {
            el: '.swiper-pagination',
        }
    }
)



swiper_machine = new Swiper(
    ".swiper-machine",{
        slidesPerView:1.5,
        centeredSlides:true,
        loop:true,
        loopAdditionalSlides:1,
        speed:500,
        spaceBetween:30,
        autoplay:{
            delay:1500,
            disableOnInteraction:false
        },

        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            // スライドの表示枚数：768px以上の場合
            768: {
                slidesPerView: 2.5,
                centeredSlides:true,
                spaceBetween:50
            },
            // スライドの表示枚数：1200px以上の場合
            1700: {
                slidesPerView: 4.5,
                centeredSlides:true,
                spaceBetween:30
            }
        }
    }
)

swiper_miki = new Swiper(
    ".swiper-miki",{
        slidesPerView:2.5,
        loop:true,
        loopAdditionalSlides:1,
        speed:500,
        spaceBetween:15,
        autoplay:{
            delay:1500,
            disableOnInteraction:false
        },

        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            // スライドの表示枚数：500px以上の場合
            768: {
                slidesPerView: 4,
            },
            // スライドの表示枚数：1200px以上の場合
            1700: {
                slidesPerView: 5.5,
                centeredSlides:true,
                spaceBetween:30
            }
        }
    }
)

swiper_user = new Swiper(
    ".swiper-user",{
        slidesPerView:3.5,
        loop:true,
        centeredSlides:true,
        loopAdditionalSlides:1,
        speed:500,
        autoplay:{
            delay:1500,
            disableOnInteraction:false
        },

        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            // スライドの表示枚数：500px以上の場合
            768: {
                slidesPerView: 4,
            },
            // スライドの表示枚数：500px以上の場合
            1700: {
                slidesPerView: 6,
            }
        }
    }
)

swiper_ba = new Swiper(
    ".swiper-ba",{
        slidesPerView:1,
        loop:true,
        loopAdditionalSlides:1,
        speed:500,
        // autoplay:{
        //     delay:1500,
        //     disableOnInteraction:false
        // },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.swiper-pagination',
        }
    }
)

swiper_user02 = new Swiper(
    ".swiper-user02",{
        slidesPerView:2.1,
        loop:true,
        loopAdditionalSlides:1,
        speed:500,
        autoplay:{
            delay:1500,
            disableOnInteraction:false
        },

        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            // スライドの表示枚数：500px以上の場合
            768: {
                slidesPerView: 4,
            }
        }
    }
)

// ========== ボタン押した時の挙動（アコーディオン） ========== 
const btn01 = document.querySelector('.btn01');
const content01 = document.querySelector('.btn_content01');
const title01 = document.querySelector('.title01');
const ippan01 = document.querySelector('.ippan01');

btn01.addEventListener('click', () => {
    content01.classList.toggle('active');
    btn01.classList.toggle('active');
    title01.classList.toggle('active');
    ippan01.classList.toggle('active');
});

const btn02 = document.querySelector('.btn02');
const content02 = document.querySelector('.btn_content02');
const title02 = document.querySelector('.title02_2');
const ippan02 = document.querySelector('.ippan02');

btn02.addEventListener('click', () => {
    content02.classList.toggle('active');
    btn02.classList.toggle('active');
    title02.classList.toggle('active');
    ippan02.classList.toggle('active');
});

const btn03 = document.querySelector('.btn03');
const content03 = document.querySelector('.btn_content03');
const title03 = document.querySelector('.title03');
const ippan03 = document.querySelector('.ippan03');

btn03.addEventListener('click', () => {
    content03.classList.toggle('active');
    btn03.classList.toggle('active');
    title03.classList.toggle('active');
    ippan03.classList.toggle('active');
});

const btn04 = document.querySelector('.btn04');
const content04 = document.querySelector('.btn_content04');
const title04 = document.querySelector('.title04');
const ippan04 = document.querySelector('.ippan04');

btn04.addEventListener('click', () => {
    content04.classList.toggle('active');
    btn04.classList.toggle('active');
    title04.classList.toggle('active');
    ippan04.classList.toggle('active');
});

// ========== ハンバーガーメニューリンク押すとハンバーガーメニュー非表示 ========== 
document.querySelectorAll('.menu-content a').forEach(function(element) {
    element.addEventListener('click', function() {
        document.getElementById('menu-btn-check').checked = false;
    });
});


// ========== FVスライドショー ========== 
// PC
function slideSwitch() {
    var $active = $('.pc .slideshow .slide_content.active');
    
    if ( $active.length == 0 ) $active = $('.pc .slideshow .slide_content:last');

    var $next =  $active.next().length ? $active.next()
    : $('.pc .slideshow .slide_content:first');

    $active.addClass('last-active');

    $next.css({
        opacity: 0.0
    })
    .addClass('active')
    .animate(
        {
            opacity: 1.0
        }, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setTimeout(function() {
        slideSwitch();
        setInterval(slideSwitch, 10000);
    }, 0);
});

// SP
function slideSwitch_SP() {
    var $active = $('.sp .slideshow .slide_content.active');
    
    if ( $active.length == 0 ) $active = $('.sp .slideshow .slide_content:last');

    var $next =  $active.next().length ? $active.next()
    : $('.sp .slideshow .slide_content:first');

    $active.addClass('last-active');

    $next.css({
        opacity: 0.0
    })
    .addClass('active')
    .animate(
        {
            opacity: 1.0
        }, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setTimeout(function() {
        slideSwitch_SP();
        setInterval(slideSwitch_SP, 10000);
    }, 0);
});


// ========== スライドショーナビゲーション ========== 
// PC
function slidenav_PC() {
    var $active = $('.pc .slideshow_nav li.active');
    
    if ( $active.length == 0 ) $active = $('.pc .slideshow_nav li:last');

    var $next =  $active.next().length ? $active.next()
    : $('.pc .slideshow_nav li:first');

    $next.addClass('active')
    $active.removeClass('active');
}

$(function() {
    setTimeout(function() {
        slidenav_PC();
        setInterval(slidenav_PC, 10000);
    }, 0);
});

// SP
function slidenav_SP() {
    var $active = $('.sp .slideshow_nav li.active');
    
    if ( $active.length == 0 ) $active = $('.sp .slideshow_nav li:last');

    var $next =  $active.next().length ? $active.next()
    : $('.sp .slideshow_nav li:first');

    $next.addClass('active')
    $active.removeClass('active');
}

$(function() {
    setTimeout(function() {
        slidenav_SP();
        setInterval(slidenav_SP, 10000);
    }, 0);
});


// ========== FV時間差表示 ========== 
$(window).on('load',function() {
    window.setTimeout(dispMsg01, 1000);

    function dispMsg01(){
        //画面が読み込まれた後に動かしたいソースコードを記述
        let fv01 = document.getElementsByClassName("fv01");
        fv01[0].classList.add("fv_view_up");
        fv01[1].classList.add("fv_view_up");
        fv01[2].classList.add("fv_view_up");
        fv01[3].classList.add("fv_view_up");
        fv01[4].classList.add("fv_view_up");
        fv01[5].classList.add("fv_view_up");
    }

    window.setTimeout(dispMsg02, 2000);

    function dispMsg02(){
        //画面が読み込まれた後に動かしたいソースコードを記述
        let fv01 = document.getElementsByClassName("fv02");
        fv01[0].classList.add("fv_view_up");
        fv01[1].classList.add("fv_view_up");
        fv01[2].classList.add("fv_view_up");
        fv01[3].classList.add("fv_view_up");
        fv01[4].classList.add("fv_view_up");
        fv01[5].classList.add("fv_view_up");
    }

    window.setTimeout(dispMsg03, 100);

    function dispMsg03(){
        //画面が読み込まれた後に動かしたいソースコードを記述
        let fv01 = document.getElementsByClassName("fv03");
        fv01[0].classList.add("fv_view");
        fv01[1].classList.add("fv_view");
        fv01[2].classList.add("fv_view");
        fv01[3].classList.add("fv_view");
        fv01[4].classList.add("fv_view");
        fv01[5].classList.add("fv_view");
    }

    window.setTimeout(dispMsg04, 1500);

    function dispMsg04(){
        //画面が読み込まれた後に動かしたいソースコードを記述
        let fv01 = document.getElementsByClassName("fv04");
        fv01[0].classList.add("fv_view_up");
        fv01[1].classList.add("fv_view_up");
        fv01[2].classList.add("fv_view_up");
        fv01[3].classList.add("fv_view_up");
        fv01[4].classList.add("fv_view_up");
        fv01[5].classList.add("fv_view_up");
    }

    window.setTimeout(dispMsg05, 2000);

    function dispMsg05(){
        //画面が読み込まれた後に動かしたいソースコードを記述
        let fv01 = document.getElementsByClassName("fv05");
        fv01[0].classList.add("fv_view_up");
        fv01[1].classList.add("fv_view_up");
        fv01[2].classList.add("fv_view_up");
        fv01[3].classList.add("fv_view_up");
        fv01[4].classList.add("fv_view_up");
        fv01[5].classList.add("fv_view_up");
    }

    window.setTimeout(dispMsg06, 2500);

    function dispMsg06(){
        //画面が読み込まれた後に動かしたいソースコードを記述
        let fv01 = document.getElementsByClassName("fv06");
        fv01[0].classList.add("fv_view_up");
        fv01[1].classList.add("fv_view_up");
        fv01[2].classList.add("fv_view_up");
        fv01[3].classList.add("fv_view_up");
        fv01[4].classList.add("fv_view_up");
        fv01[5].classList.add("fv_view_up");
    }

    window.setTimeout(dispMsg07, 3000);

    function dispMsg07(){
        //画面が読み込まれた後に動かしたいソースコードを記述
        let fv01 = document.getElementsByClassName("fv07");
        fv01[0].classList.add("fv_view_up");
        fv01[1].classList.add("fv_view_up");
        fv01[2].classList.add("fv_view_up");
        fv01[3].classList.add("fv_view_up");
        fv01[4].classList.add("fv_view_up");
        fv01[5].classList.add("fv_view_up");
    }

});



// ========== スライドアップ ========== 
// 画面の高さを取得
const screenHeight = window.innerHeight;
// コンテンツの高さを取得
const apperPoint01 = screenHeight * 0.95;// -- slideinさせる高さ --
const apperPoint02 = screenHeight * 0.90;
const apperPoint03 = screenHeight * 0.85;
const apperPoint04 = screenHeight * 0.80;
const apperPoint05 = screenHeight * 0.75;

window.addEventListener("scroll", ()=> {
    const slideup01 = document.getElementsByClassName("slideup01");// -- slideup --
    
    for (let i = 0; i < slideup01.length; i++) {
        const element = slideup01[i];
        // 要素の画面上端からの距離
        const elementHeightTotop = element.getBoundingClientRect().top;
        
        if(elementHeightTotop < apperPoint01){
        element.classList.add("slideup_active");
        element.classList.remove("slideup_negative");
        }else {
        element.classList.add("slideup_negative");
        element.classList.remove("slideup_active");
        }
    }

    const slideup02 = document.getElementsByClassName("slideup02");// -- slideup --
    
    for (let i = 0; i < slideup02.length; i++) {
        const element = slideup02[i];
        // 要素の画面上端からの距離
        const elementHeightTotop = element.getBoundingClientRect().top;
        
        if(elementHeightTotop < apperPoint02){
        element.classList.add("slideup_active");
        element.classList.remove("slideup_negative");
        }else {
        element.classList.add("slideup_negative");
        element.classList.remove("slideup_active");
        }
    }

    const slideup03 = document.getElementsByClassName("slideup03");// -- slideup --
    
    for (let i = 0; i < slideup03.length; i++) {
        const element = slideup03[i];
        // 要素の画面上端からの距離
        const elementHeightTotop = element.getBoundingClientRect().top;
        
        if(elementHeightTotop < apperPoint03){
        element.classList.add("slideup_active");
        element.classList.remove("slideup_negative");
        }else {
        element.classList.add("slideup_negative");
        element.classList.remove("slideup_active");
        }
    }

    const slideup04 = document.getElementsByClassName("slideup04");// -- slideup --
    
    for (let i = 0; i < slideup04.length; i++) {
        const element = slideup04[i];
        // 要素の画面上端からの距離
        const elementHeightTotop = element.getBoundingClientRect().top;
        
        if(elementHeightTotop < apperPoint04){
        element.classList.add("slideup_active");
        element.classList.remove("slideup_negative");
        }else {
        element.classList.add("slideup_negative");
        element.classList.remove("slideup_active");
        }
    }

    const slideup05 = document.getElementsByClassName("slideup05");// -- slideup --
    
    for (let i = 0; i < slideup05.length; i++) {
        const element = slideup05[i];
        // 要素の画面上端からの距離
        const elementHeightTotop = element.getBoundingClientRect().top;
        
        if(elementHeightTotop < apperPoint05){
        element.classList.add("slideup_active");
        element.classList.remove("slideup_negative");
        }else {
        element.classList.add("slideup_negative");
        element.classList.remove("slideup_active");
        }
    }
})
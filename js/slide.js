// 슬라이드 스크립트
$('.slide-1').click(function(){
    cssPlus(0)
});
$('.slide-2').click(function(){
    cssPlus(100)
});
$('.slide-3').click(function(){
    cssPlus(200)
});

//pagination클릭시함수
function cssPlus(vw){
    $('.slide-container').removeClass('transforming');
    $('.slide-container').css('transform','translateX(-'+ vw +'vw)');
    $('.slide-container').addClass('transforming');
};
//transform추가함수
function addTransforming(){
    $('.slide-container').removeClass('transforming');
    $('.slide-container').addClass('transforming');
};

let 지금보이는사진 = 1;

$('.next').click(function(){
    addTransforming();
    $('.slide-container').css('transform','translateX(-'+지금보이는사진+'00vw)');
    지금보이는사진 = 지금보이는사진 + 1;
    if(지금보이는사진 >= 3){
        // 지금보이는사진 = 3;
        $('.slide-container').css('transform', 'translateX(-200vw)');
        지금보이는사진 = 지금보이는사진 - 1;
    }   
});
$('.prev').click(function(){
    addTransforming();
    $('.slide-container').css('transform','translateX(-'+ (지금보이는사진 - 1) +'00vw)');
    if(지금보이는사진 > 1){
        지금보이는사진 = 지금보이는사진 - 1;
    }
});

// for(var i = 0; i < 3; i++){
var 이미지 = document.querySelectorAll('.slide img')[0];
var 이미지2 = document.querySelectorAll('.slide img')[1];
var 이미지3 = document.querySelectorAll('.slide img')[2];
var 매니저 = new Hammer.Manager(이미지);
var 매니저2 = new Hammer.Manager(이미지2);
var 매니저3 = new Hammer.Manager(이미지3);
// };
매니저.add(new Hammer.Pan({ threshold: 0 }));
매니저2.add(new Hammer.Pan({ threshold: 0 }));
매니저3.add(new Hammer.Pan({ threshold: 0 }));

// function touch(e,v){
//     if( e.deltaX < -100){
//         $('.slide-container').css('transform','translateX('+ e.deltaX +'px)');

//         //만약에 마우스를 놓으면 두번째 사진으로 변해야함
//         if(e.isFinal){
//             $('.slide-container').addClass('transforming');
//             $('.slide-container').css('transform','translateX(-'+ v +'vw)');
//             setTimeout(function(){
//                 $('.slide-container').removeClass('transforming');
//             }, 10000);
//         }
//     }
// }

매니저.on('pan', function(e){
    지금보이는사진 = 1
    if( e.deltaX < -100){
        $('.slide-container').css('transform','translateX('+ e.deltaX +'px)');

        //만약에 마우스를 놓으면 두번째 사진으로 변해야함
        if(e.isFinal){
            $('.slide-container').addClass('transforming');
            $('.slide-container').css('transform','translateX(-100vw)');
            setTimeout(function(){
                $('.slide-container').removeClass('transforming');
            }, 10000);
        }
    }
    지금보이는사진 = 지금보이는사진 + 1;
});
매니저2.on('pan', function(e){
    // 지금보이는사진 = 1
    if( e.deltaX < -100){
        $('.slide-container').css('transform','translateX('+ e.deltaX +'px)');

        if(e.isFinal){
            $('.slide-container').addClass('transforming');
            $('.slide-container').css('transform','translateX(-200vw)');
            setTimeout(function(){
                $('.slide-container').removeClass('transforming');
            }, 10000);
        }
    }
    // 지금보이는사진 = 지금보이는사진 + 1;
});
매니저2.on('pan', function(e){
    if( e.deltaX > 100){
        $('.slide-container').css('transform','translateX('+ e.deltaX +'px)');

        if(e.isFinal){
            $('.slide-container').addClass('transforming');
            $('.slide-container').css('transform','translateX(0vw)');
            setTimeout(function(){
                $('.slide-container').removeClass('transforming');
            }, 10000);
        }
    }
});
매니저3.on('pan', function(e){
    if( e.deltaX > 100){
        $('.slide-container').css('transform','translateX('+ e.deltaX +'px)');

        if(e.isFinal){
            $('.slide-container').addClass('transforming');
            $('.slide-container').css('transform','translateX(-100vw)');
            setTimeout(function(){
                $('.slide-container').removeClass('transforming');
            }, 10000);
        }
    }
});


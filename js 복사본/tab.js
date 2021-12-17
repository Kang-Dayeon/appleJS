// $('.tab-button').eq(0).click(function(){
//     $('.tab-button').removeClass('active');
//     $('.tab-content').removeClass('show');
//     $('.tab-button').eq(0).addClass('active');
//     $('.tab-content').eq(0).addClass('show');
// })
// $('.tab-button').eq(1).click(function(){
//     $('.tab-button').removeClass('active');
//     $('.tab-content').removeClass('show');
//     $('.tab-button').eq(1).addClass('active');
//     $('.tab-content').eq(1).addClass('show');
// })
// $('.tab-button').eq(2).click(function(){
//     $('.tab-button').removeClass('active');
//     $('.tab-content').removeClass('show');
//     $('.tab-button').eq(2).addClass('active');
//     $('.tab-content').eq(2).addClass('show');
// })
//첫번째버튼 누르면 첫번째 상품설명창 보임

//반복문으로 코드 줄이기
// let tab = $('.tab-button').length;
// for(let i = 0; i < tab; i++){
//     $('.tab-button').eq(i).click(function(){
//         탭열기(i)
//     });
// }

// $('.list').data('작명', '값'); 제이쿼리 문법
// $('.list').data('작명'); --> 꺼내쓰고 싶을때

$('.list').click(function(e){
// 만약에 내가 실제 누른 요소가 버튼 0이면 탭 0번째 실행
 탭열기(e.target.dataset.id);
})

function 탭열기(숫자){
    $('.tab-button').removeClass('active');
    $('.tab-content').removeClass('show');
    $('.tab-button').eq(숫자).addClass('active');
    $('.tab-content').eq(숫자).addClass('show');
}
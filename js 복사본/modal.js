//모달창
$('#show-modal').click(function(){
    $('.black-background').removeClass('slide-up');
    $('.black-background').removeClass('hide');
    $('.black-background').addClass('slide-down');
});
$('.close').click(function(){
    $('.black-background').removeClass('slide-down');
    $('.black-background').addClass('slide-up');
});


// $('#btn').on('click', function(){
//     // if('안녕' == $('.test-input').val()){
//         $('.black-background').fadeIn();
//     // };
// });
// $('.close').on('click', function(){
//     $('.black-background').fadeOut();
// });

//모달 이메일 입력
$('form').on('submit', function(e){
    var 입력한이메일 = $('#email').val();
    var 입력한비번 = $('#password').val();
    var email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(입력한이메일);
    var psw = /^[A-Za-z0-9]{6,12}$/.test(입력한비번);
    if( !email && 입력한이메일 == ''){
      e.preventDefault();
      $('.email-alert').show();
    } else if(!psw && 입력한비번 == '') {
      e.preventDefault();
      $('.password-alert').show();
    }
    // if($('#email').val() == ''){
    //     e.preventDefault();
    //     $('.email-alert').show();
    // } else if($('#password').val() == ''){
    //     e.preventDefault();
    //     $('.password-alert').show();
    // }
});
  
  // 이메일 정규식
  // /[\s+@\s+\.\s+]/.test('dksldiss@naver,com');

  $('.black-background').click(function(e){
    if(e.target == e.currentTarget){
      $('.black-background').addClass('hide');
    }
  });

// e.target; // 지금 실제로 클릭한 요소
// e.currentTarget; // 지금 이벤트리스너가 달린 곳
// this; // 위(e.cuttentTarget)랑 똑같은 의미
// e.preventDefault(); // 기본동작 막기

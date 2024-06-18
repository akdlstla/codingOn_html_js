// alert("testing");
$(() =>{
    $('.navbar_toggleBtn').click(function(){
        //클래스 선택자 생성(active)
        $('.navbar_menu').toggle("active");
    })

    $(window).resize(function(){
        //nav의 너비값이 문자이므로 숫자로 형변환함
        if(parseInt($('nav').css('width')) > 768){
            $('.navbar_menu').css('display', 'flex');
        }
    })
})
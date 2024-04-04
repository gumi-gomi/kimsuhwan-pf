$(function(){
    $('.sub_menu').hide();
    $('#main_menu>li').hover(
        function(){
            let chk=$(this).index();
            $('.sub_menu').stop().slideUp();
            $(this).addClass('on');
            $(this).find('.sub_menu').stop().slideDown();
        }
    );
    $('#main_menu>li').mouseleave(
        function(){
            $(this).removeClass('on');
            $(this).find('.sub_menu').stop().slideUp();
        }
    );

    $('.news').hide();

    $('#news_list>li').click(
        function(){
            console.log('클릭')
            let chk_num=$(this).index();
            console.log(chk_num);
            $('.news').hide();
            $('.news').eq(chk_num).css('display','block');
        }
    );
});
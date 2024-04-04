$(function(){

    $('.r-area').hide();
    $('.r-area:first-child').show();
    $('#pracleft>ul>li').hover(
        function(){
            $(this).css({cursor:'pointer',backgroundColor:'lightcoral'});
        }
    );

    $('#pracleft>ul>li').mouseleave(
        function(){
            $(this).css({cursor:'pointer',backgroundColor:'lightgray'})
        }
    );

    $('#pracleft>ul>li').click(
        function(){
            $('.r-area').hide();
            $('.r-area').eq($(this).index()).show();
        }
    );
});

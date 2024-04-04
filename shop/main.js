//acc---------------
$(function(){
    $('#hsub_menu').hide();

    $('#head').hover(
        function(){
            $('#hsub_menu').stop().slideDown(200);
        }
    );
    $('#head').mouseleave(
        function(){
            $('#hsub_menu').stop().slideUp(200);
        }
    );
    
});
// acc 끝---------------

// outer---------------
$(function(){
    $('#asub_menu').hide();

    $('#acc').hover(
        function(){
            $('#asub_menu').stop().slideDown(200);
        }
    );
    $('#acc').mouseleave(
        function(){
            $('#asub_menu').stop().slideUp(200);
        }
    );
});
// outer 끝---------------
// bodyy 시작--------------
$(function(){
    $('#tsub_menu').hide();

    $('#top').hover(
        function(){
            $('#tsub_menu').stop().slideDown(200);
        }
    );
    $('#top').mouseleave(
        function(){
            $('#tsub_menu').stop().slideUp(200);
        }
    );
});
// bodyy 끝--------------
// bottom 시작--------------
$(function(){
    $('#bsub_menu').hide();

    $('#bottom').hover(
        function(){
            $('#bsub_menu').stop().slideDown(200);
        }
    );
    $('#bottom').mouseleave(
        function(){
            $('#bsub_menu').stop().slideUp(200);
        }
    );
});
// bottom 끝--------------

$(function(){
    let url_target=new URL(Location).searchParams;
    let target=url_target.get('cap');

    $('.ele').hide();

    $(`#${target}`).show();
    
});
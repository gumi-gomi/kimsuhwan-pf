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

// 상단메뉴 필터효과

$(function(){
    
});
// 상단메뉴 필터효과 끝

// 필터 슬라이드다운
$(function(){
    $('.ftsub_menu').hide();

    $('#ftmain_menu').click(
        function(){
        $('.ftsub_menu').stop().slideDown(100);
    }
    );

    $('#ftmain_menu').mouseleave(
        function(){
        $('.ftsub_menu').stop().slideUp(100);
    }
    );
    
});
// 필터 슬라이드다운 끝
// ----------------------------------------------
// 필터 클릭 정렬
// 전체다보이게
$(function(){
    $('#allprod').click(
        function(){
            $('.ele').show();
        }
    );
});
// 청바지만보이게
$(function(){
    $('#jeans_btn').click(
        function(){
            $('.ele').hide();
            $('#headline1>#jeans').show();


        }
    );
});
// 슬랙스만보이게
$(function(){
    $('#slacks_btn').click(
        function(){
            $('.ele').hide();
            $('#headline1>#slacks').show();


        }
    );
});
// 반바지만보이게
$(function(){
    $('#half_btn').click(
        function(){
            $('.ele').hide();
            $('#headline1>#half').show();


        }
    );
});
// 양말만보이게
$(function(){
    $('#socks_btn').click(
        function(){
            $('.ele').hide();
            $('#headline1>#socks').show();


        }
    );
});
// 필터 클릭 정렬끝
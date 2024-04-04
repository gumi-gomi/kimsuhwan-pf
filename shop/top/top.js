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
// 캡모자만보이게
$(function(){
    $('#mtm_btn').click(
        function(){
            $('.ele').hide();
            $('#headline1>#mtm').show();


        }
    );
});
// 비니만보이게
$(function(){
    $('#knit_btn').click(
        function(){
            $('.ele').hide();
            $('#headline1>#knit').show();


        }
    );
});
// 선글라스만보이게
$(function(){
    $('#shirt_btn').click(
        function(){
            $('.ele').hide();
            $('#headline1>#shirt').show();


        }
    );
});
// 안경만보이게
$(function(){
    $('#glass_btn').click(
        function(){
            $('.ele').hide();
            $('#headline1>#glass').show();


        }
    );
});
// 필터 클릭 정렬끝



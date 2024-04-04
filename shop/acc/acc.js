

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
// 코트만보이게
$(function(){
    $('#coat_btn').click(
        function(){
            $('.ele').hide();
            $('#headline1>#coat').show();


        }
    );
});
// 패딩만보이게
$(function(){
    $('#padding_btn').click(
        function(){
            $('.ele').hide();
            $('#headline1>#padding').show();


        }
    );
});
// ma-1만보이게
$(function(){
    $('#ma-1_btn').click(
        function(){
            $('.ele').hide();
            $('#headline1>#ma-1').show();


        }
    );
});
// 가죽제품만보이게
$(function(){
    $('#leather_btn').click(
        function(){
            $('.ele').hide();
            $('#headline1>#leather').show();


        }
    );
});
// 필터 클릭 정렬끝
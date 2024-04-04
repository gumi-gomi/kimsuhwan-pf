

// 슬라이더

$(function(){
    let currentIndex = 0;   //현재 이미지
    $("#left ul").append($(".slider").first().clone(true));  //첫번째 이미지를 복사, 마지막에 추가

    setInterval(function(){     //3초에 한번씩 실행
        currentIndex++;     //현재 이미지를 1씩 증가
        $("#left ul").animate({marginLeft: -currentIndex * 50 + "%"}, 300); //이미지 애니메이션

        if(currentIndex == 2){  //마지막 이미지일때
            setTimeout(function(){  
                $("#left ul").animate({marginLeft: 0}, 0);   //애니메이션을 정지
                currentIndex = 0;   //현재이미지 초기화
            }, 1000);
        }
    }, 3000);
});


$(document).ready(
    function(){
        const img=$("#left>ul>li");
        const left=$("#left");
        const l_btn=$("#left_btn");
        const r_btn=$("#right_btn");

        let img_w=img.outerWidth();
        console.log(img_w);

        let img_n=img.length;
        console.log(img_n);

        let current_n=0;
        let max_x=-(img_w*(img_n-1));

        l_btn.click(
            function(){
                if(current_n<img_n-1){
                    current_n++

                    left.animate({left:-(img_w*current_n)},500);
                }else{

                }
            }
        )
        r_btn.click(
            function(){
                if(current_n>0){
                    current_n--
                    left.animate({left:-(img_w*current_n)},500);
                }
            }
        )
    }
);

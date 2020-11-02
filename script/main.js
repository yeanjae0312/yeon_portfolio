$(document).ready(function(){
//    $('body *').css('opacity','0').animate({'opacity':'1'},1000);
    
    //메인페이지 시작시 비쥬얼 높이를 자식인 div의 높이와 맞추기
    
//    $('.visual').height($('.visual_bg img').height());
//    
//    $(window).resize(function(){
//        $('.visual').height($('.visual_bg img').height());
//    });
    
//    let f1 = $('.first_screen_1');
//    console.log(f1);
    
    //첫화면 양옆으로 펼쳐지기
//    $('.first_screen_1').delay(4000).animate({
//        left:'-100%'
//    },1700);
//    
//    $('.first_screen_2').delay(4000).animate({
//        'right':'-100%'
//    },1700);
    
    //로딩숫자 바꾸기
    setTimeout(function(){
        $('.box > p').text('2');
    },1000);
    setTimeout(function(){
        $('.box > p').text('1');
    },2000);
    setTimeout(function(){
        $('.box > p').text('0');
        
    },3000);
     setTimeout(function(){
        $('.box > p').hide();
    },4000);

    //비쥬얼 배경 움직이게 하기
    
    
    //팝업모달
    $('.popup i.fas').click(function(){
        $('.popup').animate({'top':'280px'},300).delay(100).animate({'top':'-100%','opacity':'0'},500);
    });
    
    
    //최상단 로고 나타내기
    $(window).scroll(function(){
        let sPos = $(window).scrollTop();
        
        if(sPos <= 100){
            $('header > a > img').stop().fadeOut();
        }
        if(sPos >= 100){
            $('header > a > img').stop().fadeIn();
        }
    });
    
    
    $('.visual p:first-of-type').fadeIn(1000);
    
    //헤더 내비게이션 스크롤 내리면 고정시키기
    $(window).scroll(function(){
        let h_Pos = $(window).scrollTop();
        
        if(h_Pos >= 200){
            $('.h_gnb').addClass('h_on');
        }else{
            $('.h_gnb').removeClass('h_on');
        }
    });
    
    
    //타이핑효과    
    setTimeout(function(){
        let typed = new Typed('.txt_animate', {
          strings: [
              'Publisher',
              'Developer;'
          ],
          typeSpeed: 100,
          backSpeed: 100
        });
    });
    
    
    //비쥬얼 마우스스크롤 아이콘
    function m_scroll(){
        $('.m_icon').animate({
            'bottom':'50px'
        },500).animate({
            'bottom':'30px'
        },500);
    };
    
    let Timer = setInterval(m_scroll,500);
    
    //내비게이션 메뉴 클릭시 해당하는 컨텐츠 상단에 올라오게 하기
    $('.h_gnb li').click(function(){
        
        $('.h_gnb li').removeClass('on');
        $(this).addClass('on');
        
        let num = $(this).index()+1;
        console.log(num);
        
        let con = $('section article').eq(num).offset().top;
        
        $('html, body').animate({
            scrollTop : con-60
        },500);
        
        return false;
        
    });
    
    
   
    
    
    //스크롤 이벤트
    $(window).scroll(function(){
        
        let sPos = $(window).scrollTop();
        let num1 = $('section > article').index()+1;
        let bg_op = $('.visual_bg > div');
//        //헤더 내비게이션 각 영역에 갔을때 색상 바뀌게
//        if(sPos >= $('section > article').eq(1).offset().top-60){
//            $('.h_gnb li').addClass('h_active');
//        }else{
//            $('.h_gnb li').removeClass('h_active');
//        }
        
        //헤더 내비게이션 각 아티크별로 색 표시되게 하기
        var s_Pos = $(window).scrollTop();
        let cont = $('section > article');
        
        if(s_Pos >= (cont.eq(0).offset().top)-60){
            $('.h_gnb li').removeClass('on');
            bg_op.css({
                'background':'rgba(0,0,0,0)'
            });
//             background: rgba(0,0,0,.9)
        }
        if(s_Pos >= (cont.eq(1).offset().top)-60){
            $('.h_gnb li').removeClass('on');
            $('.h_gnb li').eq(0).addClass('on');
            bg_op.css({
                'background':'rgba(0,0,0,.2)'
            });
        }
        if(s_Pos >= (cont.eq(2).offset().top)-60){
            $('.h_gnb li').removeClass('on');
            $('.h_gnb li').eq(1).addClass('on');
             bg_op.css({
                'background':'rgba(0,0,0,.5)'
            });
        }
        if(s_Pos >= (cont.eq(3).offset().top)-60){
            $('.h_gnb li').removeClass('on');
            $('.h_gnb li').eq(2).addClass('on');
             bg_op.css({
                'background':'rgba(0,0,0,.8)'
            });
        }
        
        
        //원 차트
        if(sPos >= (num1+1200)){//
            //SKILLS 원 그래프
            //chart1--------------
            $('.chart1').easyPieChart({
            barColor: '#232e67',  //차트가 그려질 색 #f16529
            trackColor: '#e0e0e0',  // 차트가 그려지는 트랙의 기본 배경색(chart1 의 회색부분)
            scaleColor: '#fff', // 차트 테두리에 그려지는 기준선 (chart2	의 테두리 선)
            lineCap: 'butt', // 차트 선의 모양 chart1 butt / chart2 round / chart3 square
            lineWidth: 13, // 차트 선의 두께
            size: 120, // 차트크기
            animate: 1000, // 그려지는 시간 
            onStart: $.noop,
            onStop: $.noop
          });

                    //chart2----------------
            $('.chart2').easyPieChart({
            barColor: '#232e67',  //차트가 그려질 색 #f16529
            trackColor: '#e0e0e0',  // 차트가 그려지는 트랙의 기본 배경색(chart1 의 회색부분)
            scaleColor: '#fff', // 차트 테두리에 그려지는 기준선 (chart2	의 테두리 선)
            lineCap: 'butt', // 차트 선의 모양 chart1 butt / chart2 round / chart3 square
            lineWidth: 13, // 차트 선의 두께
            size: 120, // 차트크기
            animate: 1000, // 그려지는 시간 
            onStart: $.noop,
            onStop: $.noop
          });

            //chart3---------------
            $('.chart3').easyPieChart({
            barColor: '#232e67',  //차트가 그려질 색 #f16529
            trackColor: '#e0e0e0',  // 차트가 그려지는 트랙의 기본 배경색(chart1 의 회색부분)
            scaleColor: '#fff', // 차트 테두리에 그려지는 기준선 (chart2	의 테두리 선)
            lineCap: 'butt', // 차트 선의 모양 chart1 butt / chart2 round / chart3 square
            lineWidth: 13, // 차트 선의 두께
            size: 120, // 차트크기
            animate: 1000, // 그려지는 시간 
            onStart: $.noop,
            onStop: $.noop
          });

            //chart4----------------
            $('.chart4').easyPieChart({
            barColor: '#232e67',  //차트가 그려질 색 #f16529
            trackColor: '#e0e0e0',  // 차트가 그려지는 트랙의 기본 배경색(chart1 의 회색부분)
            scaleColor: '#fff', // 차트 테두리에 그려지는 기준선 (chart2	의 테두리 선)
            lineCap: 'butt', // 차트 선의 모양 chart1 butt / chart2 round / chart3 square
            lineWidth: 13, // 차트 선의 두께
            size: 120, // 차트크기
            animate: 1000, // 그려지는 시간 
            onStart: $.noop,
            onStop: $.noop
          });

            //chart5----------------
            $('.chart5').easyPieChart({
            barColor: '#4a6898',  //차트가 그려질 색 #f16529
            trackColor: '#e0e0e0',  // 차트가 그려지는 트랙의 기본 배경색(chart1 의 회색부분)
            scaleColor: '#fff', // 차트 테두리에 그려지는 기준선 (chart2	의 테두리 선)
            lineCap: 'butt', // 차트 선의 모양 chart1 butt / chart2 round / chart3 square
            lineWidth: 13, // 차트 선의 두께
            size: 120, // 차트크기
            animate: 1000, // 그려지는 시간 
            onStart: $.noop,
            onStop: $.noop
          });

            //chart6----------------
            $('.chart6').easyPieChart({
            barColor: '#4a6898',  //차트가 그려질 색 #f16529
            trackColor: '#e0e0e0',  // 차트가 그려지는 트랙의 기본 배경색(chart1 의 회색부분)
            scaleColor: '#fff', // 차트 테두리에 그려지는 기준선 (chart2	의 테두리 선)
            lineCap: 'butt', // 차트 선의 모양 chart1 butt / chart2 round / chart3 square
           lineWidth: 13, // 차트 선의 두께
            size: 120, // 차트크기
            animate: 1000, // 그려지는 시간 
            onStart: $.noop,
            onStop: $.noop
          });

            //chart7----------------
            $('.chart7').easyPieChart({
            barColor: '#4a6898',  //차트가 그려질 색 #f16529
            trackColor: '#e0e0e0',  // 차트가 그려지는 트랙의 기본 배경색(chart1 의 회색부분)
            scaleColor: '#fff', // 차트 테두리에 그려지는 기준선 (chart2	의 테두리 선)
            lineCap: 'butt', // 차트 선의 모양 chart1 butt / chart2 round / chart3 square
            lineWidth: 13, // 차트 선의 두께
            size: 120, // 차트크기
            animate: 1000, // 그려지는 시간 
            onStart: $.noop,
            onStop: $.noop
          });

            //chart8----------------
            $('.chart8').easyPieChart({
            barColor: '#4a6898',  //차트가 그려질 색 #f16529
            trackColor: '#e0e0e0',  // 차트가 그려지는 트랙의 기본 배경색(chart1 의 회색부분)
            scaleColor: '#fff', // 차트 테두리에 그려지는 기준선 (chart2	의 테두리 선)
            lineCap: 'butt', // 차트 선의 모양 chart1 butt / chart2 round / chart3 square
            lineWidth: 13, // 차트 선의 두께
            size: 120, // 차트크기
            animate: 1000, // 그려지는 시간 
            onStart: $.noop,
            onStop: $.noop
          });
        }
            
    });
    
    
    //모달윈도 부분------------------
    //한화리조트
    $('.modal_page1').click(function(){
        $('.modal_hanwha').fadeIn();
        $('body').addClass('modal-open');
    });
    $('.modal_hanwha > i.fas').click(function(){
        $('.modal_hanwha').fadeOut();
        $('body').removeClass('modal-open');
    });
    
    //비비큐
    $('.modal_page2').click(function(){
        $('#modal_bbq').fadeIn();
        $('body').addClass('modal-open');
    });
    $('#modal_bbq > i.fas').click(function(){
        $('#modal_bbq').fadeOut();
        $('body').removeClass('modal-open');
    });
    
    //리복
    $('.modal_page3').click(function(){
        $('#modal_reebok').fadeIn();
        $('body').addClass('modal-open');
    });
    $('#modal_reebok > i.fas').click(function(){
        $('#modal_reebok').fadeOut();
        $('body').removeClass('modal-open');
    });
    
    //버거킹
    $('.modal_page4').click(function(){
        $('#modal_burgerking').fadeIn();
        $('body').addClass('modal-open');
    });
    $('#modal_burgerking > i.fas').click(function(){
        $('#modal_burgerking').fadeOut();
        $('body').removeClass('modal-open');
    });
    
    //수지
    $('.modal_page5').click(function(){
        $('#modal_suzi').fadeIn();
        $('body').addClass('modal-open');
        console.log('suzi');
    });
    $('#modal_suzi > i.fas').click(function(){
        $('#modal_suzi').fadeOut();
        $('body').removeClass('modal-open');
    });
    
    
    //탑버튼 나오게 하기
    $(window).scroll(function(){
        
        let t_pos = $(window).scrollTop();
        
        if(t_pos >= 600){
            $('footer aside').fadeIn();
        }else{
            $('footer aside').fadeOut();
        }
        
    });
    
    //탑버튼 클릭시
    $('footer aside').click(function(){
        $('html, body').animate({
            scrollTop:'0px'
        },300);
    });
    
    
    
    
    
    
});
































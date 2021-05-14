$(function(){
  /*script 영역 juqery ccordion예제*/
  $("dd:not(:first)").css("display","none");
  $("dl dt").on("click", function(){
    // if($(this).next().css("display") == "none" ){
    //   $("dl dd").css("display","none")   //참고1 - 나머지를 다 닫겠다.
    //   $(this).next().css("display","block")//참고2_1 - 선택한것만 열겠다.
    // }else{
    //   $(this).next().css("display","none")//참고2_2
    // }
    if( $("+dd",this).css("display") == "none" ){//this바로 뒤에오는 요소 인접선택자 +를 사용(ajax때 사용했었던)//위에 주석 - 참고1부분과 같다
      $("dl dd").slideUp("slow");
      $("+dd",this).slideDown("slow");//위에 주석 - 참고2_1과 참고 2_2를 합한 것과 같다. this는 dt
    }
  });
});//document ready

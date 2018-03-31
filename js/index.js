var n=0;
var size=$("#buttons button").length;
var timeId=setTimer();

$(buttons).on('click','button',function(e){
    var index=$(e.currentTarget).index();
    $(e.currentTarget).addClass('red')
    .siblings('.red').removeClass('red');
    $(images).css({
        transform:"translateX("+(-500*index)+"px)"
    });
    n=index;
    clearInterval(timeId);
    timeId=setTimer();
});

$(main).on("mouseenter",function(){
    clearInterval(timeId);
});

$(main).on("mouseleave",function(){
    timeId=setTimer();
});

function setTimer(){
  return setInterval(function(){
             n+=1;
             var index=n%size;
             $("#buttons button").eq(index).trigger("click");
        },2000);
}


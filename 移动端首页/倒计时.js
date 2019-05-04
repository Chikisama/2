var intDiff = parseInt(95676);//倒计时总秒数量
function timer(intDiff){
    window.setInterval(function(){
    var hour=0,
        minute=0,
        second=0;//时间默认值        
    if(intDiff > 0){
        hour = Math.floor(intDiff / (60 * 60));
        minute = Math.floor(intDiff / 60 - (hour * 60));
        second = Math.floor(intDiff) - (hour * 60 * 60) - (minute * 60);
    }
    if (minute <= 9) minute = '0' + minute;
    if (second <= 9) second = '0' + second;
    $('#h').html('<s></s>'+hour);
    $('#min').html('<s></s>'+minute);
    $('#sec').html('<s></s>'+second);
    $('#h1').html('<s></s>'+hour);
    $('#min1').html('<s></s>'+minute);
    $('#sec1').html('<s></s>'+second);
    intDiff--;
    }, 1000)
}
$(function(){
    timer(intDiff)
}); 
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var currentQuote = '', currentAuthor = '';

$(document).ready(function() {
    $('#new-quote').on('click',function () {
        getQuote();
    })

    function getQuote(){
        //获取格言
        $.getJSON("https://v1.hitokoto.cn/?encode=json",function(json){
            currentQuote = json["hitokoto"];
            currentAuthor = json["from"];
    
            //console.log(currentQuote+"_"+currentAuthor);

            // $('#text').text(currentQuote);
            // $('#author').html(currentAuthor);
            //文字淡入淡出效果
            $('.quote-text').animate({opacity: 0} , 300 , function() {
                $(this).animate({opacity: 1} , 300);
                $('#text').text(currentQuote);
            });
            $('.quote-author').animate({opacity: 0} , 300 , function() {
                $(this).animate({opacity: 1} , 300);
                $('#author').html(currentAuthor);
            });

            //背景颜色变换
            var num = Math.floor(Math.random() * colors.length);
            $("html body").animate({
                backgroundColor: colors[num],
                color: colors[num]
            }, 500 , function(){console.log(colors[num])});
            
            $(".button").animate({
                backgroundColor: colors[num]
            }, 500);
            
        })
    }
    
    getQuote();

    

});


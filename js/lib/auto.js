(function(doc, win){
    var docE1 = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function(){
            var clientWidth = docE1.clientWidth;
            if(!clientWidth) return;
            $(docE1).attr("style","font-size:"+ (20 * clientWidth / 320) +"px!important;");
            // docE1.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt,recalc,false);
    doc.addEventListener('DOMContentLoaded',recalc,false);
})(document,window);

(function ($) {
    $.showNewLoading = function (color, text) {
        var html = '<div class="custom_loading">' +
        '<div class="loading_container">' +
        '<div class="loading_icon">' +
        '<i></i>' +
        '</div>' +
        '<div class="loading_text">'+ ( text ||"加载中­...") +'</div>' +
        '</div>' +
        '<div class="loading_mask" style="background-color:'+ (color || "#FFFFFF") +'"></div>' +
        '</div>';
        $("body").prepend($(html));
    }
    $.hideNewLoading = function () {
        $(".custom_loading").remove();
    }
})($)

$(document).ready( function(){
    VOTH.enable_navigation();
});

var VOTH = function(){
    return {
        enable_navigation : function(){
            $(".navigation .primary").each( function(){
                function on(e){
                    current = this;
                    $(this).find("ul").fadeIn(160);
                    return false;
                }
                function off(e){
                    $(this).find("ul").fadeOut(160);
                }
                $(this).hover(on, off);
            });
            $(".navigation .primary ul li a").each( function(){
                function over(){
                    $(this).css("color", "#3F2C13");                    
                    Cufon.replace(".navigation .primary ul li a");
                }
                function out(){
                    $(this).css("color", "#FFFFFF");                    
                    Cufon.replace(".navigation .primary ul li a");
                }
                $(this).hover(over, out);
            });
        }
    };
}();
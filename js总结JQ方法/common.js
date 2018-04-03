/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-04-02 13:34:33
 * @version $Id$
 */
//导航
/*滑动效果*/
$("#nav").find("li").hover(function(){
if($(this).children().hasClass("nav_sub")){
    $(this).find(".nav_sub").stop(true,false).slideDown(500);
}   
},function(){
if($(this).children().hasClass("nav_sub")){
        $(this).find(".nav_sub").stop(true,false).slideUp(500);
    }   
}) 
/*显示隐藏*/
$("#nav").find("li").hover(function() {
    $(this).children('.nav_sub').show();
}, function() {
    $(this).children('.nav_sub').hide();
});
//导航选中状态
var liList= $("#nav>li:not('.none')"); 
var currentLink = document.location.href;
var linkss=$("#nav>li:not('.one')>a");
for(var i=0;i<liList.length;i++){
  if(currentLink.indexOf(linkss[i])!=-1) {
     $(liList[i]).addClass("current");
     }
     $(liList[i]).bind("mouseover", {inum:i,othis:liList[i]},function(params){
 var mm = params.data.inum;
 var othiSrc = params.data.othis;
 $(othiSrc).addClass("current"); 
 $("#apDiv"+mm).show();  
});
$(liList[i]).bind("mouseout", {inum:i,othis:liList[i]},function(params){ 
 var mm = params.data.inum;
 var othiSrc = params.data.othis;
		if(currentLink.indexOf(linkss[mm])!=-1) {
		   $(othiSrc).addClass("current");
		    }
		 else {
		 $(othiSrc).removeClass("current"); 
		 }
	$("#apDiv"+mm).hide();
	})
 }
//回到顶部
$(window).scroll(function () {
    if ($(window).scrollTop() > 200)
        $('#back').show();
    else
        $('#back').hide();
});
$('#back').click(function () {
    $('html,body').animate({scrollTop: 0}, 500);
});


/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-09 09:55:53
 * @version $Id$
 */
window.onload = function(){

	//面向对象选项卡
	var t1 = new Tab('box1');
	t1.init();
	var t2= new Tab('box2');
	t2.init();
	};
	function Tab(id){
	    this.obox = document.getElementById(id);
	    this.oInp = this.obox.getElementsByTagName('input');
	    this.oDiv = this.obox.getElementsByTagName('div');
	}
	Tab.prototype.init = function(){
		var This = this;
			for(var i = 0; i<this.oInp.length; i++){
			this.oInp[i].index = i;
			this.oInp[i].onclick = function(){
			    This.change(this);
			}
		}
	}
	Tab.prototype.change = function(obj){
		for(var j = 0; j<this.oInp.length; j++){
		    this.oInp[j].className = ''
		    this.oDiv[j].style.display = 'none';
		 }   
		obj.className = 'active';
		this.oDiv[obj.index].style.display = 'block'; 
	}
	//原生选项卡
	/*选项卡方法	tabIdA：切换的标题 
					tabIdB：切换的内容 
					classNameA:标题的class  
					classNameB:内容的class
	*/
	function $(id){
		var Id = document.getElementById(id);
		return Id
	}
    function tab(tabIdA, tabIdB, classNameA, classNameB) {
        var tabIdAs = $(tabIdA).children;
        var tabIdBs = $(tabIdB).children;
        for (var i = 0; i < tabIdAs.length; i++) {
            tabIdAs[i].index = i;
            tabIdAs[i].onclick = function () {
                for (var j = 0; j < tabIdAs.length; j++) {
                    tabIdAs[j].className = "";
                    tabIdBs[j].className = "";
                }
                this.className = classNameA;
                tabIdBs[this.index].className = classNameB;
            }
        }
    }

    //回到顶部
    $(window).scroll(function () {
            if ($(window).scrollTop() > 200)
                $('#backTop').show();
            else
                $('#backTop').hide();
        });
        $('#backTop').click(function () {
            $('html,body').animate({scrollTop: 0}, 500);
        });
   //运动函数
	   function startMove(obj, json, fn) {
		clearInterval(obj.iTimer);
		var iCur = 0;
		var iSpeed = 0;
			
		obj.iTimer = setInterval(function() {
			
			var iBtn = true;
						
			for ( var attr in json ) {
								
				var iTarget = json[attr];
				
				if (attr == 'opacity') {
					iCur = Math.round(css( obj, 'opacity' ) * 100);
				} else {
					iCur = parseInt(css(obj, attr));
				}
				
				iSpeed = ( iTarget - iCur ) / 8;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				
				if (iCur != iTarget) {
					iBtn = false;
					if (attr == 'opacity') {
						obj.style.opacity = (iCur + iSpeed) / 100;
						obj.style.filter = 'alpha(opacity='+ (iCur + iSpeed) +')';
					} else {
						obj.style[attr] = iCur + iSpeed + 'px';
					}
				}
				
			}
			
			if (iBtn) {
				clearInterval(obj.iTimer);
				fn && fn.call(obj);
			}
			
		}, 30);
	}
	function css(obj, attr) {
		if (obj.currentStyle) {
			return obj.currentStyle[attr];
		} else {
			return getComputedStyle(obj, false)[attr];
		}
	}
	//最短的一个li的值
	function getShort(){
		var index = 0;
		var ih =aLi[index].offsetHeight;
		for(var i=1; i<ilen; i++){
			if(aLi[i].offsetHeight < ih){
				index = i;
				ih = aLi[i].offsetHeight;
			}
		}
		return index;
	}
	//
}
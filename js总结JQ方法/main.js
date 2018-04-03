/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-02-22 13:42:47
 * @version $Id$
 */
//js的animate方法
//参数：obj当前元素
//      arr属性名称
//      目标属性值
//      fn方法参数        
function run(obj,arr,target,fn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
      var cur = 0;
        if(attr == "opacity"){
          cur = Math.round(parseFloat(getstyle(obj,attr))*100);
        }else{
          cur = parseInt(getstyle(obj,attr));
        }
      var speed = (target-cur)/8;
        speed = speed>0?Math.ceil(speed):Math.floor(speed);
         
        if(cur == target){
          clearInterval(obj.timer);
            if(fn){
              fn();
            }
        }else{
          if(attr == "opacity"){
                obj.style.filter = "alpha(opacity="+(cur+speed)+")";
              obj.style.opacity = (cur+speed)/100;
            }else{
            obj.style[attr] = cur + speed + "px";
            }
        }
         
    },30)
}
 
//获取样式
/*function getstyle(obj,name){
  if(obj.currentStyle){
      return obj.currentStyle[name];
    }else{
      return getComputedStyle(obj,false)[name];
    }
}*/
 //获取任意属性值
 function getStyle(obj,name){
 	if(obj.currentStyle){
 		return obj.currentStyle[name];
 	}else{
 		return getComputedStyle(obj,false)[name];
 	}

 }
 //
//调用示例：
 run(box,"width",200,function(){run(box,"height",200,null);});
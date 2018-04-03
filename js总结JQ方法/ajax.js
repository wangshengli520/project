/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-21 08:49:24
 * @version $Id$
 */
/*封装一个Ajax*/
function ajax(opts){
    var url = opts.url //请求地址
    var type = opts.type || 'GET' //请求类型。默认GET
    var dataType = opts.dataType || 'json' //返回的数据类型。默认json
    var onsuccess = opts.onsuccess || function(){} //请求成功后
    var onerror = opts.onerror || function(){} //失败之后
    var data = opts.data || {} //如果用户传递数据了就选用户的，默认空
    //处理把用户传递的参数。如：用户名、密码等。
    var dataStr = []
    for(var key in data){
        dataStr.push(key + '=' + data[key])
    }
    dataStr = dataStr.join('&')
    
    // 如果类型===GET,那么用户的地址？dataStr  
    // 比如：http://api.luoshushu.com/weather.php?city=广州
    if(type === 'GET'){
        url += '?' + dataStr
    }
    //以下跟前面的“常见的Ajax用法”的解释差不多 
    var xhr = new XMLHttpRequest()
    xhr.open(type, url, true)
    xhr.onload = function(){
        if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
            //成功了
            if(dataType === 'json'){
                onsuccess( JSON.parse(xhr.responseText))
            }else{
                onsuccess( xhr.responseText)
            }
        } else {
            onerror()
        }
    }
    // 假设断网了
    xhr.onerror = onerror
    // 如果类型是POST
    if(type === 'POST'){
      // POST要在send中传递数据
        xhr.send(dataStr)
    }else{
      // GET直接调用
        xhr.send()
    }
}

/*--------------*/
/*      使用    */
/*--------------*/

ajax({
    url: 'http://api.luoshushu.com/weather.php',
    data: {
        city: '广州'
    },
    // 数据成功之后
    onsuccess: function(ret){
        console.log(ret)
    },
    // 失败之后执行
    onerror: function(){
        console.log('服务器异常')
    }
})


$(function(){$.ajax({url:"/userinfo/get",type:"post",dataType:"json",success:function(a){console.log(a);var b="您的地址："+a[3]+"，IP："+a[2]+"；您的硬件信息："+a[0]+"/"+a[1];console.log(b);$("#userinfo").text(b)},error:function(a,c,b){console.log("error "+c+" "+b)}})});
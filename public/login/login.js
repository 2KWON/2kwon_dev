/**
 * Created by Seokhwan on 2016. 3. 19..
 */
"use strict";
var dev= JSON.parse(url)[0].dev;
var dist= JSON.parse(url)[0].dist;
var realUrl = dev;


$('#loginSubmit').click(function () {

    $.ajax({
        type:"POST",
        url:realUrl+'/auth/login',
        dataType:'json',
        data:{
            "email" : $('#email-field').val(),
            "password" : $("#password-field").val()
        },
        success:function(data){

            if(data.result=='ok'){
                alert('로그인 성공');
                $(location).attr('href','/main/pubList.html');
            }else{
                alert('로그인 실패');
            }
        },
        error:function(e){
            alert(e.responseText);
        }
    });
});






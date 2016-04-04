/**
 * Created by Seokhwan on 2016. 3. 19..
 */
"use strict";

$('#loginSubmit').click(function () {

    $.ajax({
        type:"POST",
        url:'/auth/login',
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






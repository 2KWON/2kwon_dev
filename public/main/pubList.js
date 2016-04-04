/**
 * Created by Seokhwan on 2016. 3. 30..
 */
"use strict"
//목록 불러오기
//위도 경도 임시로 지정함.
//역의 코드로 리스트 load함
var station_code = 'sinlim';
var phone_latitude    = "10";      //위
var phone_longtitude  = "20";    //경도

//alert('hello');
function getList(){
    $.ajax({
        type:"POST",
        url:'/api/main/getPublist',
        dataType:'json',
        data:{
            "latitude"   : phone_latitude,
            "longtitude" : phone_longtitude,
            "stationCode" : station_code
        },
        success:function(list){
            var length = list.length;
            console.log(list);
            $('#locationName').text(list[0].station_code);
            $('#subTitle').html('&nbsp;'+length+' of '+length+' Pubs &nbsp;|&nbsp;&nbsp;'+length/length*100+'% 영업중');
            $('#titleImg').attr('src','/static/images/'+list[0].station_code+'.jpg');
            makeList(list);
        },
        error:function(e){
            alert(e.responseText);
        }
    });
}

function makeList(list){
    //alert(makeList);
    //$('#publist').empty();
    var length = list.length;
    for(var i = 0; i<length; i++){
    var a ='<li class="list-item" data-ix="list-item">'+
        '<a class="w-clearfix w-inline-block" href="#">'+
            '<div class="icon-list">'+
            '<div><img src="'+list[i].pub_img+'"></div>'+
            '</div>'+
            '<div class="title-list">'+list[i].pub_name+'</div>'+
        '</a>'+
        '</li>';
        $('#publist').append(a);
    }

}
getList();

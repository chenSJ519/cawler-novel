$(function() {
	var s = location.href;
	s=s.substr(s.indexOf("?")+1);
	var strs=s.split("&");
	if(true)
	{
//		alert($(".work-filter ul").find("li:eq(0)").size());
        $(".list_type_detective li:eq(0)").addClass("act");
		$(".type-list a:eq(0)").addClass("act");
	}else
	{
	    var ss=strs[0].split("=");
        $(".list_type_detective  a").each(function (index) {
            if($(this).attr("data-id")==ss[1])
            {
                $(this).parent().addClass("act");
            }
        });
        var ss2=strs[1].split("=");
        $(".type-list a").each(function (index) {

           if($(this).attr("data-chanid")==ss2[1])
           {
               $(this).addClass("act");
           }
        });
	}





});

function getType(ele) {
	$(ele).siblings("a").removeClass("act");
	$(ele).addClass("act");
    var url = "";



    url+="orderId="+$(".list_type_detective .act a").attr("data-id")+"&category="+$(".type-list .act").attr("data-chanid")+"&page=1";
    location.href = "/bookrank?" + url;
	}
function getType2(ele) {
    $(".list_type_detective .act").removeClass("act");
    $(ele).parent().addClass("act");
    var url = "";



    url+="orderId="+$(".list_type_detective .act a").attr("data-id")+"&category="+$(".type-list .act").attr("data-chanid")+"&page=1";
    location.href = "/bookrank?" + url;
}
function turnOverPage(no){
    var url=location.href;
    var reg=/page=\d+/;
    if(reg.test(url))
    {
    	 url=url.replace(reg,"page="+$(no).attr("data-page"))
    }else{
    	url=url+"&page="+$(no).attr("data-page");
    }
  
    location.href = url;
}
function goPage() {

//  var url = "";
//  url+="orderId="+$(".list_type_detective .act a").attr("data-id")+"&category="+$(".type-list .act").attr("data-chanid")+"&page="+$(".lbf-pagination-input").val()
   var url=location.href;
   var reg=/page=\d+/;
    if(reg.test(url))
    {
    	  url=url.replace(reg,"page="+$(".lbf-pagination-input").val())
    }else{
    	url=url+"&page="+$(".lbf-pagination-input").val();
    }
  
    location.href = url;

}
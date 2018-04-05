$(function() {
	var s = location.href;
	s=s.substr(s.indexOf("?")+1);
	var strs=s.split("&");
	if(strs.length==1)
	{
//		alert($(".work-filter ul").find("li:eq(0)").size());
        $(".list_type_detective li:eq(0)").addClass("act");
		$(".type-list a:eq(0)").addClass("act");s
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
    var url = "";
    url+="orderId="+$(".list_type_detective .act a").attr("data-id")+"&category="+$(".type-list .act").attr("data-chanid")+"&page="+$(no).attr("data-page");
    location.href = "/bookrank?" + url;
}
function goPage() {

    var url = "";
    url+="orderId="+$(".list_type_detective .act a").attr("data-id")+"&category="+$(".type-list .act").attr("data-chanid")+"&page="+$(".lbf-pagination-input").val()
    location.href = "/bookrank?" + url;

}
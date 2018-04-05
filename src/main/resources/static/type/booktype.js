$(function() {
	var s = location.href;
	s=s.substr(s.indexOf("?")+1);
	var strs=s.split("&");
	if(strs.length==1)
	{
//		alert($(".work-filter ul").find("li:eq(0)").size());
		$(".work-filter ul").find("li:eq(0)").addClass("act");
        $(".select-wrap a:eq(0)").addClass("act");
	}else
	{
		$.each(strs, function(index,item) {
		var keyValue=item.split("=");
		var filter = $(".work-filter ul").each(function(i){
			if($(this).attr("type")==keyValue[0])
			{
				var lis=$(this).find("li");
				lis.each(function(j){
					if($(this).attr("data-id")==keyValue[1])
					{
						$(this).addClass("act")
					}
				});
			}
		});
		
	});
        //	取最后一个
        ss2=strs[strs.length-1].split("=");
        $(".select-wrap a").each(function (index) {
            if($(this).attr("data-id")==ss2[1])
            {
                $(this).addClass("act");
            }
        })
	}





});

function getType(ele) {
	$(ele).parent().siblings("li").removeClass("act");
	$(ele).parent().addClass("act");
	var url = "";
	var filter = $(".work-filter .act");

	filter.each(function(index) {
			var type = $(this).parent().attr("type");
			var vars = $(this).attr("data-id");
//			if(vars == undefined) {
//				vars = $(this).attr("data-eid");
//			}
// 			if(index == filter.size() - 1) {
// 				url += type + "=" + vars;
// 			} else {
				url += type + "=" + vars + "&";
			// }
		});
	url+="page=1&orderId="+$(".select-wrap .act").attr("data-id");
		location.href = "/booktype?" + url;
	}
function getType2(ele) {
    $(ele).siblings("a").removeClass("act");
    $(ele).addClass("act");
    var url = "";
    var filter = $(".work-filter .act");

    filter.each(function(index) {
        var type = $(this).parent().attr("type");
        var vars = $(this).attr("data-id");
//			if(vars == undefined) {
//				vars = $(this).attr("data-eid");
//			}
// 			if(index == filter.size() - 1) {
// 				url += type + "=" + vars;
// 			} else {
        url += type + "=" + vars + "&";
        // }
    });
    url+="page=1&orderId="+$(".select-wrap .act").attr("data-id");
    location.href = "/booktype?" + url;
}
function turnOverPage(no){
    var url = "";
    var filter = $(".work-filter .act");

    filter.each(function(index) {
        var type = $(this).parent().attr("type");
        var vars = $(this).attr("data-id");
        url += type + "=" + vars + "&";
        // }
    });
    url+="page="+$(no).attr("data-page")+"&orderId="+$(".select-wrap .act").attr("data-id");
    location.href = "/booktype?" + url;
}
function goPage() {

    var url = "";
    var filter = $(".work-filter .act");

    filter.each(function(index) {
        var type = $(this).parent().attr("type");
        var vars = $(this).attr("data-id");
        url += type + "=" + vars + "&";
        // }
    });
    url+="page="+$(".lbf-pagination-input").val();+"&orderId="+$(".select-wrap .act").attr("data-id");
    location.href = "/booktype?" + url;

}
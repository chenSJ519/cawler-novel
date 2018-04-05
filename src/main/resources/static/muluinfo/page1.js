/*! HTML5 Shiv vpre3.6 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
  Uncompressed source: https://github.com/aFarkas/html5shiv  */
(function(a,b){function h(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function i(){var a=l.elements;return typeof a=="string"?a.split(" "):a}function j(a){var b={},c=a.createElement,f=a.createDocumentFragment,g=f();a.createElement=function(a){if(!l.shivMethods)return c(a);var f;return b[a]?f=b[a].cloneNode():e.test(a)?f=(b[a]=c(a)).cloneNode():f=c(a),f.canHaveChildren&&!d.test(a)?g.appendChild(f):f},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/\w+/g,function(a){return c(a),g.createElement(a),'c("'+a+'")'})+");return n}")(l,g)}function k(a){var b;return a.documentShived?a:(l.shivCSS&&!f&&(b=!!h(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),g||(b=!j(a)),b&&(a.documentShived=b),a)}var c=a.html5||{},d=/^<|^(?:button|form|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,f,g;(function(){var c=b.createElement("a");c.innerHTML="<xyz></xyz>",f="hidden"in c,f&&typeof injectElementWithStyles=="function"&&injectElementWithStyles("#modernizr{}",function(b){b.hidden=!0,f=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).display=="none"}),g=c.childNodes.length==1||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()})();var l={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:k};a.html5=l,k(b)})(this,document)
function jumpPage() {
  var event = document.all ? window.event : arguments[0];
  if (event.keyCode == 37) document.location = preview_page;
  if (event.keyCode == 39) document.location = next_page;
  if (event.keyCode == 13) document.location = index_page;
}
document.onkeydown=jumpPage;
//µÇÂ½
var jieqiUserId = 0;
var jieqiUserName = '';
var jieqiUserPassword = '';
var jieqiUserGroup = 0;
var jieqiNewMessage = 0;
var jieqiUserVip = 0;
var jieqiUserHonor = '';
var jieqiUserGroupName = '';
var jieqiUserVipName = '';
var timestamp = Math.ceil((new Date()).valueOf()/1000); //µ±Ç°Ê±¼ä´Á
var flag_overtime = -1;
if(document.cookie.indexOf('jieqiUserInfo') >= 0){
	var jieqiUserInfo = get_cookie_value('jieqiUserInfo');
	//document.write(jieqiUserInfo);
	start = 0;
	offset = jieqiUserInfo.indexOf(',', start); 
	while(offset > 0){
		tmpval = jieqiUserInfo.substring(start, offset);
		tmpidx = tmpval.indexOf('=');
		if(tmpidx > 0){
           tmpname = tmpval.substring(0, tmpidx);
		   tmpval = tmpval.substring(tmpidx+1, tmpval.length);
		   if(tmpname == 'jieqiUserId') jieqiUserId = tmpval;
		   else if(tmpname == 'jieqiUserName_un') jieqiUserName = tmpval;
		   else if(tmpname == 'jieqiUserPassword') jieqiUserPassword = tmpval;
		   else if(tmpname == 'jieqiUserGroup') jieqiUserGroup = tmpval;
		   else if(tmpname == 'jieqiNewMessage') jieqiNewMessage = tmpval;
		   else if(tmpname == 'jieqiUserVip') jieqiUserVip = tmpval;
		   else if(tmpname == 'jieqiUserHonor_un') jieqiUserHonor = tmpval;
		   else if(tmpname == 'jieqiUserGroupName_un') jieqiUserGroupName = tmpval;
		}
		start = offset+1;
		if(offset < jieqiUserInfo.length){
		  offset = jieqiUserInfo.indexOf(',', start); 
		  if(offset == -1) offset =  jieqiUserInfo.length;
		}else{
          offset = -1;
		}
	}
	flag_overtime = get_cookie_value('overtime');
} else {
	delCookie('overtime');
}
function delCookie(name){
   var date = new Date();
   date.setTime(date.getTime() - 10000);
   document.cookie = name + "=a; expires=" + date.toGMTString();
}

function get_cookie_value(Name) { 
  var search = Name + "=";
¡¡var returnvalue = ""; 
¡¡if (document.cookie.length > 0) { 
¡¡  offset = document.cookie.indexOf(search) 
¡¡¡¡if (offset != -1) { 
¡¡¡¡  offset += search.length 
¡¡¡¡  end = document.cookie.indexOf(";", offset); 
¡¡¡¡  if (end == -1) 
¡¡¡¡  end = document.cookie.length; 
¡¡¡¡  returnvalue=unescape(document.cookie.substring(offset, end));
¡¡¡¡} 
¡¡} 
¡¡return returnvalue; 
}
document.writeln("<script>window._bd_share_config={\"common\":{\"bdSnsKey\":{},\"bdText\":\"\",\"bdMini\":\"2\",\"bdMiniList\":false,\"bdPic\":\"\",\"bdStyle\":\"0\",\"bdSize\":\"16\"},\"slide\":{\"type\":\"slide\",\"bdImg\":\"6\",\"bdPos\":\"right\",\"bdTop\":\"181.5\"},\"image\":{\"viewList\":[\"qzone\",\"tsina\",\"tqq\",\"renren\",\"weixin\"],\"viewText\":\"·ÖÏíµ½£º\",\"viewSize\":\"32\"}};with(document)0[(getElementsByTagName(\'head\')[0]||body).appendChild(createElement(\'script\')).src=\'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=\'+~(-new Date()/36e5)];</script>");
//ËÑË÷+·ÖÏí+µÇÂ½
function seh(){
document.writeln("<div class=\"search_l\">");
document.writeln("<div id=sel_sub_div class=\"seh_a\">");
document.writeln('</div>');
document.writeln("<form action=\"http://zhannei.baidu.com/cse/search\" target=\"_blank\">");
document.writeln("<input value=\"5014614735421351253\" name=\"s\" type=\"hidden\">");
document.writeln("<input name=\"q\" type=\"text\" class=\"input\">");
document.writeln("<input type=\"submit\"  value=\"\" class=\"sehbtn\">");
document.writeln("</form>");              
document.writeln('</div>');
document.writeln("<div class=\"baidufx\"><!-- Baidu Button BEGIN -->");
document.writeln("<div id=\"bdshare\" class=\"bdshare_t bds_tools_32 get-codes-bdshare\">");
document.writeln("<a class=\"bds_tsina\"></a>");
document.writeln("<a class=\"bds_renren\"></a>");
document.writeln("<a class=\"bds_tqq\"></a>");
document.writeln("<a class=\"bds_sqq\"></a>");
document.writeln("<span class=\"bds_more\"></span>");
document.writeln("<a class=\"shareCount\"></a>");
document.writeln("</div>");
document.writeln("<script type=\"text/javascript\" id=\"bdshare_js\" data=\"type=tools&amp;uid=0\" ></script>");
document.writeln("<script type=\"text/javascript\" id=\"bdshell_js\"></script>");
document.writeln("<script type=\"text/javascript\">");
document.writeln("document.getElementById(\"bdshell_js\").src = \"http://bdimg.share.baidu.com/static/js/shell_v2.js?cdnversion=\" + Math.ceil(new Date()/3600000)");
document.writeln("</script>");
document.writeln("<!-- Baidu Button END --></div>");
document.writeln("<div class=\"login\">");
if(jieqiUserId != 0 && jieqiUserName != '' && (document.cookie.indexOf('PHPSESSID') != -1 || jieqiUserPassword != '')){
document.writeln('<em class=\"o\"></em><a href="/userdetail.php?uid='+jieqiUserId+'" target="_top">'+jieqiUserName+'</a>');
if(jieqiNewMessage > 0){
document.writeln('<a href=\"/message.php?uid='+jieqiUserId+'&box=inbox\" target=\"_top\"><span class=\"hottext\">ÄúÓĞ¶ÌĞÅ</span></a>');
}else{
document.writeln('<a href=\"/message.php?uid='+jieqiUserId+'&box=inbox\" target=\"_top\">²é¿´¶ÌĞÅ</a>');
}
document.writeln('<a href=\"/modules/article/bookcase.php?uid='+jieqiUserId+'\" target=\"_top\">ÎÒµÄÊé¼Ü</a>');
document.writeln('<a href=\"/logout.php\" target=\"_self\">ÍË³ö</a>');
}else{
  var jumpurl="";
  if(location.href.indexOf("jumpurl") == -1){
    jumpurl=location.href;
  }
document.writeln("<em class=\"l\"></em><a href=\"/login.php?jumpurl="+jumpurl.replace('&','%26')+"\" target=\"_top\">µÇÂ¼</a><a href=\"/register.php\" target=\"_top\">×¢²á</a>");
}
document.writeln("</div>");
}

//±³¾°ĞŞ¸Ä
function bgs(){
document.writeln("<div class=\"bgs\"><ul><li><input type=\"text\" class=\"textm\" id=\"screen\" value=\"¹öÆÁ\"><input type=\"hidden\" class=\"textm\" id=\"screen2\" value=\"0\"><span class=\"btn\" id=\"screen1\"></span></li><li class=\"select\"><p>0</p><p>1Âı</p><p>2</p><p>3</p><p>4</p></li></ul>");
document.writeln("<ul><li><input type=\"text\" class=\"textm\" id=\"background\" value=\"±³¾°\"  /><input type=\"hidden\" id=\"background2\" value=\"#FFFFFF\" /><span class=\"btn\" id=\"background1\"></span></li><li class=\"select\"><p class=\"bg_huang\">Ä¬ÈÏ</p><p class=\"bg_lan\">µ­À¶</p><p class=\"bg_lv\">µ­ÂÌ</p><p class=\"bg_fen\">ºì·Û</p><p class=\"bg_bai\">°×É«</p><p class=\"bg_hui\">»ÒÉ«</p><p class=\"bg_hei\">ÆáºÚ</p><p class=\"bg_cao\">²İÂÌ</p><p class=\"bg_cha\">²èÉ«</p><p class=\"bg_yin\">ÒøÉ«</p><p class=\"bg_mi\">Ã×É«</p></li></ul>");
document.writeln("<ul><li><input type=\"text\" class=\"textm\" id=\"fontSize\" value=\"×ÖºÅ\" /><input type=\"hidden\" id=\"fontSize2\" value=\"16px\" /><span class=\"btn\" id=\"fontSize1\"></span></li><li class=\"select\"><p class=\"fon_14\">14px</p><p class=\"fon_16\">16px</p><p class=\"fon_18\">18px</p><p class=\"fon_20\">20px</p><p class=\"fon_24\">24px</p><p class=\"fon_30\">30px</p><p class=\"fon_34\">34px</p></li></ul>");
document.writeln("<ul><li><input type=\"text\" class=\"textm\" id=\"fontColor\" value=\"×ÖÉ«\" /><input type=\"hidden\" id=\"fontColor2\" value=\"z_mo\" /><span class=\"btn\" id=\"fontColor1\"></span></li><li class=\"select\"><p class=\"z_hei\">ºÚÉ«</p><p class=\"z_red\">ºìÉ«</p><p class=\"z_lan\">À¶É«</p><p class=\"z_lv\">ÂÌÉ«</p><p class=\"z_hui\">»ÒÉ«</p><p class=\"z_li\">ÀõÉ«</p><p class=\"z_wu\">Îí°×</p><p class=\"z_zi\">°µ×Ï</p><p class=\"z_he\">ÃµºÖ</p></li></ul>");
document.writeln("<ul><li><input type=\"text\" class=\"textm\" id=\"fontFamily\" value=\"×ÖÌå\" /><input type=\"hidden\" id=\"fontFamily2\" value=\"fam_song\" /><span class=\"btn\" id=\"fontFamily1\"></span></li><li class=\"select\"><p class=\"fam_song\">ËÎÌå</p><p class=\"fam_hei\">ºÚÌå</p><p class=\"fam_kai\">¿¬Ìå</p><p class=\"fam_qi\">ÆôÌå</p><p class=\"fam_ya\">ÑÅºÚ</p></li></ul><input type=\"button\" class=\"ud_but2\" onmousemove=\"this.className=\'ud_but22\'\" onmouseout=\"this.className=\'ud_but2\'\" value=\"±£´æ\" id=\"saveButton\" /><input type=\"button\" class=\"ud_but1\" onmousemove=\"this.className=\'ud_but11\'\" onmouseout=\"this.className=\'ud_but1\'\"  value=\"»Ö¸´\" id=\"recoveryButton\" /></div>");
}

var date = new Date();
var timestamp = Date.parse(new Date());
date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));

//jq cookie²å¼ş
jQuery.cookie = function(name, value, options) {  
			if (typeof value != 'undefined') { // name and value given, set cookie
				options = options || {};  
				if (value === null) {  
					value = '';  
					options.expires = -1;  
				}  
				var expires = '';  
				if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {  
					var date;  
					if (typeof options.expires == 'number') {  
						date = new Date();  
						date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));  
					} else {  
						date = options.expires;  
					}  
					expires = '; expires=' + date.toUTCString();  
				}  
				var path = options.path ? '; path=' + (options.path) : '';  
				var domain = options.domain ? '; domain=' + (options.domain) : '';  
				var secure = options.secure ? '; secure' : '';  
				document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');  
			} else {  
				var cookieValue = null;  
				if (document.cookie && document.cookie != '') {  
					var cookies = document.cookie.split(';');  
					for (var i = 0; i < cookies.length; i++) {  
						var cookie = jQuery.trim(cookies[i]);  
						if (cookie.substring(0, name.length + 1) == (name + '=')) {  
							cookieValue = decodeURIComponent(cookie.substring(name.length + 1));  
							break;  
						}  
					}  
				}  
				return cookieValue;  
			}  
		};



$(function(){	
	//¹öÆÁ
	$('#screen').click(function (){
		var selected = $('#screen').parent().parent().children(".select") ;
		selected.show() ;

	});
	$('#screen1').click(function (){
		var selected = $('#screen').parent().parent().children(".select") ;
		selected.show() ;

	});

	$('#screen').parent().parent().children('.select').children('p').each(function(){
		$(this).click(function(){

			$('#screen').val($(this).html()) ;
			$('#screen').parent().parent().children('.select').hide() ;
		 	var val = $('#screen').val() ;
			$.cookie('screen', val , { path: '/',expires: date});
			autoScroll.start() ;

		});
	});
	//¹öÆÁ end
	/*ÑÕÉ«*/

	//±³¾°É«¸Ä±ä
	$('#background').click(function (){
		var selected = $('#background').parent().parent().children(".select") ;
		selected.show() ;

	});
	$('#background1').click(function (){
		var selected = $('#background1').parent().parent().children(".select") ;
		selected.show() ;

	});
	$('.select').parent().each(function (){
		$(this).mouseover(function (){

			$(this).children(".select").show() ;
		}) ;
	});

	$('.select').parent().each(function (){
		$(this).mouseout(function (){
			$(this).children(".select").hide() ;
		}) ;
	});



	$('#background').parent().parent().children('.select').children('p').each(function(){
		$(this).click(function(){
			$('#background').val($(this).html()) ;
			$('#background').parent().parent().children('.select').hide() ;

			$(".ydleft").removeClass($('#background2').val());
		 	$("body").removeClass($('#background2').val());
			$("body").attr('style' , '') ;
			$(".ydleft").attr('style' , '') ;
			$('#background2').val($(this).attr('class')) ;

			$(".ydleft").addClass($(this).attr('class'));
		 	$("body").addClass($(this).attr('class'));
		});
	});

	//±³¾°É«¸Ä±ä end

	//ÎÄ×Ö´óĞ¡
	$('#fontSize').click(function (){
		var selected = $('#fontSize').parent().parent().children(".select") ;
		selected.show() ;

	});
	$('#fontSize1').click(function (){
		var selected = $('#fontSize1').parent().parent().children(".select") ;
		selected.show() ;

	});

	$('#fontSize').parent().parent().children('.select').children('p').each(function(){
		$(this).click(function(){
			$('#fontSize').val($(this).html()) ;
			$('#fontSize').parent().parent().children('.select').hide() ;

			$(".yd_text2").removeClass($('#fontSize2').val());
			$('#fontSize2').val($(this).attr('class')) ;
			$(".yd_text2").addClass($(this).attr('class'));

		});
	});
	//ÎÄ×Ö´óĞ¡ end


	//×ÖÌå
	$('#fontFamily').click(function (){
		var selected = $('#fontFamily').parent().parent().children(".select") ;
		selected.show() ;

	});
	$('#fontFamily1').click(function (){
		var selected = $('#fontFamily1').parent().parent().children(".select") ;
		selected.show() ;

	});

	$('#fontFamily').parent().parent().children('.select').children('p').each(function(){
		$(this).click(function(){
			$('#fontFamily').val($(this).html()) ;
			$('#fontFamily').parent().parent().children('.select').hide() ;

			$(".yd_text2").removeClass($('#fontFamily2').val());
			$('#fontFamily2').val($(this).attr('class')) ;
			$(".yd_text2").addClass($(this).attr('class'));

		});
	});
	//×ÖÌå end

	//ÎÄ×ÖÑÕÉ«¸Ä±ä
	$('#fontColor').click(function (){
		var selected = $('#fontColor').parent().parent().children(".select") ;
		selected.show() ;

	});
	$('#fontColor1').click(function (){
		var selected = $('#fontColor1').parent().parent().children(".select") ;
		selected.show() ;

	});

	$('#fontColor').parent().parent().children('.select').children('p').each(function(){
		$(this).click(function(){
			$('#fontColor').val($(this).html()) ;
			$('#fontColor').parent().parent().children('.select').hide() ;
			$(".yd_text2").removeClass($('#fontColor2').val());
			$('#fontColor2').val($(this).attr('class')) ;
			$(".yd_text2").addClass($(this).attr('class'));

		});
	});

	//ÎÄ×ÖÑÕÉ«¸Ä±ä end
	//±£´æ°´Å¥ , »Ö¸´°´Å¥
	$("#saveButton").click(function (){
		$.cookie('screen', $('#screen').val(), { path: '/',expires: date});
		$.cookie('background', $('#background2').val() , { path: '/',expires: date});
		$.cookie('fontSize', $('#fontSize2').val() , { path: '/',expires: date});
		$.cookie('fontColor', $('#fontColor2').val() , { path: '/',expires: date});
		$.cookie('fontFamily', $('#fontFamily2').val() , { path: '/',expires: date});
		alert('±£´æ³É¹¦') ;
	}) ;
	$("#recoveryButton").click(function (){
		$('body').removeClass($.cookie('background')) ;
		$('body').removeClass($('#background2').val()) ;
		$('.ydleft').removeClass($('#background2').val()) ;
		$('.ydleft').removeClass($.cookie('background')) ;
		$('body').attr('style' , 'background:#dbdbdb') ;
		$('.ydleft').attr('style' , 'background:#FFF') ;	
		$('.yd_text2').removeClass($('#background2').val()) ;
		$('.yd_text2').removeClass($('#fontSize2').val()) ;
		$('.yd_text2').removeClass($.cookie('fontSize')) ;
		$('.yd_text2').removeClass($('#fontColor2').val())
		$('.yd_text2').removeClass($.cookie('fontColor')) ;
		$('.yd_text2').removeClass($('#fontFamily2').val()) ;
		$('.yd_text2').removeClass($.cookie('fontFamily')) ;

		$.cookie('background', '' , { path: '/',expires: date});
		$.cookie('fontSize', '' , { path: '/',expires: date});
		$.cookie('fontColor', '' , { path: '/',expires: date});
		$.cookie('fontFamily', '' , { path: '/',expires: date});
		$('#screen').val('¹öÆÁ') ;
		$('#background').val('±³¾°') ;
		$('#fontColor').val('×ÖÉ«') ;
		$('#fontFamily').val('×ÖÌå') ;
		$('#fontSize').val('×ÖºÅ') ;

	}) ;
	//±£´æ°´Å¥ , »Ö¸´°´Å¥ end

	var autoScroll = (function() {
			var top;
			var timer;
			var actualTop;
			function startTimer() {
				timer = setInterval(scroll, 40);
				try {
					if (document.selection) {
						document.selection.empty();
					} else {
						var selection = document.getSelection();
						selection.removeAllRanges();
					}
				} catch(e) {}
			}
			function scroll() {
				top = document.documentElement.scrollTop || document.body.scrollTop;
				if($.cookie('screen')!=null){
					top = top+parseInt($.cookie('screen'));
				}
				
				window.scroll(0, top);
				actualTop = document.documentElement.scrollTop || document.body.scrollTop;
				if (top != actualTop) {
					stopTimer();
				}
			}
			function stopTimer() {
				clearInterval(timer);
			}
			return {
				start: startTimer,
				stop: stopTimer
			};
		})();
		jQuery(document).dblclick(autoScroll.start);
		jQuery(document).mousedown(autoScroll.stop);


});

//ÔÄ¶ÁcookÑùÊ½
function readCookStyle(){
	//¹öÆÁ
	if($.cookie('screen')!=null&&$.cookie('screen')!=''){
		$('#screen').val($.cookie('screen')) ;

	}else{
		$('#screen').val('¹öÆÁ') ;
	}

	//¹öÆÁ end

	//ÎÄ×Ö´óĞ¡
	if($.cookie('fontSize')!=null&&$.cookie('fontSize')!=''){

		$(".yd_text2").addClass($.cookie('fontSize'));
		size=$.cookie('fontSize').replace('fon_',"");
		size += 'px' ;
		$('#fontSize').val(size) ;
		$('#fontSize2').val($.cookie('fontSize')) ;
	}

	//ÎÄ×Ö´óĞ¡ end

	//±³¾°
	if($.cookie('background')!=null&&$.cookie('background')!=''){
		var bg_val = '±³¾°' ;
		if($.cookie('background')=='bg_lan') bg_val = 'µ­À¶' ;
		if($.cookie('background')=='bg_huang') bg_val = 'Ä¬ÈÏ' ;
		if($.cookie('background')=='bg_lv') bg_val = 'µ­ÂÌ' ;
		if($.cookie('background')=='bg_fen') bg_val = 'ºì·Û' ;
		if($.cookie('background')=='bg_bai') bg_val = '°×É«' ;
		if($.cookie('background')=='bg_hui') bg_val = '»ÒÉ«' ;
		if($.cookie('background')=='bg_hei') bg_val = 'ÆáºÚ' ;
		if($.cookie('background')=='bg_cao') bg_val = '²İÂÌ' ;
		if($.cookie('background')=='bg_cha') bg_val = '²èÉ«' ;
		if($.cookie('background')=='bg_yin') bg_val = 'ÒøÉ«' ;
		if($.cookie('background')=='bg_mi') bg_val = 'Ã×É«' ;
		
		$('#background2').val($.cookie('background')) ;
		$('#background').val(bg_val) ;

		$("body").addClass($.cookie('background'));
		$(".ydleft").addClass($.cookie('background'));
		$(".yd_text2").addClass($.cookie('background'));
	}
	//±³¾° end

	//ÎÄ×ÖÑÕÉ«
	if($.cookie('fontColor')!=null&&$.cookie('fontColor')!=''){
		var zt_val = '×ÖÉ«' ;
		if($.cookie('fontColor')=='z_hei') zt_val = 'ºÚÉ«' ;
		if($.cookie('fontColor')=='z_red') zt_val = 'ºìÉ«' ;
		if($.cookie('fontColor')=='z_lan') zt_val = 'À¶É«' ;
		if($.cookie('fontColor')=='z_lv') zt_val = 'ÂÌÉ«' ;
		if($.cookie('fontColor')=='z_hui') zt_val = '»ÒÉ«' ;
		if($.cookie('fontColor')=='z_li') zt_val = 'ÀõÉ«' ;
		if($.cookie('fontColor')=='z_wu') zt_val = 'Îí°×' ;
		if($.cookie('fontColor')=='z_zi') zt_val = '°µ×Ï' ;
		if($.cookie('fontColor')=='z_he') zt_val = 'ÃµºÖ' ;

		$('#fontColor2').val($.cookie('fontColor')) ;
		$('#fontColor').val(zt_val) ;
		$(".yd_text2").addClass($.cookie('fontColor'));
	}
	//ÎÄ×ÖÑÕÉ« end

	//×ÖÌå
	if($.cookie('fontFamily')!=null&&$.cookie('fontFamily')!=''){

		var fa_val = '×ÖÌå' ;
		if($.cookie('fontFamily')=='fam_song') fa_val = 'ËÎÌå' ;
		if($.cookie('fontFamily')=='fam_hei') fa_val = 'ºÚÌå' ;
		if($.cookie('fontFamily')=='fam_kai') fa_val = '¿¬Ìå' ;
		if($.cookie('fontFamily')=='fam_qi') fa_val = 'ÆôÌå' ;
		if($.cookie('fontFamily')=='fam_ya') fa_val = 'ÑÅºÚ' ;

		$('#fontFamily2').val($.cookie('fontFamily')) ;
		$('#fontFamily').val(fa_val) ;
		$(".yd_text2").addClass($.cookie('fontFamily'));
	}
	//×ÖÌå end
}

//footer+Í³¼Æ
function footer(){
document.writeln("<p>±¾Õ¾ËùÓĞĞ¡ËµÎª×ªÔØ×÷Æ·£¬ËùÓĞÕÂ½Ú¾ùÓÉÍøÓÑÉÏ´«£¬×ªÔØÖÁ±¾Õ¾Ö»ÊÇÎªÁËĞû´«±¾ÊéÈÃ¸ü¶à¶ÁÕßĞÀÉÍ¡£</p>");
document.writeln("<p><a href=\"/\" target=\"_blank\">ÌìÌìÖĞÎÄ</a><em>|</em><a href=\"/map/\" target=\"_blank\">ÍøÕ¾µØÍ¼</a><em>|</em><a href=\"/top/\" target=\"_blank\">ÅÅĞĞ°ñ</a><em>|</em><a href=\"/quanben/\" target=\"_blank\">È«±¾Ğ¡Ëµ</a><em>|</em><a href=\"#top\">·µ»Ø¶¥²¿</a></p>");
document.writeln("<div style=\"display:none\">");
document.writeln("<script type=\"text/javascript\">");
document.writeln("var _bdhmProtocol = ((\"https:\" == document.location.protocol) ? \" https://\" : \" http://\");");
document.writeln("document.write(unescape(\"%3Cscript src=\'\" + _bdhmProtocol + \"hm.baidu.com/h.js%3Fecc0bde8c021f94c1ff66a0be86f98d2\' type=\'text/javascript\'%3E%3C/script%3E\"));");
document.writeln("</script>");
document.writeln("<script type=\"text/javascript\">var cnzz_protocol = ((\"https:\" == document.location.protocol) ? \" https://\" : \" http://\");document.write(unescape(\"%3Cspan id=\'cnzz_stat_icon_1257400107\'%3E%3C/span%3E%3Cscript src=\'\" + cnzz_protocol + \"s95.cnzz.com/z_stat.php%3Fid%3D1257400107%26online%3D2\' type=\'text/javascript\'%3E%3C/script%3E\"));</script>");

document.writeln("</div>");
}



//¹ã¸æ



//¼ò·±Ìå
String.prototype.format = function(){ 
        var s = this; 
        for (var i=0,j=arguments.length; i<j; i++)
                s = s.replace("{" + (i) + "}", arguments[i]);
        return(s);
}

var Cookie= {
        Set : function (){
                var name = arguments[0], value = escape(arguments[1]),
                days = (arguments.length > 2)?arguments[2]:365,
                path = (arguments.length > 3)?arguments[3]:"/";
                with(new Date()){
                        setDate(getDate()+days);
                        days=toUTCString();
                }
                document.cookie = "{0}={1};expires={2};path={3}".format(name, value, days, path);
        },
        Get : function (){
                var returnValue=document.cookie.match(new RegExp("[\b\^;]?" + arguments[0] + "=([^;]*)(?=;|\b|$)","i"));
                return returnValue?unescape(returnValue[1]):returnValue;
        },
        Delete : function (){
                var name=arguments[0];
                document.cookie = name + "=1 ; expires=Fri, 31 Dec 1900 23:59:59 GMT;";
        }
}

var stTransform = function(s2t){
        var s="ÍòÓë³ó×¨Òµ´Ô¶«Ë¿¶ªÁ½ÑÏÉ¥¸öãÜ·áÁÙÎªÀö¾ÙÃ´ÒåÎÚÀÖÇÇÏ°ÏçÊéÂòÂÒÕùÓÚ¿÷ÔÆØ¨ÑÇ²úÄ¶Ç×ÙôÒÚ½ö´ÓÂØ²ÖÒÇÃÇ¼ÛÖÚÓÅ»ï»áØñÉ¡Î°´«ÉËØöÂ×Ø÷Î±ØùÌåÓàÓ¶ÙİÏÀÂÂ½ÄÕì²àÇÈ¿ëÙ­Ù¯Ù¶Ù±Ù²Á©Ù³¼óÕ®ÇãÙÌÙÍÙÇ³¥ÙÎÙÏ´¢ÙĞ¶ù¶ÒÙğµ³À¼¹ØĞË×ÈÑøÊŞÙæÄÚ¸Ô²áĞ´¾üÅ©Ú£·ë³å¾ö¿ö¶³¾»ÆàÁ¹Áè¼õ´ÕÁİ¼¸·ïÙìÆ¾¿­»÷ÛÊÔäÛ»»®ÁõÔò¸Õ´´É¾±ğ„iØÙ¹ôØÛØÜ¼Á¹Ğ½£°ş¾çÈ°°ìÎñÛ½¶¯Àø¾¢ÀÍÊÆÑ«ÛÂ„ÖÔÈØĞØÑÇøÒ½»ªĞ­µ¥ÂôÂ¬Â±ÎÔÎÀÈ´Úá³§ÌüÀúÀ÷Ñ¹ÑáØÇ²ŞÏáØÉÏÃ³ø¾ÇØËÏØ²Î…¥…¦Ë«·¢±äĞğµşÒ¶ºÅÌ¾ß´ÓõºóÏÅÂÀÂğßÄ¶ÖÌıÆôÎâß¼ß½Å»ß¿ßÂÔ±ßÃÇºÎØÓ½ßÇÁüßÌßĞßåßÔÏÌßßÏìÑÆßÕßØßÙßÜ»©ßàßâßæÓ´ßé†yßë†|ßïßğ»½ßüßõØÄßùÄö†ª†®Ğ¥Åçà¶à·à¿ºÇàÈĞêàÓÖöàààèÏùàëÍÅÔ°´ÑÎ§àğ¹úÍ¼Ô²Ê¥ÛÛ³¡Ûà»µ¿é¼áÌ³ÛŞ°ÓÎë·Ø×¹Â¢ÛâÛäÀİ¿ÑÛğÛÑµæÛëˆ™ˆ›ÛîÛñÛõÛ÷ÛöÛşÛûÇµ¶é‰GÇ½×³Éù¿Çºø‰×´¦±¸¸´¹»Í·¿ä¼Ğ¶áŞÆÛ¼·Ü½±°Â×±¸¾Âèåüåıæ£æ©½ªÂ¦æ«æ¬½¿æ®Óéæ´æµ‹OÓ¤æ¿ÉôæÁæÈæÉæÍæÖËïÑ§ÂÏÄş±¦Êµ³èÉóÏÜ¹¬¿í±öÇŞ¶ÔÑ°µ¼ÊÙ½«¶û³¾Ò¢ŞÏÊ¬¾¡²ãŒÁÌë½ìÊôÂÅåğÓìËêÆñá«¸Úá­á®á°µºÁëÔÀá´¿ùNá»Ï¿iá½á¿ÂÍáÀáÁÕ¸áÉÂáÎáĞáÕáÛ¹®ÛÏ±ÒË§Ê¦àøÕÊÁ±ÖÄ´øÖ¡°ïàüàıàşÃİá¥¸É²¢¹ã×¯ÇìÂ®âĞ¿âÓ¦ÃíÅÓ·ÏöâŞ¿ªÒìÆúÕÅÃÖåòÍäµ¯Ç¿¹éµ±Â¼¦Ñå³¹¾¶áâÓùÒäâãÓÇâé»³Ì¬ËËâäâæâêâëÁ¯×Üí¡âøÁµ¿Ò¶ñâúâûâıâüÄÕã¢ÔÃí¨Ğüã¥Ãõ¾ª¾å²Ò³Í±¹ã«²Ñµ¬¹ßíªã³·ßã´Ô¸Éå‘\ãÀí¯ÀÁãÁí°ê§Ï·ê¨Õ½ê¯»§ÔúÆËÇ¤Ö´À©ŞÑÉ¨ÑïÈÅ¸§Å×ŞÒ¿ÙÂÕÇÀ»¤±¨µ£ÄâÂ£¼ğÓµÀ¹Å¡²¦Ôñ¹ÒÖ¿ÂÎ’¥ÎÎÌ¢Ğ®ÄÓµ²ŞØÕõ¼·»Ó’¦ÀÌËğ¼ñ»»µ·¾İÄíÂ°ŞâÖÀµ§²ôŞèŞêÀ¿Şì²ó¸éÂ§½ÁĞ¯ÉãŞó°ÚÒ¡±÷Ì¯Şü³ÅÄìß¢ß£ß¥ËÓÔÜµĞÁ²ÊıÕ«ìµ¶·Õ¶¶ÏÎŞ¾ÉÊ±¿õ•Dê¼Öç•oÏÔ½úÉ¹ÏşêÊÔÎêÍÔİêÓÔıÊõÆÓ»úÉ±ÔÓÈ¨ÌõÀ´Ñîè¿½Ü¼«¹¹èÈÊàÔæèÀèÅèÇÇ¹·ãèÉ¹ñÄûèßèÙÕ¤±êÕ»èÎèĞ¶°èÓèİÀ¸Ê÷ÆÜÑùèïèğèâèãèåµµèçÇÅèëèí½°×®ÃÎ—ƒ—…¼ìèùé¤èüèıé¡ÍÖÂ¥é­é´éµé·˜–¼÷éÄéÆºáéÉÓ£éÍ³÷éÖéÚéÜéİ»¶ì£Å·¼ßéâéä²ĞéæéçéééëÅ¹»Ùì±±Ï±ĞÕ±ë§ëªÆøÇâë²ëµ»ãººÎÛÌÀĞÚí³¹µÃ»ããÅ½Á¤ÂÙ²×›hãí»¦›mÅ¢Àáí´ãñãòãøĞºÆÃÔóãş½àÈ÷Íİä¤Ç³½¬½½ä¥›¸×Ç²âä«¼Ãä¯›º»ëä°Å¨ä±›»Í¿Ó¿ÌÎÀÔäµÁ°ä¶ÎĞ›é»ÁµÓÈó½§ÕÇÉ¬µíÔ¨äË×ÕäÂ½¥äÅÓæäÉÉøÎÂÓÎÍåÊªÀ£½¦äÓœ¾ää¹öÖÍäÙäÜÂúäŞÂËÀÄÂĞ±õÌ²œùäíäëäìäòÎ«Ç±äóÀ½äş±ôå°ÃğµÆÁéÔÖ²Óì¾Â¯ìÀì¿ìÁµãÁ¶³ãË¸ÀÃÌşÖòÑÌ·³ÉÕìÇ»âÌÌ½ıÈÈ»ÀìËìâìÑìÎìÖ°®Ò¯ë¹êóÇ£Îş¶¿êñ×´áîáïÓÌ±·áóªAÄü¶ÀÏÁÊ¨áöÕøÓüáøáıÁÔâ¨â¤ÖíÃ¨â¬Ï×Ì¡çá«_«`Âêçâ»·ÏÖ«oçôçëçå·©çç«šçõ¬QçöËöÇíÑşè¨è¯è¬è¶ÎÍê±µç»­³©î´³ëğÜÁÆÅ±ğİÑñğß´¯·èğåğâÓ¸¾·Ñ÷ğéğì»¾ğï³Õğ÷¯}ğùğü±ñÌ±ñ«ñ¨ñ®Ñ¢ñ²ñ³°¨ÖåñäÕµÑÎ¼à¸ÇµÁÅÌíîíö±€×ÅÕöíùíúÂ÷Öõ½Ãí¶·¯¿óí¸Âë×©íºÑâí¿íÂíÃÀù´¡³n¹èË¶íÌíÍ³}³~È·¼ï°­íÓí×¼îíÛíŞÀñµtìòìõµ»»öÙ÷Â»ìøÀëÍº¸ÑÖÖ»ı³Æ»à¶ŒïùË°öÕÎÈğ£ÇîÇÔÇÏÒ¤´ÜÎÑ¿úñ¼ñÀÊú¾ºóÆËñ±ÊóÈ¼ãÁıóÖÖşóÙÉ¸¹Yóİ³ïÇ©¼ò¹‚óåóæóêÂáóìóïóñÂ¨ÀºÀéóıô¥ÙáÀàôÌôĞôÏÔÁ·àÁ¸ôÖô×½ôôêæù¾ÀæúºìæûÏËæüÔ¼¼¶æıæş¼ÍÈÒÎ³ç¡À€´¿ç¢É´¸ÙÄÉÀ×İÂÚ·×Ö½ÎÆ·ÄÀ‚ÀƒÅ¦ç£Ïßç¤ç¥ç¦Á·×éÉğÏ¸Ö¯ÖÕç§°íç¨ç©ÉÜÒï¾­çª°óÈŞ½áç«ÈÆÀ„ç¬»æ¸øÑ¤ç­Âç¾ø½ÊÍ³ç®ç¯¾îĞåÀ…ËçÌĞ¼Ìç°¼¨Ğ÷ç±À†Ğøç²ç³´Âç´çµÉşÎ¬Ãàç·±Á³ñÀ‡ç¸ç¹×ÛÕÀçºÂÌ×ºç»ç¼ç½¼êÃåÀÂç¾ç¿¼©ÀˆçÀçÁç¶¶ĞçÂÀ‰çÃçÄ»ºµŞÂÆ±àçÅÔµçÆ¸¿çÈçÇ·ìÀŠçÉ²øçÊçËçÌçÍçÎçÏçĞÓ§ËõçÑçÒçÓçÔÉÉçÕçÖç×çØçÙ½ÉçÚó¿ÍøÂŞ·£°Õî¼î¿ôÇÏÛÇÌÁ™ÁšñìñïËÊ³ÜÄôÁûÖ°ñ÷Áªñù´ÏËà³¦·ôëÉÉöÖ×ÕÍĞ²µ¨Ê¤ëÊëËëÍëÖ½ºÂöëÚÔàÆêÄÔÅ§Ùõ½ÅÍÑëáÁ³À°ëçÄNëñÄåëïëğÌÚë÷ÅHÓßô¯½¢²Õôµ¼èÑŞÜ³ÒÕ½ÚØÂÜ¼ÎßÂ«ÜÊÎ­ÜÂÜÈÜÉ²ÔÜÑËÕÜÜÆ»¾¥Ü×ÜàÜãÜä¼ë¾£¼öÇQ¼ÔÜéÜêÜñÜöÜùµ´ÈÙ»çÜşÜıÓ«İ¡İ£İ¥Òñİ¤İ¦İ§Ò©İ°İ¯À³Á«İªİ«İ²»ñİµÓ¨İºİ»È[ÂÜÓ©ÓªİÓÏôÈø´ĞİÛİŞ½¯İäÀ¶¼»İñİ÷İöİëÇ¾İüİş°ªŞ­ÔÌŞ´Ş»ŞºÂ²ÂÇĞé³æò°ò±ËäÏºò²Ê´ÒÏÂì²Ïòºò¹¹ÆòÃòÉÂùÕİòÌòÍòÏòÓÍÉÎÏÀ¯Ó¬òå²õĞ«ò÷òîÎ…òıÏ]ĞÆÏÎ²¹³ÄÙò°ÀôÁĞ„ÍàÏ®ÑB×°ñÉÑTñÍñÏ¿ãñĞñÚñÜñßÒ[¼û¹ÛÓ_¹æÃÙÊÓêèÀÀ¾õêéêêêëÓ`êìêíêîêïõü´¥ö£Ô€ÓşÌÜÚ¥¼Æ¶©¸¼ÈÏ¼¥Ú¦Ú§ÌÖÈÃÚ¨ÆıÑµÒéÑ¶¼Ç×š½²»äÚ©ÚªÑÈÚ«Ğí¶ïÂÛ×›ËÏ·íÉè·Ã¾÷Ö¤Ú¬Ú­ÆÀ×çÊ¶×œÕ©ËßÕïÚ®Öß´ÊÚ°Ú¯×ÒëÚ±Ú²Ú³ÊÔÚ´Ê«ÚµÚ¶³ÏÖïÚ·»°µ®Ú¸Ú¹¹îÑ¯ÒèÚº¸ÃÏê²ïÚ»Ú¼×½ëÎÜÓïÚ½ÎóÚ¾ÓÕ»åÚ¿ËµËĞÚÀÇëÖîÚÁÅµ¶ÁÚÂ·Ì¿ÎÚÃÚÄË­ÚÅµ÷ÚÆÁÂ×»ÚÇÌ¸ÒêÄ±ÚÈµı»ÑÚÉĞ³ÚÊÚËÎ½ÚÌÚÍÚÎ²÷ÚÑÚÏÑèÚĞÃÕÚÒ× ÚÓÚÔÚÕĞ»Ò¥°ùÚÖÇ«Ú×½÷Ã¡ÚØÚÙÃıÌ·ÚÚÚÛÀ¾Æ×ÚÜÚİÇ´ÚŞÚß¹ÈØk±´Õê¸ºÚO¹±²ÆÔğÏÍ°ÜÕË»õÖÊ··Ì°Æ¶±á¹ºÖü¹á·¡¼úêÚêÛÌù¹óêÜ´ûÃ³·ÑºØêİÔôêŞ¼Ö»ßêßÁŞÂ¸Ôß×ÊêàêáêäêâêãÉŞ¸³¶ÄêåÊêÉÍ´ÍÚPÚQâÙÅâêæÀµÚR×¸êç×¬ÈüØÓØÍÔŞÚSÔùÉÄÓ®¸ÓÚWÕÔ¸ÏÇ÷ôõõ»Ô¾õÄõÅõÈ¼ùÛQõÎõÏõÑõÒÓ»³ì×ÙõÙõÜõæõçõé´ÚõïõòÇû³µÔş¹ìĞùŞaéí×ªéîÂÖÈíºäéïéğéñÖáéòéóéõéôéöé÷ÇáéøÔØéù½ÎŞbéúéû½Ïéü¸¨Á¾éı±²»Ô¹õéşŞcê¡ê¢ê£·ø¼­ŞdÊäàÎÔ¯Ï½Õ·ê¤ÕŞê¥´Ç±ç±è±ßÁÉ´ïÇ¨¹ıÂõÔË»¹Õâ½øÔ¶Î¥Á¬³ÙåÇåÉ¼£ÊÊÑ¡Ñ·µİåÎÂßÒÅÒ£µËÚ÷ÚùÓÊ×ŞÚşÁÚÓôÛ§Û£Û¦Ö£Û©ÛªÔÇµ¦ÔÍáN½´õ¦õ§ÄğÊÍÀïâ ¼øöÇöÉîÅîÆÕë¶¤îÈîÇîÉîÊÇ¥îËîÌè•·°µöîÍîÏè–îÎè—¸ÆîĞîÑ¶Û³®ÖÓÄÆ±µ¸ÖîÓîÔÔ¿ÇÕ¾ûÎÙ¹³îÖîÕîØî×Å¥îÙîÚÇ®îÛÇ¯îÜ²§îİîŞîßîàîá×êîâîã¼ØîäÓËÌú²¬ÁåîåÇ¦Ã­îæîçîèîéîëîìè™îíîîîïîğîòîôîóèœîõÍ­ÂÁîöî÷îøÕ¡îùÏ³îúîûèîüîıîşï¢¸õÃúï£ï¤½ÂÒ¿²ùï¥ï¦ï§Òøï¨Öıï©ÆÌèïªï«Á´ï¬ÏúËøï®ï­³ú¹øï¯ï°Ğâï±ï²·æĞ¿ï³ï´ïµÈñÌàï¶ï·ï¸ï¹ïºÕà´íÃªèŸï¾ï¿è ÎıïÀÂà´¸×¶½õÏÇïÃïÂïÄ¶§¼ü¾âÃÌïÅïÆéAïÇïÏïÈïÉïÊÇÂïñ¶ÍïËéBïÌïÍ¶ÆÃ¾ïÎéCïÒÕòéDïÓÄ÷ïÔÄøïÕïÖ¸ä°÷ï×éFïÚïÛïİéGïŞ¾µïáïßïàéHïâïãÁÍïäïåïæïçïèïéïêïëïìÀØéIïíÁ­ïîïïïğéJÏâ³¤ÃÅãÅÉÁãÆê\±ÕÎÊ´³ÈòãÇÏĞãÈ¼äãÉãÊÃÆÕ¢ÄÖ¹ëÎÅãËÃöãÌê]·§¸óºÒãÍãÎÔÄãÏê^ãĞÑËãÑãÒãÓãÔÑÖãÕ²ûÀ»ãÖê_À«ã×ãØãÙê`ãÚãÛêa¶ÓÑôÒõÕó½×¼ÊÂ½Â¤³ÂÚêÉÂÚíÔÉÏÕËæÒşÁ¥öÁÄÑ³ûöÅö¨Îíö«Ã¹ö°ö¦¾²ØÌ÷²÷³÷µ÷¹Î¤ÈÍí‚º«è¸è¹èºÔÏÒ³¶¥ÇêñüÏîË³ĞëçïÍç¹Ë¶Ùñı°äËÌñşÔ¤Â­ÁìÆÄ¾±ò¡¼ÕïFò¢ò£ïGò¤ÒÃÆµïHÍÇò¥ïIÓ±¿ÅÌâïJò¦ò§ÑÕ¶îò¨ò©µßòªò«ïK²üò¬ò­È§·çïrïsì©ìªì«ïtì¬ïuïvÆ®ì­ì®·É÷Ï÷Ğğ—¼¢ğ˜â¼â½â¾â¿âÀâÁ·¹Òû½¤ÊÎ±¥ËÇğ™âÂ¶üÈÄâÃğšğ›½Èğœ±ıâÄğ¶öâÅÄÙğğŸâÆÏÚ¹İâÇÀ¡ğ âÈ²öñ@âÉñAÁóâÊâËÂøâÌâÍâÎÂíÔ¦ÍÔÑ±³ÛÇıóR²µÂ¿æàÊ»æáæâ¾Ôæã×¤ÍÕæå¼İæäæææçÂîóS½¾æèÂæº§æéóTæê³ÒÑéóUóV¿¥æëÆïæìæíóWóXæîÆ­æïóYÉ§æğæñæòå¹æóæôÂâæõæöÖèæ÷óZæø÷Ã÷Å÷Æ÷Ş÷Ê÷ËÓã÷÷‚öÏ÷ƒÂ³öĞ÷…öÑöÒöÓöÔ÷†÷‡öÖ÷ˆ±«ö×÷‰öØöÙöÚ÷ŠöÛöÜ÷‹÷Œ÷÷öİöŞÏÊ÷ößöàöáöâöãöäÀğöåöæöçöèöé÷öê÷‘öëöì÷’öíöîöïöğöñöòöóöô¾¨÷“öõööö÷öø÷”÷•÷–÷—÷˜Èúöùöúöûöü÷™÷šöıöş÷¡÷¢÷£÷¤÷¥÷›÷œ÷¦÷§÷¨±î÷©÷ª÷«÷÷¬÷­ÁÛ÷®÷Ÿ÷ ÷¯ø@Äñğ¯¼¦ğ°Ãùû\Å¸Ñ»û]ğ±ğ²ğ³ğ´ğµÑ¼û^Ñìû_ğ·ğ¶Ô§û`ÍÒğ¸ğºğ¹ğ»ğ¼ûaûb¸ëğ½ºèûcğ¾ğ¿¾éğÀ¶ìğÁğÂğÃğÄÈµğÅğÆûdğÇÅôûeğÈûfûgûhğÉûiğÊ÷½ğËğÌğÍûkğÎûlûmûnûoğÏº×ûpğĞğÑğÒğÓğÔğÕğÖğØûrÓ¥ğ×ûsğÙûtõºÂóôï»ÆÙäüd÷ò÷õö¼ö½ü…ö¾Ø»÷ú÷şÆëì´³İö³ı†ı‡ö´Áäöµö¶ö·ö¸ö¹öºÈ£ö»Áú¹¨íè¹êÖ¾ÖÆ×ÉÖ»ÀïÏµ·¶ËÉÃ»³¢³¢ÄÖÃæ×¼ÖÓ±ğÏĞ¸É¾¡ÔàÆ´";
        var t="ÈfÅcáhŒ£˜I…²–|½zGƒÉ‡À†Ê‚€ãİØSÅRéûÅeüNÁxõ˜·†ÌÁ•àl•øÙIy ì¶Ìë…ƒ†®a®€ÓHÒC‡¾ƒ|ƒHÄö‚}ƒx‚ƒƒr±Šƒâ·•ş‚ø‚ã‚¥‚÷‚û‚t‚‚á‚ÎĞówğN‚òƒL‚b‚Hƒe‚É‚ÈƒSƒ~ƒŠƒz‚Rƒ‰ƒ°‚zƒ«ƒ€‚ùƒA‚ôƒEƒfƒ”ƒ¯ƒ†ƒ¦ƒ®ƒºƒ¶ƒ¼ühÌmêPÅdÆğB«F‡ÏƒÈŒùƒÔŒ‘ÜŠŞr‰VñTĞn›Q›rƒöœQœD›öœRœpœ„C×øPøD‘{„P“ôšëèÆc„„¢„t„‚„“„h„e„}„q„£„¥„’„©„„¦„ƒ„¡„ñŞk„Õ„ê„Ó„î„Å„Ú„İ„ìÃÍ„ã„ò…Q…T…^átÈA…f†ÎÙu±RûuÅPĞl…s„Sd•Ñ…–‰º…’…‡úû…˜BNıP¿h…¢ìaì^ëp°l×ƒ”¢¯BÈ~Ì–šU‡\»náá‡˜…Î†á†w‡Â †¢…Ç‡`‡Ò‡I‡³†h†T†J†Ü†èÔ†U‡µ‡“‡zß¸‡jûyßÉí‘†¡‡}‡^†ô‡‚‡W‡ˆ‡‡†Ñ‡O†ß‡Z†¤†î†r†¾ºô‡K†İ‡Êım‡Ó‡c‡[‡Š‡D‡¿‡ËàÀ‡†‡u‡Â‡Ú‡£Åü‡ÌÖoˆFˆ@‡è‡ú‡÷‡øˆDˆAÂ}‰¿ˆöÚæ‰Ä‰KˆÔ‰¯‰È‰Î‰]‰‰‹‰Å‰Å‰À‰¾‰¨ˆsˆ×‰|ˆº‰¡‰³‰Nˆß‰P‰_ˆå‰|ˆ‰q‰™‰Ï ‰ÑÂ•š¤‰Ø‰ÚÌ‚äÑ}‰òî^ÕFŠAŠZŠYŠJŠ^ª„ŠWŠy‹D‹Œ‹³‹‹‚Š™ËKŠä‹I‹Æ‹ÉŒDŠÊ‹z‹¹‹½‹ë‹È‹ğ‹‹‹Ü‹å‹Ô‹ßŒOŒWŒ\ŒŒšŒŒ™Œ‘—ŒmŒ’ÙeŒ‹Œ¦Œ¤Œ§‰ÛŒ¢ –‰mˆòŒÀŒÆ±MŒÓŒÚŒÏŒÃŒÙŒÒŒÕZšqØMçsS¹uX[–hGF{Aş˜n÷ˆMäVô£â¼¹pì–€Å›Ÿ®¤ºŸÃ§¬ÍÎ¾½ƒçÒLÖKVÇf‘c]Tì‘ªRı‹UF[é_®—‰ˆ›†—Ššw®”ä›§©Ø½Æ¶R‘›‘Ô‘n÷‘Ñ‘B‘Z‘“‘Yí‘z¿‚‘»‘«‘Ù‘©º‘Q‘ÃğÅÀÁ‚â‘Ò‘a‘‘ó@‘Ö‘K‘Í‘vÜ‘M‘„‘Tœ¡‘C‘‘|îŠ‘Ø‘€âğ‘¿‘Ğ‘¬‘ß‘â‘ò‘ê‘ğ‘ì‘ô¼™“ä’LˆÌ”U’Ğ’ß“P”_“á’“»“¸’à“Œ×oˆó“ú”M”n’ş“í”r”Q“Ü“ñ’ì“´”’é“ë“é’¶“Ï“õ“×’ê”D“]“Í“Æ“p“ì“Q“v“ş“Ó“ï“”S“Û“½“¥“«”ˆ“å”v”R“§”‡”y”z”d”[“u”P”‚”t“Î”f”X”]”x”\”€”³”¿”µıS”ÌôY”Ø”àŸoÅf•r•ç•ª•Ò•ƒ•îï@•x•ñ•Ô•Ï••Ÿ•º•á„Ğg˜ã™Cš¢ës™à—lí—î˜q‚Ü˜O˜‹˜º˜Ğ——™À—g—–˜Œ—÷—n™™™™f—d–Å˜Ë—£™±™É—™¾™µ™Ú˜ä—«˜Ó™è—¨—¿˜ï˜E™n˜˜ò˜å™u˜ª˜¶‰ô™„—®™z™ô˜¡™³˜ ™å™E˜Ç™ì™Â™°™Î™x™‘™‰™½™M™{™Ñ™Á™»™©™´º™™_šgšešWšš{š‘šˆšŒššš—š›šªš§İ®…”ÀšÖšĞšÚšâšäšåšè¡h›@œ«›°ßeœÏ›]–arœSœæœtœ¿œûğôœIÍ{oTaŠÉ›Ü¢¸D›Ñœ\{²œœÛáœyÒúgIœ†Gâ¡ø‰Tœ¥ı³œZi¬œuœİœoœì™¾q­ÕœYœOn^uÆOcBœØß[³ñ¢RsU§Lœş¹—M]VE´I©ËEut‡H“z‘|l®œçŸôì`Ä NŸ¬ tŸõŸ˜ŸÍücŸ’Ÿë q €ŸN TŸŸŸ©ŸıŸî Z C aŸáŸ¨ F cŸºıÁïÛ ” © Ó ¿ Ş ÙŠ î«EªwªqªNûƒªªŸªšªMª{ªœªbªzªsª«C«J«MØiØˆÎo«I«H­^­m¬„¬”¬|­h¬F¬š­t¬z«k¬m­‡­c¬q­\­I¬­‚¬­a­v­‹­‘®Y®TëŠ®‹•³ÙÜ® °X¯Ÿ¯‘°O¯ƒóœ¯¯‚°’åí°b¯d°W¯{°A¯ˆ°B°V°D¯”¯¯›°T°c°a°`°]°_°dÄŸ°}°™°—±Kû}±OÉw±I±P²g±{²”Öø± ²A²€²m²š³C´‰µ\µV´X´a´u³Œ³´^µZµaµ[µA³Îù´T³ˆ´“´o´™´_û|µK´ƒ´~‰AïàL¶Y¶B¶[µ¶\µœ·Aµ“¶Uëx¶d¶’·N·e·Q·x·v·„¶·d·€·w¸F¸`¸[¸G¸Z¸C¸Q¸]¸MØQ¸‚ºV¹S¹P¹a¹{»\»eºBº`ºYºš¹~»Iºº†»UºjºD»X»jº„ººˆºt»@»h»f»[¼eî¶i¼g¼c»›¼S¼Z¼Rğf¾o¿{ôé¼m¼u¼t¼qÀw¼v¼s¼‰¼wÀk¼o¼x¾•¼‹¼‡¼ƒ¼„¼†¾V¼{¼Œ¿v¾]¼Š¼ˆ¼y¼¼Ÿ¼…¼~¼‚¾€½C½X¼›¾š½M¼¼š¿—½K¿U½O½E½I½BÀ[½›½H½‰½q½Y½fÀ@½x½WÀL½o½k½{½j½^½g½y½½‹½ÀC½”½—½dÀ^½¿ƒ¾w¾c¾xÀm¾_¾p¾b¾y¾iÀK¾S¾d¾R¿‡¾I¾T¾^¾J¾C¾`¾U¾G¾Y¾l¾~¾|¾}¾’À|¾Ÿ¾˜¾ƒ¿ZÀD¾Œ¾E¾„¾œ¾€¾—¿P¾¾†¿|¾¾‡¾‰¿N¿`¿d¿b¿p¿\¿cÀp¿r¿O¿VÀ_¿~¿z¿wÀt¿s¿Š¿‰Ài¿¿˜¿•í\À`ÀRÀQÀUÀyÀ›¾WÁ_ÁPÁTÁ`ÁbÁuÁwÂNÂPÂEÂgÂeÂ–uÂ™Ã@ÂšÂœÂ“Â˜Â”ÃCÄcÄwÄdÄIÄ[Ã›Ã{Ä‘„Ù–VÄLÅFÃ„ÄzÃ}Ä’óvÄšÄXÄ“ÅLÄ_Ã“ÄTÄ˜ÅDáZÄsı|ÄìtÄeòvÄœÅNİ›ÅœÅÅ“ÆAÆDØWÆHË‡¹ÁdËGÊÌJÉÈ”ËÇ{ÈOÉnÆrÌK™”ÌOÇoÌdÊ\‰LŸ¦ÀOÇGË]ËRÇvÊÉœÊwËCËjÊ˜sÈœî ÎŸÉÊnË|ÉpÊaÊ{È‡È’ËÉWÉ‰ÈRÉÉPÈnËW«@Ê~¬“úLÉ”ÌEÌ}Î I¿MÊ’Ë_Ê[ÊrÊ‰ÊYÊVË{ËEÌyÊšævò‡ËNÌ`ÌAÌ@ÌIÌNË’éÂÌ\Ì”‘]Ì“ÏxÍAÏlëmÎrÏŠÎgÏÎ›ĞQÏ–Í˜ĞMÏ Ï|ĞUÏUÍÏuÎ‡Ï“Í‘ÎÏÏ‰ÏXÏsÏÏNÏ”ÏQÏ\ĞDá…ã•ÑaÒrĞ–Ò\‹–Ñ‹ÒmÒuÒUÑbÒdÑ‚ÑÒcÑÒMÒ@Òh¿‹ÒwÒŠÓ^ÒÒÒ’Ò•Ò—Ó[ÓXÓJÒ Ó]ÓCÓDÓMÓPÓUÓxÓ|Óz×„×uÖ`Ó…Ó‹Ó†Ó‡ÕJ×IÓ“ÓÓ‘×ŒÓ˜Ó™Ó–×hÓÓ›Ó•ÖvÖMÖÔnÓ ÔGÔSÓÕ“ÔKÔAÖSÔOÔLÔE×CÔbÔXÔuÔ{×RÔwÔpÔVÔ\ÔgÖaÔ~ÔxÔtÔv×gÔrÕEÕCÔ‡ÔŸÔŠÔ‘ÔœÕ\ÕDÔ–Ô’ÕQÔÔÔÔƒÔ„ÕŠÔ“Ô”ÔŒÕŸÔ‚×pÕ]Õ_ÕZÕVÕ`ÕaÕTÕdÕNÕfÕbÕOÕˆÖTÕŒÖZ×xÕÕuÕnÕ†Õ˜ÕlÕ”Õ{Õ~ÕÕÕrÕ„ÕxÖ\ÖRÕ™ÖeÖGÖCÖoÖ]Ö^Ö@ÖIÖX×‹ÖJÖOÖVÖBÖiÕ›ÕšÖƒ×•ÖqÖxÖ{ÖrÕÖtÖkÖ”Ö™Ö†×vÖ‡×T×P×S××V×H×—×l×d×·YØrØØ‘Ø“Ø’Ø•Ø”ØŸÙt”¡Ù~Ø›Ù|ØœØØšÙHÙÙAØÙEÙvÙSÙBÙNÙFÙLÙJÙQÙMÙRÙOÙ\Ù—ÙZÙVÙDÙUÙTÚEÙYÙWÚBÙgÙcÙlÙdÙxÙ€ıVÚHÙpÙnÚFÙkÙsÙrÙyÙ‡ÙˆÙ˜ÙÙÙÙ‘ÚI×“ÙšÙ›Ù ÚAÚMÚXÚwÚsÚ…ÚÜOÜSÛ„Û•ÜVÛ`ÜJÜEÛ‹Ü]ÜQÛxÜPÛ™ÜWÜUÜbÛ˜ÜXÜfÜkÜgÜ|Ü‡ÜˆÜ‰ÜÜÜŞDÜ—İ†Ü›ŞZİMİVŞ_İSİTİWÜ İFŞ]İUİpİYİdİeŞIİcİbİ`İ^İmİoİvİ‚İ…İxİİyİˆİzİwİİ—İ‹İœİ”Ş\Ş@İ İšŞAŞHŞOŞoŞqŞpß…ß|ß_ßwß^ß~ß\ß€ß@ßMßhß`ßBßtßƒŞŸÛEßmßxßdßfßŠß‰ßzßbà‡à—àwà]àuà’àôdàSàPà”ààiáBàyàájáwáuá‰á‡á„áŒÑYîÒèbèçYááá˜á”á“á•á‘âQâTâAáŸâlâCáå{âSåâOâ]â}âbââgânæRâcä^ä“âkâjè€šJâxæuã^â‚â[â€â^âoâZâ•åXã`ãQâ’ÀâãOâ˜â“ãXèãfãgâ›âšâ™èFãKâèpãUãTâ‹ãCãBãGâ”èIãoäDã™ãsäBäeäyçtã‡èKã~äXäHãŸæzåããŠäbäAã”çfãŒãxã“ãtã‘åPäCãqãçPã|ç|ä@ãyãœèTç„ääoånäˆæœçHäNæiä‡ä{äzåä†ä~çnäSäsähä\äç˜ç™äJäRäZäuä|åHäæNåeå^åWä˜åKå_åaådèŒåNåFå\åväŸäåUåVæIäåiåOå›å}å|çIæJåŠåšæ@æRå‘æ}å–æDæXåƒæVçUætæŸæ‚ænækè‡çæ‡æ“æyæ€æ^æ„ægçSçMæ çaçOçRçCæ—æ›çBç†è‘ç‚çhèuç…è|ç’è‰çjç‹èZèDèGèCç èOèdèsènè‚éLéTéVéWéZé\é]†–êJécééeébégéhé`élô[é|Â„êYé}é‚êGéyéwéué€ôbé†éêAé“éé‹ô]é”é’éé‘êUê@é˜êTéŸé êHêDêFêIêRêXê ê–êê‡ëAëHê‘ë]êê€ê„êŸëEëUëSë[ë`ëhëyër×‡ìZìFìVüqì\ìnìoìví^íXídíxífígíhínítíyíwíí“í”í•í™í—í˜íšíœîBî™îDí îCíî@îAïBîIîHîiîRîaîcîM}ŸâîWîUîlî_îjîhîe·fîwî}î„î€î…îî~ïDî”îî‹î—ÀhîîïAïEïLï^ïQïRïSïZï\ï`ï_ïdïhïjïjïwğ‹ğï}ğ‡ï€ğhï‚ğqïƒï„ï†ïˆï‹ğTï—ï–ï•ï˜ïğDğˆğAïğEïœğFïğGğLğIğNğHğKğRğQğWğ^ğlğğkğtğ’ğvğxğoğsğ}ğ~ğzğ€ğ‚ğ–ñRñSñWñZñYòŒñ_ñgóHñzñ‚ñ†ñ€ñxò|ñvñ„ñwñ{óAñ~ò”ÁRñ—òœò‘ñ˜ñ”ñ‰óQóPòGòòHñŸòEòUòTòSòKòRò“ò‰ò_òsòjò}ò\òˆòtòqò~òŠò…ò‹ò–óEóKóLóJótóyóxôWô|ôuô~ô€ô‡ôœôô”ô™ôŸõEõGöT÷|õOõWõVõNõU÷cõQõTõqõ^õwõnõbõjöfõ`÷d÷qõoõrõ~õœ÷\õ†÷~ö–öõöˆöœõ…õõŒõzöaõ—õ›öNõšöOöEöHöKöAöFöTõ öLöYöXõ™÷aölös÷lö[ö“ögöw÷{öqövömöe÷Föcö…üö’ööŠöö„öö˜÷B÷L÷Mö öš÷I÷@÷Z÷X÷[÷V÷s÷h÷k÷gøBøFëuøSøQøOútøfúIødøcøù…ûRø†ø{ø„øoø|øzøxøŠørúƒúvøøø ø’ù@øû[ø™ùMùPûZùNù]ùZùOú‘ùYù^ùoù‘ùgúAùlùiùkù‡ùˆùtú‰ù–ùŸù˜úXú\úBúFúgú_úOúVúWú^úYúQúsûWúpúwúú„úú–ú˜ûDú—ûIûLûXûUûzûœûŸüSüZüsütüoüwüxü{üƒìŠıBıOıRıWıXıZı[ı]ıeıgı_ıfıbılırıpıxı}ıˆııı”ÕIÑuÚÑëbÑe‚S¹ ó ƒÓ‡Ÿ‡Lô\üIœÊçŠ•éfÇ¬ƒÅKŞÕ";
        s2t = !!s2t || false;
        Cookie.Set("l",s2t?"t":"s");
        var stt = function(str){
                var r = "",i,j,k,c;
                for (i=0,j=str.length; i<j; i++)
                {
                        c = str.charAt(i);
                        k = (s2t)?s.indexOf(c):t.indexOf(c);
                        r+= (k==-1)?c:(s2t)?t.charAt(k):s.charAt(k);
                }
                return r;
        }
        return (function(o){
                if(!o)return;
                if(o.nodeType == 3){
                        o.nodeValue = stt(o.nodeValue);
                        return;
                }
                if (o.nodeType != 1)
                        return;
                if (o.tagName && ",OBJECT,FRAME,FRAMESET,IFRAME,SCRIPT,EMBD,STYLE,BR,HR,TEXTAREA,".indexOf(","+o.tagName.toUpperCase()+",")>-1)
                        return;
                if(o.title)
                        o.title = stt(o.title);
                if(o.alt)
                        o.alt = stt(o.alt);
                if(o.tagName && o.type && o.tagName.toUpperCase()=="INPUT" && ",button,submit,reset,".indexOf(o.type.toLowerCase())>-1)
                        o.value = stt(o.value);
                for (var i=0,j=o.childNodes.length; i<j; i++)
                {
                        arguments.callee(o.childNodes[i]);
                }
        })(document.body);
}

var st = function(){
        var t = Cookie.Get("l") == "t";
        stTransform(!t);
        document.getElementById("st").innerHTML = t?"·±ów":"¼òÌå";
}

window.onload = function(){
        if(Cookie.Get("l") == "t")
                setTimeout(function(){stTransform(true);document.getElementById("st").innerHTML = "¼òÌå";},100);
}



//È¡µÃÒ»¸ö¶ÔÏó£¬Ïàµ±ÓÚgetElementById()
function $_() {
  var elements = new Array();
  for (var i = 0; i < arguments.length; i++) {
    var element = arguments[i];
    if (typeof element == 'string') element = document.getElementById(element);
	Method.Element.apply(element);
    if (arguments.length == 1) return element;
    elements.push(element);
  }
  return elements;
}


//³£ÓÃº¯ÊıÀ©Õ¹
var Method = {
	Element	: function(){
		this.hide = function(){this.style.display="none"; return this;};
		this.show = function(){this.style.display=""; return this;};
		this.getValue = function(){if(this.value === undefined) return this.innerHTML; else return this.value;};
		this.setValue = function(s){if(this.value === undefined) this.setInnerHTML(s); else this.value = s;};
		this.subTag = function(){return $A(this.getElementsByTagName(arguments[0])).each(function(n){$_(n);});};
		this.remove = function(){return this.parentNode.removeChild(this);};
		this.nextElement = function(){var n = this;	for(var i=0,n; n = n.nextSibling; i++) if(n.nodeType==1) return $_(n); return null;};
		this.previousElement = function(){var n = this;	for (var i=0,n; n = n.previousSibling; i++) if(n.nodeType==1) return $_(n); return null;};
		this.getPosition =  function(){var e = this; var t=e.offsetTop; var l=e.offsetLeft; while(e=e.offsetParent){if($_(e).getStyle('position') == 'absolute' || $_(e).getStyle('position') == 'relative') break; t+=e.offsetTop; l+=e.offsetLeft;} return {x:l, y:t};};
		this.getStyle = function(name){ if(this.style[name]) return this.style[name]; else if(this.currentStyle) return this.currentStyle[name]; else if(document.defaultView && document.defaultView.getComputedStyle){ name = name.replace(/([A-Z])/g,"-$1").toLowerCase(); var s = document.defaultView.getComputedStyle(this,""); return s && s.getPropertyValue(name); } else return null;};
		this.setInnerHTML = function(s){var ua = navigator.userAgent.toLowerCase();s = s.replace(/<script([^>]+)src\s*=\s*\"([^>\"\']*)\"([^>]*)>\s*<\/script>/gi,'');if (ua.indexOf('msie') >= 0 && ua.indexOf('opera') < 0){ s = '<div style="display:none">for IE</div>' + s; s = s.replace(/<script([^>]*)>/gi,'<script$1 defer>'); this.innerHTML = '';this.innerHTML = s;	this.removeChild(this.firstChild);}else{var el_next = this.nextSibling; var el_parent = this.parentNode; el_parent.removeChild(this); this.innerHTML = s; if(el_next) el_parent.insertBefore(this, el_next); else el_parent.appendChild(this);}};	
	},
	Array :	function(){
		this.indexOf = function(){for (i=0; i<this.length; i++) if (this[i]==arguments[0]) return i; return -1;};
		this.each = function(fn){for (var i=0,len=this.length; i<len; i++){	fn(this[i],i);} return this;};
	},
	String : function(){
		this.trim = function(){var _re,_argument = arguments[0] || " ";	typeof(_argument)=="string"?(_argument == " "?_re = /(^\s*)|(\s*$)/g : _re = new RegExp("(^"+_argument+"*)|("+_argument+"*$)","g")) : _re = _argument; return this.replace(_re,"");};
		this.stripTags = function(){return this.replace(/<\/?[^>]+>/gi, '');};
		this.cint = function(){return this.replace(/\D/g,"")*1;};
		this.hasSubString = function(s,f){if(!f) f="";return (f+this+f).indexOf(f+s+f)==-1?false:true;};
	}
};
Method.Array.apply(Array.prototype);
Method.String.apply(String.prototype);

//ajax´¦Àí
function jieqi_ajax() {
	this.init = function() {
		this.handler = null;
		this.method = "POST";
  		this.queryStringSeparator = "?";
		this.argumentSeparator = "&";
		this.URLString = "";
		this.encodeURIString = true;
  		this.execute = false;
		this.requestFile = null;
		this.vars = new Object();
		this.responseStatus = new Array(2);
		this.failed = false;
		this.response = "";
		this.asynchronous = true;

		this.onLoading = function() { };
  		this.onLoaded = function() { };
  		this.onInteractive = function() { };
  		this.onComplete = function() { };
  		this.onError = function() { };
		this.onFail = function() { };

		try {
			this.handler = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				this.handler = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {
				this.handler = null;
			}
		}

		if (! this.handler) {
			if (typeof XMLHttpRequest != "undefined") {
				this.handler = new XMLHttpRequest();
			} else {
				this.failed = true;
			}
		}
  	};
	this.setVar = function(name, value, encoded){
		this.vars[name] = Array(value, encoded);
	};
	this.encVar = function(name, value, returnvars) {
		if (true == returnvars) {
			return Array(encodeURIComponent(name), encodeURIComponent(value));
		} else {
			this.vars[encodeURIComponent(name)] = Array(encodeURIComponent(value), true);
		}
	};
	this.processURLString = function(string, encode) {
		//regexp = new RegExp(this.argumentSeparator + "|" + encodeURIComponent(this.argumentSeparator));
		regexp = new RegExp(this.argumentSeparator);
		varArray = string.split(regexp);
		for (i = 0; i < varArray.length; i++){
			urlVars = varArray[i].split("=");
			if (true == encode){
				this.encVar(urlVars[0], urlVars[1], false);
			} else {
				this.setVar(urlVars[0], urlVars[1], true);
			}
		}
	};
	this.createURLString = function(urlstring) {
		if (urlstring) {
			if (this.URLString.length) {
				this.URLString += this.argumentSeparator + urlstring;
			} else {
				this.URLString = urlstring;
			}
		}
		this.setVar("ajax_request", new Date().getTime(), false);
		urlstringtemp = new Array();
		for (key in this.vars) {
			if (false == this.vars[key][1] && true == this.encodeURIString) {
				encoded = this.encVar(key, this.vars[key][0], true);
				delete this.vars[key];
				this.vars[encoded[0]] = Array(encoded[1], true);
				key = encoded[0];
			}
			urlstringtemp[urlstringtemp.length] = key + "=" + this.vars[key][0];
		}
		if (urlstring){
			this.URLString += this.argumentSeparator + urlstringtemp.join(this.argumentSeparator);
		} else {
			this.URLString += urlstringtemp.join(this.argumentSeparator);
		}
	};
	this.runResponse = function() {
		eval(this.response);
	};
	this.runAJAX = function(urlstring) {
		if (this.failed) {
			this.onFail();
		} else {
			if(this.requestFile.indexOf(this.queryStringSeparator) > 0){
				var spoint = this.requestFile.indexOf(this.queryStringSeparator);
				this.processURLString(this.requestFile.substr(spoint + this.queryStringSeparator.length), false);
				this.requestFile = this.requestFile.substr(0, spoint);
			}
			this.createURLString(urlstring);
			if (this.handler) {
				var self = this;
				
				if (this.method == "GET") {
					totalurlstring = this.requestFile + this.queryStringSeparator + this.URLString;
					this.handler.open(this.method, totalurlstring, this.asynchronous);
				} else {
					this.handler.open(this.method, this.requestFile, this.asynchronous);
					try {
						this.handler.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
					} catch (e) { }
				}

				this.handler.onreadystatechange = function() {
					switch (self.handler.readyState) {
						case 1:
							self.onLoading();
							break;
						case 2:
							self.onLoaded();
							break;
						case 3:
							self.onInteractive();
							break;
						case 4:
							self.response = self.handler.responseText;
							self.responseXML = self.handler.responseXML;
							self.responseStatus[0] = self.handler.status;
							self.responseStatus[1] = self.handler.statusText;

							if (self.execute) {
								self.runResponse();
							}

							if (self.responseStatus[0] == "200") {
								self.onComplete();
							} else {
								self.onError();
							}

							self.URLString = "";
							break;
					}
				}
				this.handler.send(this.method == "GET" ? null : this.URLString);
			}
		}
	};
	this.submitForm = function(form) {
		if(this.requestFile == null) this.requestFile = $_(form).attributes["action"].value;
		this.runAJAX(Form.serialize(form));
	};
	this.init();
}

//ajax¹¦ÄÜ¶ÔÏó
var Ajax = {
	Request	: function(vname, vars){
		var ajax = new jieqi_ajax();
		var param = {method:"",parameters:"",asynchronous:true,onLoading:function(){},onLoaded:function(){},onInteractive:function(){},onComplete:function(){},onError:function(){},onFail:function(){}};
		for (var key in vars) param[key] = vars[key];
		if(param["parameters"] != "") ajax.processURLString(param["parameters"], false);
		ajax.asynchronous = param["asynchronous"];
		ajax.onLoading = param["onLoading"];
		ajax.onLoaded = param["onLoaded"];
		ajax.onInteractive = param["onInteractive"];
		ajax.onError = param["onError"];
		ajax.onFail = param["onFail"];
		ajax.onComplete = param["onComplete"];
		if($_(vname) != null && typeof $_(vname).tagName != "undefined" && $_(vname).tagName.toLowerCase() == "form"){
			ajax.method = param["method"]=="" ? "POST" : param["method"];
			ajax.submitForm(vname);
		}else{
			ajax.method = param["method"]=="" ? "GET" : param["method"];
			ajax.requestFile = vname;
			ajax.runAJAX();
		}
	},
	Update : function(vname, vars){
		var param = {outid:"",tipid:"",onLoading:"", outhide:0, cursor:"wait", parameters:""};
		for (var key in vars) param[key] = vars[key];

		var isform = ($_(vname) != null && typeof $_(vname).tagName != "undefined" && $_(vname).tagName.toLowerCase() == "form") ? true : false;

		if(typeof param["onLoading"] == 'function'){
			var doLoading = param["onLoading"];
		}else{
			var doLoading = function(){
				if(param["cursor"] != "") document.body.style.cursor=param["cursor"];
				if(param["tipid"] != null && param["tipid"] != "") {$_(param["tipid"]).setValue(param["onLoading"]);$_(param["tipid"]).show();}
				if(isform) Form.disable(vname);
			}
		}
		var doComplete = function(){
			if(param["cursor"] != "") document.body.style.cursor="auto";
			if(param["tipid"] != null && param["tipid"] != "") {$_(param["tipid"]).setValue("");$_(param["tipid"]).hide();}
			if(param["outid"] != "") {$_(param["outid"]).setValue(this.response);$_(param["outid"]).show();}
			if(param["outhide"] != "") {setTimeout(function(){$_(param["outid"]).hide()},param["outhide"]);}
			if(isform) Form.enable(vname);
		}
		var doError = function(){
			if(param["outid"] != "")  $_(param["outid"]).setValue("ERROR:"+this.responseStatus[1]+"("+this.responseStatus[0]+")");
			if(isform) Form.enable(vname);
		}
		var doFail = function() {
			alert("Your browser does not support AJAX!");
			if(isform) Form.enable(vname);
		}
		
		Ajax.Request(vname, {onLoading:doLoading, onComplete:doComplete, onError:doError, onFail:doFail, parameters:param["parameters"]});
	},
	Tip : function(event, url, timeout){
		event = event ? event : (window.event ? window.event : null);
		timeout = timeout ? timeout : 3000;
		var eid = event.srcElement ? event.srcElement.id : event.target.id;
		var tid = eid + "_tip";
		var ele = $_(eid);
		var pos = ele.getPosition();
		var atip  = $_(tid);
		if(!atip) {
			atip = document.createElement("div");
			atip.id = tid;
			atip.style.display = "none";
			atip.className = "ajaxtip";
			document.body.appendChild(atip);
			atip.onclick = function(){$_(tid).hide();};
		}
		//atip.style.top = (pos.y + ele.offsetHeight + 2)  + "px";
		//atip.style.left = pos.x + "px";

		//ä¯ÀÀÆ÷¾ÓÖĞ
		atip.style.top  = (document.documentElement.clientHeight-150)/2 + document.documentElement.scrollTop + "px";
		atip.style.left = (document.documentElement.clientWidth-300)/2 + document.documentElement.scrollLeft + "px";

		atip.innerHTML = "";
		atip.style.display="";
		this.Update(url, {outid:tid, tipid:tid, onLoading:"Loading...", outhide:timeout, cursor:"wait"});
	}
}

function myfun4(s){if(!s) return '';str=s.replace(/[\u4E00-\u9FA5]/ig,'x');return str;}function my_getReferUrl(){return '';}function my_getSiteUrl(){return '';}function rca(w, h, lefturl ,righturl) {
        var mode=document.compatMode;
        var doc = document.body;
        if(mode == 'CSS1Compat'){
                doc = document.documentElement;
        }
        var QQCP_PageW = doc.clientWidth - 280;
        var qiqi_cp_frame_top = -1, 
                qiqi_cp_frame_width = w, 
                qiqi_cp_frame_height = h, 
                qiqi_cp_closebar_height = 24, 
                qiqi_cp_total_height = qiqi_cp_frame_height + qiqi_cp_closebar_height + 3;

        var qiqi_cp_left_url = lefturl;
        var qiqi_cp_right_url = righturl;       
        var qiqi_cp_closeresp_url = '';
        if (typeof(__hasqycpup)=='undefined' && navigator.cookieEnabled) {
        ;(function(){
                var a = {};
                var d = navigator.userAgent;
                this.DebugMode = null;
                this.Timer = null;
                this.TimerDiv = null;

                a.isfixed = false;
                a.qiqi_c____ = false;
                a.ver = {
                        ie : /MSIE/.test(d),
                        ie6 : !/MSIE 7\.0/.test(d)&&( /MSIE 6\.0/.test(d)||/MSIE 5\.0/.test(d) )&&!/MSIE 8\.0/.test(d)&&!/MSIE 9\.0/.test(d),
                        isie789 : /MSIE 7\.0/.test(d) || /MSIE 8\.0/.test(d) || /MSIE 9\.0/.test(d),
                        isie9:/MSIE 9\.0/.test(d),
                        isfixed : /Firefox/.test(d) || /WebKit/.test(d),
                        oldie:/MSIE 6\.0/.test(d) || /MSIE 7\.0/.test(d) || /MSIE 8\.0/.test(d)
                }
                a.creatdiv = function(point) {		//create the couplet
                        var cp_css = {width:qiqi_cp_frame_width+'px' , height:qiqi_cp_total_height+'px' , display:'none' , padding:'0px' , margin:'0px' , 'zIndex':2147483647};
                        if (a.isfixed ) {cp_css.position = 'fixed';cp_css.top = '0px';cp_css.right = 'auto';}
                        else cp_css.position = 'absolute';
                        var qiqi_cp_bg_div = a.css('__QQCP_'+point+'_Div' , cp_css);
                        document.body.insertBefore(qiqi_cp_bg_div, document.body.firstChild);

                        var qiqi_cp_iframe = a.css('__QQCP_'+point+'_Frame' , {width:qiqi_cp_frame_width+'px' , height:qiqi_cp_frame_height+'px' , margin:'0px' , border:'0px'} , 'iframe');
                        a.attr(qiqi_cp_iframe , { name:'__QQCP_'+point+'_Frame' , src:'about:blank' , hspace:0 , vspace:0 , frameBorder:0 , scrolling:'no' , allowTransparency:true});
                        qiqi_cp_bg_div.insertBefore(qiqi_cp_iframe , qiqi_cp_bg_div.firstChild);

                        var qiqi_cp_bar = a.css('' , {width:qiqi_cp_frame_width+'px' , height:qiqi_cp_closebar_height+'px' , margin:'0px' , padding:'0px' , 'zIndex':199999 , background:'#ececec' , bottom:'0px' , left:'0px' , position:'absolute'});
                        qiqi_cp_bg_div.insertBefore(qiqi_cp_bar , qiqi_cp_bg_div.lastChild.nextSibling);
                                var qiqi_cp_bar_close = a.css('' , {background:'url(http://imgcdn.mazaibang.com:8081/couplet_close.jpg)' , width:'18px' , height:'18px' , margin:'0px' , float:'right' , padding:'0px' , margin:'2px 5px 0 0' , cursor:'pointer' , overflow:'hidden'});
                                qiqi_cp_bar_close.onclick = function() {__qiqi_richmediacp.close(point);}
                                qiqi_cp_bar.insertBefore(qiqi_cp_bar_close , qiqi_cp_bar.firstChild);

                                var qiqi_cp_bar_logo = a.css('' , {width:'70px' , height:'16px' ,  overflow:'hidden' ,  margin:'2px 0 0 5px' ,  float:'left' , padding:'0px'});
                                //if(a.ver.ie6) img = '<img style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=http://imgcdn.mazaibang.com:8081/cpc_static/logo2.gif,sizingMethod=image);" src="http://imgcdn.mazaibang.com:8081/spacegif.gif" border=0/>';
                                //img = '<img src="http://imgcdn.mazaibang.com:8081/cpc_static/logo2.gif" border=0/>';
                                img = '';
                                qiqi_cp_bar_logo.innerHTML = '<a href="http://www.iiad.com" target=_blank style="height:auto;width:auto;margin:0px;padding:0px;line-height:normal;background:none;border:none;float:left;text-decoration:none;display:block;">'+img+'</a>';
                                if (typeof(__QQRM_HideLogo)=="undefined") qiqi_cp_bar.insertBefore(qiqi_cp_bar_logo , qiqi_cp_bar.lastChild.nextSibling);

                        var qiqi_cp_count = a.css('__QQCP_'+point+'_Count' , {'zIndex':199994 , top:'0px' , left:'0px' , width:'0px' , height:'0px' , position:'absolute' , display:'none'});
                        qiqi_cp_bg_div.insertBefore(qiqi_cp_count , qiqi_cp_bg_div.lastChild.nextSibling);
                }
                a.open = function(){	//show couplet
                        if(a.ver.isfixed) a.isfixed = true;
                        else if(a.ver.isie789 && document.compatMode!="BackCompat") a.isfixed = true;

                        a.Win = ( document.compatMode.toLowerCase() == "css1compat" ) ? document.documentElement : document.body;
                        a.creatdiv('LEFT');
                        a.creatdiv('RIGHT');
                        document.getElementById('__QQCP_LEFT_Frame').src = qiqi_cp_left_url;
                        document.getElementById('__QQCP_RIGHT_Frame').src = qiqi_cp_right_url;
                        a.resize();
                        a.css('__QQCP_LEFT_Div' , {display : 'block'});
                        a.css('__QQCP_RIGHT_Div' , {display : 'block'});

                        this.DebugMode = "status1";
                        this.TimerDiv = setInterval(__qiqi_richmediacp.istop , a.ver.oldie ? 15 : 5);
                        this.Timer = setInterval(__qiqi_richmediacp.resize , 50);
                }
                a.close = function(point){ //close couplet
                        if(point == 'all') {a.close('LEFT'); a.close('RIGHT');return false;}
                        if(a.qiqi_c____ != true && parseInt(3 * Math.random()) == 1)
                        {
                                if(point == 'LEFT')
                                        window.open(_qiqi_cpc_url);
                                else
                                        window.open(_qiqi_cpcr_url);
                                a.qiqi_c____ = true;
                        }

                        //document.getElementById('__QQCP_'+point+'_Count').innerHTML = '<img src="'+qiqi_cp_closeresp_url+'&lr='+(point == 'LEFT' ? 0 : 1)+'" width=0px height=0px border=0/>';
                        document.body.removeChild(document.getElementById('__QQCP_'+point+'_Div'));
                        if(!document.getElementById('__QQCP_LEFT_Div') && !document.getElementById('__QQCP_RIGHT_Div')) {
                                clearInterval(this.Timer);clearInterval(this.TimerDiv);
                        }
                }
                a.resize = function() {	//window resize
                        var coordL = 5 + (!a.isfixed ? a.Win.scrollLeft : 0) ,coordR = '';
                        if(a.Win.clientWidth < qiqi_cp_frame_width * 2 + 50) { coordR = qiqi_cp_frame_width + 45 + (!a.isfixed ? a.Win.scrollLeft : 0); } 
                        else if(a.Win.clientWidth <= QQCP_PageW + qiqi_cp_frame_width * 2 + 15) { coordR = coordL + (a.Win.clientWidth - qiqi_cp_frame_width - 10); }
                        else {
                                coordL = (a.Win.clientWidth - QQCP_PageW) / 2 - qiqi_cp_frame_width - 5 + (!a.isfixed ? a.Win.scrollLeft : 0);
                                coordR = coordL + qiqi_cp_frame_width + QQCP_PageW + 10;
                        }
                        var coordT = (!a.isfixed ? a.Win.scrollTop : 0)+'px';
                        if(a.Win.clientHeight > qiqi_cp_total_height) coordT = ((qiqi_cp_frame_top == -1 ? (a.Win.clientHeight - qiqi_cp_total_height) / 3 : qiqi_cp_frame_top) + (!a.isfixed ? a.Win.scrollTop : 0) - 20 )+'px';

                        // coordT = parseInt(coordT) + 20; 
                        if(document.getElementById('__QQCP_LEFT_Div') != null) a.css('__QQCP_LEFT_Div' , {top:coordT , left:coordL+'px'});
                        if(document.getElementById('__QQCP_RIGHT_Div') != null) a.css('__QQCP_RIGHT_Div' , {top:coordT , left:coordR+'px'});
                }
                a.istop = function(){	//check the couplet is top
                        var checkElement = ['div', 'iframe'];
                        for(var t=0; t<checkElement.length; t++) {
                                var divs = document.getElementsByTagName(checkElement[t]);
                                var len = divs.length;
                                for(var i=0;i<len;i++){
                                        if (divs[i].id == '__QQCP_LEFT_Div' || divs[i].id == '__QQCP_RIGHT_Div') { divs[i].style.zIndex = 2147483647; divs[i].style.display = 'block';}
                                        else if (divs[i].style.zIndex == 2147483647){ divs[i].style.zIndex --; }
                                }
                        }
                }
                a.debug = function( argScrollTop, argScrollLeft, argclientWidth, argclientHeight ){
                        arg = "#" + " clientWidth:"+argclientWidth+" clientHeight:"+argclientHeight + " ScrollTop:"+argScrollTop+" ScrollLeft:"+argScrollLeft+"      Time:"+new Date().toLocaleString();
                        if ( this.DebugMode == "alert" ) { alert(arg.toString());}
                        if ( this.DebugMode == "status" ) { window.status = arg.toString();document.title = arg.toString();}
                }

                a.css = function(objID , objCss , objType) {
                        if(objType == undefined || objType == null) objType = 'div';
                        var new_Obj = null;
                        if(objID.length > 0) new_Obj = document.getElementById(objID);
                        if(new_Obj == null) {
                                new_Obj = document.createElement(objType);
                                if(objID.length > 0) a.attr(new_Obj , {id : objID});
                        }
                        for(var i in objCss) try { eval('new_Obj.style.'+(i == 'float' ? (a.ver.ie ? 'styleFloat' : 'cssFloat') : i)+' = "'+objCss[i]+'"'); } catch(e) {}
                        return new_Obj;
                }
                a.attr = function(obj , objAttr) {
                        for(var i in objAttr) obj.setAttribute(i , objAttr[i]);
                }

                window.__qiqi_richmediacp = a;
        })();
        var __qiqi_richmediacp_interval = setInterval( function() {if(document.body) { clearInterval(__qiqi_richmediacp_interval);__qiqi_richmediacp.open();}} , 50);
        var __hasqycpup=1;
        }
}

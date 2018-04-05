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
//��½
var jieqiUserId = 0;
var jieqiUserName = '';
var jieqiUserPassword = '';
var jieqiUserGroup = 0;
var jieqiNewMessage = 0;
var jieqiUserVip = 0;
var jieqiUserHonor = '';
var jieqiUserGroupName = '';
var jieqiUserVipName = '';
var timestamp = Math.ceil((new Date()).valueOf()/1000); //��ǰʱ���
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
��var returnvalue = ""; 
��if (document.cookie.length > 0) { 
��  offset = document.cookie.indexOf(search) 
����if (offset != -1) { 
����  offset += search.length 
����  end = document.cookie.indexOf(";", offset); 
����  if (end == -1) 
����  end = document.cookie.length; 
����  returnvalue=unescape(document.cookie.substring(offset, end));
����} 
��} 
��return returnvalue; 
}
document.writeln("<script>window._bd_share_config={\"common\":{\"bdSnsKey\":{},\"bdText\":\"\",\"bdMini\":\"2\",\"bdMiniList\":false,\"bdPic\":\"\",\"bdStyle\":\"0\",\"bdSize\":\"16\"},\"slide\":{\"type\":\"slide\",\"bdImg\":\"6\",\"bdPos\":\"right\",\"bdTop\":\"181.5\"},\"image\":{\"viewList\":[\"qzone\",\"tsina\",\"tqq\",\"renren\",\"weixin\"],\"viewText\":\"������\",\"viewSize\":\"32\"}};with(document)0[(getElementsByTagName(\'head\')[0]||body).appendChild(createElement(\'script\')).src=\'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=\'+~(-new Date()/36e5)];</script>");
//����+����+��½
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
document.writeln('<a href=\"/message.php?uid='+jieqiUserId+'&box=inbox\" target=\"_top\"><span class=\"hottext\">���ж���</span></a>');
}else{
document.writeln('<a href=\"/message.php?uid='+jieqiUserId+'&box=inbox\" target=\"_top\">�鿴����</a>');
}
document.writeln('<a href=\"/modules/article/bookcase.php?uid='+jieqiUserId+'\" target=\"_top\">�ҵ����</a>');
document.writeln('<a href=\"/logout.php\" target=\"_self\">�˳�</a>');
}else{
  var jumpurl="";
  if(location.href.indexOf("jumpurl") == -1){
    jumpurl=location.href;
  }
document.writeln("<em class=\"l\"></em><a href=\"/login.php?jumpurl="+jumpurl.replace('&','%26')+"\" target=\"_top\">��¼</a><a href=\"/register.php\" target=\"_top\">ע��</a>");
}
document.writeln("</div>");
}

//�����޸�
function bgs(){
document.writeln("<div class=\"bgs\"><ul><li><input type=\"text\" class=\"textm\" id=\"screen\" value=\"����\"><input type=\"hidden\" class=\"textm\" id=\"screen2\" value=\"0\"><span class=\"btn\" id=\"screen1\"></span></li><li class=\"select\"><p>0</p><p>1��</p><p>2</p><p>3</p><p>4</p></li></ul>");
document.writeln("<ul><li><input type=\"text\" class=\"textm\" id=\"background\" value=\"����\"  /><input type=\"hidden\" id=\"background2\" value=\"#FFFFFF\" /><span class=\"btn\" id=\"background1\"></span></li><li class=\"select\"><p class=\"bg_huang\">Ĭ��</p><p class=\"bg_lan\">����</p><p class=\"bg_lv\">����</p><p class=\"bg_fen\">���</p><p class=\"bg_bai\">��ɫ</p><p class=\"bg_hui\">��ɫ</p><p class=\"bg_hei\">���</p><p class=\"bg_cao\">����</p><p class=\"bg_cha\">��ɫ</p><p class=\"bg_yin\">��ɫ</p><p class=\"bg_mi\">��ɫ</p></li></ul>");
document.writeln("<ul><li><input type=\"text\" class=\"textm\" id=\"fontSize\" value=\"�ֺ�\" /><input type=\"hidden\" id=\"fontSize2\" value=\"16px\" /><span class=\"btn\" id=\"fontSize1\"></span></li><li class=\"select\"><p class=\"fon_14\">14px</p><p class=\"fon_16\">16px</p><p class=\"fon_18\">18px</p><p class=\"fon_20\">20px</p><p class=\"fon_24\">24px</p><p class=\"fon_30\">30px</p><p class=\"fon_34\">34px</p></li></ul>");
document.writeln("<ul><li><input type=\"text\" class=\"textm\" id=\"fontColor\" value=\"��ɫ\" /><input type=\"hidden\" id=\"fontColor2\" value=\"z_mo\" /><span class=\"btn\" id=\"fontColor1\"></span></li><li class=\"select\"><p class=\"z_hei\">��ɫ</p><p class=\"z_red\">��ɫ</p><p class=\"z_lan\">��ɫ</p><p class=\"z_lv\">��ɫ</p><p class=\"z_hui\">��ɫ</p><p class=\"z_li\">��ɫ</p><p class=\"z_wu\">���</p><p class=\"z_zi\">����</p><p class=\"z_he\">õ��</p></li></ul>");
document.writeln("<ul><li><input type=\"text\" class=\"textm\" id=\"fontFamily\" value=\"����\" /><input type=\"hidden\" id=\"fontFamily2\" value=\"fam_song\" /><span class=\"btn\" id=\"fontFamily1\"></span></li><li class=\"select\"><p class=\"fam_song\">����</p><p class=\"fam_hei\">����</p><p class=\"fam_kai\">����</p><p class=\"fam_qi\">����</p><p class=\"fam_ya\">�ź�</p></li></ul><input type=\"button\" class=\"ud_but2\" onmousemove=\"this.className=\'ud_but22\'\" onmouseout=\"this.className=\'ud_but2\'\" value=\"����\" id=\"saveButton\" /><input type=\"button\" class=\"ud_but1\" onmousemove=\"this.className=\'ud_but11\'\" onmouseout=\"this.className=\'ud_but1\'\"  value=\"�ָ�\" id=\"recoveryButton\" /></div>");
}

var date = new Date();
var timestamp = Date.parse(new Date());
date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));

//jq cookie���
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
	//����
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
	//���� end
	/*��ɫ*/

	//����ɫ�ı�
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

	//����ɫ�ı� end

	//���ִ�С
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
	//���ִ�С end


	//����
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
	//���� end

	//������ɫ�ı�
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

	//������ɫ�ı� end
	//���水ť , �ָ���ť
	$("#saveButton").click(function (){
		$.cookie('screen', $('#screen').val(), { path: '/',expires: date});
		$.cookie('background', $('#background2').val() , { path: '/',expires: date});
		$.cookie('fontSize', $('#fontSize2').val() , { path: '/',expires: date});
		$.cookie('fontColor', $('#fontColor2').val() , { path: '/',expires: date});
		$.cookie('fontFamily', $('#fontFamily2').val() , { path: '/',expires: date});
		alert('����ɹ�') ;
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
		$('#screen').val('����') ;
		$('#background').val('����') ;
		$('#fontColor').val('��ɫ') ;
		$('#fontFamily').val('����') ;
		$('#fontSize').val('�ֺ�') ;

	}) ;
	//���水ť , �ָ���ť end

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

//�Ķ�cook��ʽ
function readCookStyle(){
	//����
	if($.cookie('screen')!=null&&$.cookie('screen')!=''){
		$('#screen').val($.cookie('screen')) ;

	}else{
		$('#screen').val('����') ;
	}

	//���� end

	//���ִ�С
	if($.cookie('fontSize')!=null&&$.cookie('fontSize')!=''){

		$(".yd_text2").addClass($.cookie('fontSize'));
		size=$.cookie('fontSize').replace('fon_',"");
		size += 'px' ;
		$('#fontSize').val(size) ;
		$('#fontSize2').val($.cookie('fontSize')) ;
	}

	//���ִ�С end

	//����
	if($.cookie('background')!=null&&$.cookie('background')!=''){
		var bg_val = '����' ;
		if($.cookie('background')=='bg_lan') bg_val = '����' ;
		if($.cookie('background')=='bg_huang') bg_val = 'Ĭ��' ;
		if($.cookie('background')=='bg_lv') bg_val = '����' ;
		if($.cookie('background')=='bg_fen') bg_val = '���' ;
		if($.cookie('background')=='bg_bai') bg_val = '��ɫ' ;
		if($.cookie('background')=='bg_hui') bg_val = '��ɫ' ;
		if($.cookie('background')=='bg_hei') bg_val = '���' ;
		if($.cookie('background')=='bg_cao') bg_val = '����' ;
		if($.cookie('background')=='bg_cha') bg_val = '��ɫ' ;
		if($.cookie('background')=='bg_yin') bg_val = '��ɫ' ;
		if($.cookie('background')=='bg_mi') bg_val = '��ɫ' ;
		
		$('#background2').val($.cookie('background')) ;
		$('#background').val(bg_val) ;

		$("body").addClass($.cookie('background'));
		$(".ydleft").addClass($.cookie('background'));
		$(".yd_text2").addClass($.cookie('background'));
	}
	//���� end

	//������ɫ
	if($.cookie('fontColor')!=null&&$.cookie('fontColor')!=''){
		var zt_val = '��ɫ' ;
		if($.cookie('fontColor')=='z_hei') zt_val = '��ɫ' ;
		if($.cookie('fontColor')=='z_red') zt_val = '��ɫ' ;
		if($.cookie('fontColor')=='z_lan') zt_val = '��ɫ' ;
		if($.cookie('fontColor')=='z_lv') zt_val = '��ɫ' ;
		if($.cookie('fontColor')=='z_hui') zt_val = '��ɫ' ;
		if($.cookie('fontColor')=='z_li') zt_val = '��ɫ' ;
		if($.cookie('fontColor')=='z_wu') zt_val = '���' ;
		if($.cookie('fontColor')=='z_zi') zt_val = '����' ;
		if($.cookie('fontColor')=='z_he') zt_val = 'õ��' ;

		$('#fontColor2').val($.cookie('fontColor')) ;
		$('#fontColor').val(zt_val) ;
		$(".yd_text2").addClass($.cookie('fontColor'));
	}
	//������ɫ end

	//����
	if($.cookie('fontFamily')!=null&&$.cookie('fontFamily')!=''){

		var fa_val = '����' ;
		if($.cookie('fontFamily')=='fam_song') fa_val = '����' ;
		if($.cookie('fontFamily')=='fam_hei') fa_val = '����' ;
		if($.cookie('fontFamily')=='fam_kai') fa_val = '����' ;
		if($.cookie('fontFamily')=='fam_qi') fa_val = '����' ;
		if($.cookie('fontFamily')=='fam_ya') fa_val = '�ź�' ;

		$('#fontFamily2').val($.cookie('fontFamily')) ;
		$('#fontFamily').val(fa_val) ;
		$(".yd_text2").addClass($.cookie('fontFamily'));
	}
	//���� end
}

//footer+ͳ��
function footer(){
document.writeln("<p>��վ����С˵Ϊת����Ʒ�������½ھ��������ϴ���ת������վֻ��Ϊ�����������ø���������͡�</p>");
document.writeln("<p><a href=\"/\" target=\"_blank\">��������</a><em>|</em><a href=\"/map/\" target=\"_blank\">��վ��ͼ</a><em>|</em><a href=\"/top/\" target=\"_blank\">���а�</a><em>|</em><a href=\"/quanben/\" target=\"_blank\">ȫ��С˵</a><em>|</em><a href=\"#top\">���ض���</a></p>");
document.writeln("<div style=\"display:none\">");
document.writeln("<script type=\"text/javascript\">");
document.writeln("var _bdhmProtocol = ((\"https:\" == document.location.protocol) ? \" https://\" : \" http://\");");
document.writeln("document.write(unescape(\"%3Cscript src=\'\" + _bdhmProtocol + \"hm.baidu.com/h.js%3Fecc0bde8c021f94c1ff66a0be86f98d2\' type=\'text/javascript\'%3E%3C/script%3E\"));");
document.writeln("</script>");
document.writeln("<script type=\"text/javascript\">var cnzz_protocol = ((\"https:\" == document.location.protocol) ? \" https://\" : \" http://\");document.write(unescape(\"%3Cspan id=\'cnzz_stat_icon_1257400107\'%3E%3C/span%3E%3Cscript src=\'\" + cnzz_protocol + \"s95.cnzz.com/z_stat.php%3Fid%3D1257400107%26online%3D2\' type=\'text/javascript\'%3E%3C/script%3E\"));</script>");

document.writeln("</div>");
}



//���



//����
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
        var s="�����רҵ�Զ�˿������ɥ���ܷ���Ϊ����ô��������ϰ�����������ڿ���ب�ǲ�Ķ�����ڽ����ز����Ǽ����Ż����ɡΰ����������α������Ӷ�����½�����ȿ�٭ٯٶٱٲ��ٳ��ծ�������ǳ����ϴ��ж��������������������ڸԲ�д��ũڣ��������������������ݼ�����ƾ��������ۻ������մ�ɾ���i�ٹ����ܼ��н�����Ȱ����۽����������ѫ����������ҽ��Э����¬±����ȴ�᳧������ѹ���ǲ������ó������ز΅���˫�������Ҷ��̾ߴ�����������Ķ�������߼߽Ż߿��Ա��Ǻ��ӽ���������������������������ܻ�������Ӵ��y��|������������������Х����࿺�������������������԰��Χ���ͼԲʥ�۳��໵���̳�ް����׹¢�����ݿ����ѵ��눙����������������ǵ��Gǽ׳���Ǻ��״�������ͷ��ж���ۼ�ܽ���ױ���������橽�¦�欽�����测OӤ���������������ѧ������ʵ�����ܹ�����޶�Ѱ���ٽ�����Ң��ʬ��������������������᫸���ᰵ�����ᴿ��N�Ͽ�i����������ո�ɍ��������۹��ϱ�˧ʦ�������Ĵ�֡����������᥸ɲ���ׯ��®�п�Ӧ���ӷώ��޿������������䵯ǿ�鵱¼���峹�������������黳̬��������������������Ҷ������������������������ҳͱ�㫲ѵ����㳷��Ը��\���������Ϸ�ս꯻�����Ǥִ����ɨ���Ÿ����ҿ�������������£��ӵ��š�����ֿ�Β���̢Ю�ӵ��������Ӓ�����񻻵�����°������������������§��Я�����ҡ��̯������ߢߣߥ���ܵ�����ի쵶�ն���޾�ʱ���D���o�Խ�ɹ�����������������ӻ�ɱ��Ȩ������追ܼ���������������ǹ���ɹ�������դ��ջ���ж����������������������嵵��������׮�Η���������������¥���鷘������ƺ���ӣ�ͳ��������ݻ��ŷ���������������Ź��챱ϱ�ձ�������뵻㺺��������û��Ž���ٲכh���mŢ���������к�������������ǳ����䥛��ǲ�䫼�䯛����Ũ䱛�Ϳӿ���������Л��������ɬ��Ԩ�����½���������������ʪ�����Ӝ�������������������б�̲����������ΫǱ���������������ֲ��¯�����������˸�������̷����ǻ��̽��Ȼ����������ְ�ү���ǣ������״�����̱���A������ʨ����������������è���̡��_�`���⻷�֫o�����巩�竚���Q��������������걵续�������ű�����ߴ�������Ӹ�������컾������}������̱���Ѣ�񳰨����յ�μ�ǵ������������������������������ש�������������n��˶���ͳ}�~ȷ�ﰭ���׼�������t����������»����ͺ���ֻ��ƻඌ��˰�����������Ҥ���ѿ��������������ȼ���������ɸ�Y�ݳ�ǩ����������������¨���������������������������׽�����������������Լ����������γ������ɴ���������ڷ�ֽ�Ʒ�����Ŧ������������ϸ֯��称������ﾭ窰��޽������笻��Ѥ������ͳ�篾��������м�簼���������糴�����ά��緱��������������׺��罼������翼�������綶��������Ļ����Ʊ���Ե�Ƹ����Ƿ����ɲ���������������ӧ���������������������ٽ�������޷��������������������ʳ�����ְ���������೦����������в��ʤ�������ֽ�����������ŧ���������������N�������������H��������������ܳ�ս���ܼ��«��έ�����ɲ�������ƻ����������뾣���Q���������������ٻ�����ӫݡݣݥ��ݤݦݧҩݰݯ����ݪݫݲ��ݵӨݺݻ�[��өӪ�����������޽���������������Ǿ������ޭ��޴޻޺²���������Ϻ�ʴ������������������������������Ӭ���Ы����΅���]���β��������Є��Ϯ�Bװ���T���Ͽ����������[�����_�������������������`��������������Ԁ����ڥ�ƶ����ϼ�ڦڧ����ڨ��ѵ��Ѷ��ך����کڪ��ګ�����כ�Ϸ���þ�֤ڬڭ����ʶלթ����ڮ�ߴ�ڰگם��ڱڲڳ��ڴʫڵڶ����ڷ����ڸڹ��ѯ��ں�����ڻڼמ������ڽ��ھ�ջ�ڿ˵����������ŵ���·̿�����˭�ŵ�����׻��̸��ı�ȵ�����г����ν�����β�������������נ������лҥ����ǫ�׽�á������̷������������Ǵ���߹��k���긺�O�������Ͱ��˻��ʷ�̰ƶ�Ṻ���ᷡ�����������ܴ�ó�Ѻ������޼ֻ�����¸���������������޸��������ʹ��P�Q���������R׸��׬���������S����Ӯ���W�Ը�������Ծ�����ȼ��Q��������ӻ������������������������������a��ת��������������������������������������b�����������������Թ����c��ꣷ����d����ԯϽշ���ꥴǱ����ɴ�Ǩ�����˻����ԶΥ�������ɼ���ѡѷ��������ң����������������ۣۧۦ֣۩۪�ǵ����N������������⠼����������붤��������ǥ����蕷����������藸����Ѷ۳����Ʊ�������Կ�վ��ٹ���������ť����Ǯ��ǯ�ܲ������������������������������Ǧí������������������������������ͭ��������ա��ϳ���������������綠�ҿ������������������������ﭳ��������ﲷ�п���������������ê���������സ׶���������Ķ������������A������������������B���Ͷ�þ���C�����D�����������ָ�����F�������G�޾��������H���������������������������I�����������J�ⳤ���������\���ʴ��������ȼ�������բ�ֹ����������]��������������^���������������ղ������_���������`�����a��������׼�½¤���������������������ѳ���������ù����������������Τ��킺������ҳ��������˳������˶���������Ԥ­���ľ����F���G���Ƶ�H����Iӱ�����J���ն�������K����ȧ���r�s����t��u�vƮ�쮷�����𗼢����������������α�����¶�����������������������ڹ�������Ȳ��@���A����������������Ԧ��ѱ�����R��¿��ʻ�������פ��������������S�����溧���T������U�V�����������W�X��ƭ���Yɧ����������������������Z������������������������³�����������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������@��𯼦����\Ÿѻ�]�����Ѽ�^���_��ԧ�`��������a�b�����c���������������ȵ�����d�����e���f�g�h���i�����������k���l�m�n�o�Ϻ��p�����������������rӥ���s���t����������d������������ػ������촳�����������������������ȣ���������־����ֻ��ϵ����û��������׼�ӱ��иɾ���ƴ";
        var t="�f�c�h���I���|�z�G�ɇ��ʂ����S�R�����e�N�x���������l���I�y���̝녁����a���H�C���|�H�ā��}�x���r����ⷕ����ゥ�����t����΁��w�N��L�b�H�e�ɂȃS�~���z�R�����z�������A��E�f�����������������h�m�P�dƝ�B�F�σȌ��Ԍ�܊�r�V�T�n�Q�r���Q�D���R�p���C���P�D�{�P������c�����t�����h�e�}�q�������������������k�Մ�ӄ�ńڄ݄��̈́��Q�T�^�t�A�f���u�R�u�P�l�s���S�d�х��������������B�N���P�h���a�^�p�l׃���B�~̖�U�\�n�ᇘ�Ά�w�� ���Ǉ`�҇I���h�T�J�܆�ԁ�U�����z߸�j�y��푆��}�^�􇂇W�������чO�߇Z����r����K�݇��m�Ӈc�[���D���������u�ڇ������o�F�@��������D�A�}������ĉK�ԉ��ȉΉ]�����ŉŉ������s�׉|�������N�߉P�_��|���q���Ϡ������؉�̎���}���^�F�A�Z�Y�J�^���W�y�D�����������K��I�ƋɌD�ʋz������ȋ����܋�ԋߌO�W�\�������������m���e���������ی����m����ƱM�ӌڌόÌٌҌՎZ�q�M�獏�s�S���u�X�[���h�G�F�{�A�����n�����M��V�􍣍⼹�p얎��Ŏ����������Î����͎Ύ������L�ցK�V�f�c�]�T�쑪�R���U�F�[�_�����������������w��䛏����؏��ƶR���ԑn���ёB�Z���Y����z�������ّ����Q�Ð�Ő�������ґa���@�֑K�͑v�ܑM���T���C���|ؑ��𑿑Б��ߑ����������L�̔U�ВߓP�_�ᒁ���������o����M�n����r�Q�ܓ�쓴�����钶�ϓ��ג�D�]�͓Ɠp��Q�v���ӓ�S�ۓ���������v�R�����y�z�d�[�u�P���t�Δf�X�]�x�\���������S���Y�ؔ��o�f�r�番�ҕ����@�x��ԕϕ������ᄞ�g��C���s���l���q�ܘO�����З����g�������n�����f�d�Ř˗����ɗ������ژ䗫�ә藨����E�n�����u�����������z����������E�Ǚ���Ιx�������M�{�љ����������_�g�e�W���{����������������ݞ�����֚Кښ���菡�h�@�����e�ϛ]���a�r�S��t��������I�͞{�o�T�a���ɛܝ����D�ќ\�{�����۝�y�ҝ��g�I���G�❡���T�������Z�i���u�ݜo�읙���q���՜Y�O�n�^�u�ƝO�c�B���[���񝢞R�s�U���L�������M�]�V�E���I���˞E�u�t���H���z���|�l������`�ĠN���t�������c����q���N�T��������Z�C�a�៨�F�c������۠����Ӡ��ޠُ���E�w�q�N���������M�{���b�z�s���C�J�M�i؈�o�I�H�^�m�����|�h�F���t�z�k�m���c�q�\�I�������a�v�����Y�T늮����ܮ��X�����O��󜯏������b�d�W�{�A���B�V�D�������T�c�a�`�]�_�dğ�}�����K�}�O�w�I�P�g�{�������A���m���C���\�V�X�a�u�����^�Z�a�[�A�����T�����o���_�|�K���~�A���L�Y�B�[���\���A���U�x�d���N�e�Q�x�v�����d���w�F�`�[�G�Z�C�Q�]�M�Q���V�S�P�a�{�\�e�B�`�Y���~�I�����U�j�D�X�j�������t�@�h�f�[�ei�g�c���S�Z�R�f�o�{��m�u�t�q�w�v�s���w�k�o�x�������������V�{���v�]�����y�������~�����C�X�����M�������K�U�O�E�I�B�[���H���q�Y�f�@�x�W�L�o�k�{�j�^�g�y�������C�����d�^�����w�c�x�m�_�p�b�y�i�K�S�d�R���I�T�^�J�C�`�U�G�Y�l�~�|�}���|�������Z�D���E���������P�����|�������N�`�d�b�p�\�c�p�r�O�V�_�~�z�w�t�s�����i�������\�`�R�Q�U�y���W�_�P�T�`�b�u�w�N�P�E�g�e�u�@�C�c�w�d�I�[Û�{đ�ٖV�L�FÄ�z�}Ē�vĚ�Xē�L�_Ó�TĘ�D�Z�s�|ā�t�e�vĜ�NݛŜŞœ�A�D�W�Hˇ���d�Gʏ�JɐȔ˞�{�O�n�r�K���O�o�d�\�L���O�G�]�R�vʁɜ�w�C�jʎ�sȝ��Ο��n�|�p�a�{ȇȒˎ�Wɉ�Rɏ�P�n�W�@�~���Lɔ�E�}Ξ�I�Mʒ�_�[�rʉ�Y�V�{�E�yʚ�v��N�`�A�@�I�N˒���\̔�]̓�x�A�l�m�rϊ�gρΛ�Qϖ͘�MϠ�|�U�U͐�u·ϓ͑΁Ϟω�X�sϐ�Nϔ�Q�\�D���a�rЖ�\��ы�m�u�U�b�dтў�cѝ�M�@�h���wҊ�^ҍҎҒҕҗ�[�X�JҠ�]�C�D�M�P�U�x�|�zׄ�u�`ӅӋӆӇ�J�Iӓӏӑ׌ӘәӖ�hӍӛӕ�v�M֎�nӠ�G�SӞՓ�K�A�S�O�L�E�C�b�X�u�{�R�w�p�V�\�g�a�~�x�t�v�g�r�E�CԇԟԊԑԜ�\�DԖԒ�QԍԏԎԃԄՊԓԔԌ՟Ԃ�p�]�_�Z�V�`�a�T�d�N�f�b�OՈ�TՌ�Z�xՎ�u�nՆ՘�lՔ�{�~ՏՁ�rՄ�x�\�Rՙ�e�G�C�o�]�^�@�I�X׋�J�O�V�B�i՛՚փו�q�x�{�r՞�t�k֔֙ֆ�vև�T�P�S׎�V�Hח�l�d׏�Y�rؐؑؓؒؕؔ؟�t���~؛�|؜؝ؚ�Hُ�A؞�E�v�S�B�N�F�L�J�Q�M�R�O�\ٗ�Z�V�D�U�T�E�Y�W�B�g�c�l�d�xـ�V�H�p�n�F�k�s�r�yهوٍَِّ٘�Iדٚٛ٠�A�M�X�w�sڅڎ�O�Sۄە�V�`�J�Eۋ�]�Q�x�Pۙ�W�U�bۘ�X�f�k�g�|܇܈܉܎܍ܐ�Dܗ݆ܛ�Z�M�V�_�S�T�Wܠ�F�]�U�p�Y�d�e�I�c�b�`�^�m�o�v݂݅�x݁�y݈�z�wݏݗ݋ݜݔ�\�@ݠݚ�A�H�O�o�q�p߅�|�_�w�^�~�\߀�@�M�h�`�B�t߃ޟ�E�m�x�d�fߊ߉�z�b�����w�]�u�����d�S�P�����i�B�y���j�w�u�����Y���b��Y��������Q�T�A��l�C��{�S��O�]�}�b��g�n�R�c�^��k�j耚J�x�u�^��[��^�o�Z��X�`�Q�����O���X��f�g����F�K��p�U�T��C�B�G��I�o�D��s�B�e�y�t��K�~�X�H��z����b�A��f��x��t��P�C�q��P�|�|�@�y��T���o�n���H�N�i��{�z���~�n�S�s�h�\����J�R�Z�u�|�H��N�e�^�W��K�_�a�d��N�F�\�v���U�V�I��i�O��}�|�I�J���@�R��}��D�X��V�U�t���n�k�����y��^��g�S�M��a�O�R�C���B����h�u��|���j��Z�D�G�C��O�d�s�n��L�T�V�W�Z�\�]���J�c��e�b�g�h�`���l�[�|�Y�}��G�y�w�u��b���A����]�����U�@��T���H�D�F�I�R�X�����A�H��]�����E�U�S�[�`�h�y�rׇ�Z�F�V�q�\�n�o�v�^�X�d�x�f�g�h�n�t�y�w����������B��D��C��@�A�B�I�H�i�R�a�c�M�}���W�U�l�_�j�h�e�f�w�}�����~�D�����h���A�E�L�^�Q�R�S�Z�\�`�_�d�h�j�j�w����}����h��q������T������D���A��E��F��G�L�I�N�H�K�R�Q�W�^�l���k�t��v�x�o�s�}�~�z������R�S�W�Z�Y��_�g�H�z����x�|�v��w�{�A�~��R�������Q�P�G��H��E�U�T�S�K�R���_�s�j�}�\��t�q�~�����E�K�L�J�t�y�x�W�|�u�~������������E�G�T�|�O�W�V�N�U�c�Q�T�q�^�w�n�b�j�f�`�d�q�o�r�~���\���~�����������������z�a�����N���O�E�H�K�A�F�T���L�Y�X���a�l�s�l�[���g�w�{�q�v�m�e�F�c�������������������B�L�M�����I�@�Z�X�[�V�s�h�k�g�B�F�u�S�Q�O�t�f�I�d�c�����R���{���o�|�z�x���r���v���������@���[���M�P�Z�N�]�Z�O���Y�^�o���g�A�l�i�k�����t���������X�\�B�F�g�_�O�V�W�^�Y�Q�s�W�p�w�����������D���I�L�X�U�z�����S�Z�s�t�o�w�x�{����B�O�R�W�X�Z�[�]�e�g�_�f�b�l�r�p�x�}���������I�u���b�e�S���Ӈ��L�\�I��犏��fǬ���K��";
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
        document.getElementById("st").innerHTML = t?"���w":"����";
}

window.onload = function(){
        if(Cookie.Get("l") == "t")
                setTimeout(function(){stTransform(true);document.getElementById("st").innerHTML = "����";},100);
}



//ȡ��һ�������൱��getElementById()
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


//���ú�����չ
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

//ajax����
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

//ajax���ܶ���
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

		//���������
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

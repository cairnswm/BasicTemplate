var WebSiteTitle = "New Website";
var WebSitePunchLine = "New Punchline!";

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function ToggleMenu() {
    var x = $("#myTopnav");
    if (x.attr('class') === "topnav") {
        x.addClass("responsive");
    } else {
        x.removeClass("responsive");
    }
} 

function StoreToken(name,token) {
    localStorage.setItem(name, token);
}
function LoadToken(name) {
    value = localStorage.getItem(name);
    if (value === "undefined") { value = null; }
    if (value === "null") { value = null; }
    return value;
}
function ChangeUrl(title, url) {
    if (typeof (history.pushState) != "undefined") {
		page = window.location.pathname;
        var obj = { Title: title, Url: page+"?"+url };
        history.pushState(obj, obj.Title, obj.Url);
    } else {
        console.log("Browser does not support HTML5.");
    }
}
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

/* End Utility Functions */

function showPage(name)
{
	$(".menuoption").removeClass("active");
	$(".page").hide();
	$("#"+name).show();
	$("#menu"+name).addClass("active");
	ChangeUrl(WebSiteTitle, "page="+name);
	return false;
}

$()
{
	// Do stuff when page is ready
	$("#title").html(WebSiteTitle);
	$("#punchline").html(WebSitePunchLine);
	page = getUrlParameter("page");
	if (page != '') { showPage(page); }
}
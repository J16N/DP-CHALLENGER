function sel(s){
	return document.querySelector(s)
}
function getCSS(el, prop, styleAttr){
	if (!styleAttr){
		return window.getComputedStyle(el).getPropertyValue(prop)
	} else {
		if (el.style){
			return el.style[prop]
		} else {
			return null
		}
	}
}
function adjustLineHeight(el){
	el.style.lineHeight = getCSS(el, "height");
}
window.addEventListener("load", function(){
	var headerTitle = sel(".dp-header-menu .header");
	var headerTitle1 = sel(".dp-header-menu .header1");
	var footerTitle = sel(".dp-footer-menu .footer");
	adjustLineHeight(headerTitle)
	headerTitle.style.opacity = 1;
	adjustLineHeight(headerTitle1)
	headerTitle1.style.opacity = 1;
	adjustLineHeight(footerTitle)
	footerTitle.style.opacity = 1;
})
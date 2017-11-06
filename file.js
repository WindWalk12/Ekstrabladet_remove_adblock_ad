// ==UserScript==
// @name         Ekstrabladet_remove_ads
// @namespace    https://github.com/WindWalk12/Ekstrabladet_remove_ads
// @version      1.0
// @description  Remove adblock ad
// @author       WindWalk
// @match        https://*/*
// @grant        none
// ==/UserScript==

//determen URL
const url = window.location.href;

//Check if they are on kissanime
const url1 = /^https:\/\/+ekstrabladet\.dk\/[A-Z]*/g;

if (url1.test(url)) {
	
	//Enable Jquery
	var script = document.createElement('script');
	script.src = 'https://code.jquery.com/jquery-3.2.0.min.js';
	script.type = 'text/javascript';
	document.getElementsByTagName('head')[0].appendChild(script);
}

setTimeout(
  function() 
  {
    $('body').find('div .p-absolute').parent().remove();
  }, 4000);

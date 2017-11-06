// ==UserScript==
// @name         Ekstrabladet_remove_ads
// @namespace    https://github.com/WindWalk12/KissMALMigration
// @version      1.0
// @description  Remove adblock ad
// @author       WindWalk
// @match        http://*/*
// @grant        none
// ==/UserScript==

//determen URL
const url = window.location.href;

//Check if they are on kissanime
const url1 = /^http:\/\/+ekstrabladet\.dk\/[A-Z]*/g;

if (url1.test(url)) {
	
	//Enable Jquery
	var script = document.createElement('script');
	script.src = 'https://code.jquery.com/jquery-3.2.0.min.js';
	script.type = 'text/javascript';
	document.getElementsByTagName('head')[0].appendChild(script);

	$('body').find('div:nth-child(5)').remove();

// ==UserScript==
// @name         TranslatorTool
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       xingdo
// @match        http://tampermonkey.net/stats.php?ext=dhdg
// @require https://code.jquery.com/jquery-2.1.4.min.js
// @include      http://translator.amazon.com/*
// @grant        none
// ==/UserScript==
function HelperUI() {
    $("body").append('<input type=file id="fileInput">');
    alert("meme");
}

(function() {
    'use strict';
     HelperUI();
    // Your code here...
})();//IIFE(Immediately Invoked Function Expression)

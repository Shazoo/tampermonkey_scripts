// ==UserScript==
// @name         什么值得买签到脚本
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  try to take over the world!
// @author       You
// @match        http*://www.smzdm.com/
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var btn = document.getElementsByClassName('J_punch')[0];
    if (/签到(得|领)积分/.test(btn.text)) {
        console.log('btn_click');
        btn.click();
    }
})();
// ==UserScript==
// @name         什么值得买签到脚本
// @namespace    https://oi.0w0.io/2018/08/06/smzdm-com-的自动签到脚本/
// @version      2018-08-06
// @description  什么值得买签到脚本，避免忘记点击的错误
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
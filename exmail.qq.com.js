// ==UserScript==
// @name         腾讯企业邮自动登陆
// @namespace    http://tampermonkey.net/
// @version      2018-08-21
// @description  默认选中腾讯企业邮自动登陆，以防忘记
// @icon         https://exmail.qq.com/favicon.ico
// @author       Shazoo
// @compatible   firefox
// @match        https://exmail.qq.com/cgi-bin/loginpage*
// @grant        none
// @run-at       document-end
// @license      MIT https://opensource.org/licenses/MIT
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var auto_login = document.getElementById('ss');
    auto_login.click()

})();
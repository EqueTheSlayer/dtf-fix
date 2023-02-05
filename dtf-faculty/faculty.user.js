// ==UserScript==
// @name         DTF факультеты хогвартса
// @namespace    https://github.com/EqueTheSlayer/dtf-fix/
// @updateURL   https://github.com/EqueTheSlayer/dtf-fix/raw/master/dtf-faculty/faculty.meta.js
// @downloadURL https://github.com/EqueTheSlayer/dtf-fix/raw/master/dtf-faculty/faculty.user.js
// @version      1
// @description  try to take over the world!
// @author       Ilyuha
// @include     *://*.dtf.ru*
// @include     *://dtf.ru/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    const name = document.querySelector('.v-header-title__name');

    name.innerHTML = 'Anus';
    addGlobalStyle(``);
})();
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

(function () {
    'use strict';
    setTimeout(() => {
        const meta = document.createElement('meta');
        meta.httpEquiv = "Content-Security-Policy";
        meta.content = "upgrade-insecure-requests";
        document.getElementsByTagName('head')[0].appendChild(meta);
    }, 1500);

    setTimeout(() => {
        const userId = window.location.pathname.substr(3);
        const faculty = fetch('https://cors-anywhere.herokuapp.com/http://ilyuha-developer.ru/server/get-user', {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({name: userId})
        })

        faculty.then(item => item.json()).then(data => {

            //запрос в переменную - переменную подставлеем вместо (магл) на 21 строке
            const name = document.querySelector('.v-header-title__name');

            name.innerHTML = `${name.textContent} (${data.faculty ? data.faculty : 'магл'})`;

        });
    }, 2000);

    addGlobalStyle(``);
})();

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) {
        return;
    }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
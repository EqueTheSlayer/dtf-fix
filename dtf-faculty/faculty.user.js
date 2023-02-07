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
// @grant        noneи
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(() => {
        if (window.location.pathname.startsWith('/u/')) {
            const userId = window.location.pathname.substr(3);
            const faculty = fetch('https://ilyuha-developer.ru/server/get-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: userId})
            })

            faculty.then(item => item.json()).then(data => {
                //запрос в переменную - переменную подставлеем вместо (магл) на 21 строке
                const name = document.querySelector('.v-header-title__name');
                let cohort = '';

                switch (data?.faculty) {
                    case 'гфд':
                        cohort = 'Гриффиндор';
                        break;
                    case 'кгв':
                        cohort = 'Когтевран';
                        break;
                    case 'пфд':
                        cohort = 'Пуффендуй';
                        break;
                    case 'сзр':
                        cohort = 'Слизерин';
                        break;
                    case 'абн':
                        cohort = 'Азкабан';
                        break;
                    default:
                        cohort = 'Магл';
                        break;
                }

                name.innerHTML = `${name.textContent}<span class="faculty ${data?.faculty}">${cohort}</div>`;

            });
        }
    }, 2000);

    addGlobalStyle(`
    .faculty {
      background: linear-gradient(
        90deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(255, 154, 0, 1) 10%,
        rgba(208, 222, 33, 1) 20%,
        rgba(79, 220, 74, 1) 30%,
        rgba(63, 218, 216, 1) 40%,
        rgba(47, 201, 226, 1) 50%,
        rgba(28, 127, 238, 1) 60%,
        rgba(95, 21, 242, 1) 70%,
        rgba(186, 12, 248, 1) 80%,
        rgba(251, 7, 217, 1) 90%,
        rgba(255, 0, 0, 1) 100%
    );
      color: white;
      padding: 5px 10px;
      border-radius: 10px;
      font-size: 20px;
      position: relative;
      top: -3px;
    }

    .гфд {
       background: #721E1C;
       color: #ECAD43;
    }

    .кгв {
       background: #18213C;
       color: #ffab58;
    }

    .пфд {
       background: #E9BE3B;
       color: #2B2821;
    }

    .сзр {
       background: #1E813E;
       color: #f3f3f3;
    }

    .абн {
       background: black;
       color: white;
    }
`);
})();

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
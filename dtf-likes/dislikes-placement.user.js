// ==UserScript==
// @name         DTF likes placement
// @namespace    https://github.com/EqueTheSlayer/dtf-fix/
// @updateURL   https://github.com/EqueTheSlayer/dtf-fix/raw/master/dtf-likes/dislikes-placement.meta.js
// @downloadURL https://github.com/EqueTheSlayer/dtf-fix/raw/master/dtf-likes/dislikes-placement.user.js
// @version      1
// @description  try to take over the world!
// @author       илюха
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

    addGlobalStyle(`
  .content-footer__item:first-child {
    order: 3;
    margin-left: 20px !important;
    margin-right: 0 !important;
}

.content-footer {
    position: relative;
}

.comment__content .like-button--action-like {
    order: -1;
    margin-left: 16px;
}

.comment__content .like-button--action-dislike {
    order: -2;
}

.comment__content .comment__action {
    order: 1;
}

.comment__content .comment__action--etc {
    order: 0;
}

.comment--with-no-replies .comment__load-more {
    order: 1 !important;
    width: 100%;
    margin-left: auto;
}

.comment .like-button--action-like {
    margin-right: 0 !important;
}
`);
})();
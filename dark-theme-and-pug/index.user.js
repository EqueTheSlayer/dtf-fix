// ==UserScript==
// @name         темная тема + мопс
// @namespace    https://github.com/EqueTheSlayer/dtf-fix/
// @updateURL    https://github.com/EqueTheSlayer/dtf-fix/raw/master/dark-theme-and-pug/index.meta.js
// @downloadURL  https://github.com/EqueTheSlayer/dtf-fix/raw/master/dark-theme-and-pug/index.user.js
// @version      1
// @description  try to take over the world!
// @author       илюха
// @include     *://*.dtf.ru*
// @include     *://dtf.ru/*
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}


(function() {

    addGlobalStyle(`
    :root {
    --text-color-gray: rgba(255, 255, 255, 0.69);
    --text-color-title: rgba(255, 255, 255, 0.87);
    --text-color-blue: #AAB6FE;
    --text-color-minor: rgba(255, 255, 255, 0.38);
    --text-color-red: #ff5857;
    --text-color-green: #56d469;
    --back-color-deep: #121212;
    --back-color-blue-button: #534bae;
    --blue-button-hover: #49599a;
    --border-color: #343536;
    --border-color-dim: #252526;
    --color-hover-blue: #82b1ff;
    --color-yellow: #ffea60;
    --back-green: rgba(63, 227, 118, .08);
    --back-red: rgba(255, 73, 95, .08);

    --color-00ev: #121212;
    --color-01ev: #1e1e1e;
    --color-02ev: #232323;
    --color-03ev: #252525;
    --color-04ev: #272727;
    --color-06ev: #2c2c2c;
    --color-08ev: #2f2f2f;
    --color-12ev: #333333;
    --color-16ev: #353535;
    --color-24ev: #383838;

    --hover-00ev: #1b1b1b;
    --hover-01ev: #272727;
    --hover-02ev: #2c2c2c;
    --hover-03ev: #2e2e2e;
    --hover-04ev: #2f2f2f;
    --hover-06ev: #343434;
    --hover-08ev: #373737;
    --hover-12ev: #3b3b3b;
    --hover-16ev: #3d3d3d;
    --hover-24ev: #404040;

    color-scheme: dark;

    --switcher-layout-background: var(--color-16ev);
    --switcher-layout-text: var(--text-color-title);
    --primary-color: var(--text-color-blue);
    --switchers-color: var(--text-color-blue);
    --switchers-background-color: var(--hover-16ev);
    --verified-svg-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14' id='ui_verified'%3E%3Cpath fill='%23AAB6FE' fill-rule='evenodd' d='M0 7a7 7 0 1114 0A7 7 0 010 7zm2.695.009l3.22 3.221 5.445-5.444-1.237-1.238-4.208 4.208-1.983-1.984-1.237 1.237z' clip-rule='evenodd'%3E%3C/path%3E%3Cpath fill='%23fff' fill-opacity='.2' fill-rule='evenodd' d='M0 7a7 7 0 1114 0A7 7 0 010 7zm2.695.009l3.22 3.221 5.445-5.444-1.237-1.238-4.208 4.208-1.983-1.984-1.237 1.237z' clip-rule='evenodd'%3E%3C/path%3E%3C/svg%3E");
}

.icon--ui_badge_plus * {
    display: none;
}

.icon--ui_badge_plus {
   background: url('https://media.discordapp.net/stickers/1104760402719551599.png?size=240');
   background-size: cover;
   height: 30px !important;
   width: 30px !important;
}

/* Ник Пользователя */
.layout__right-column > div > div > div:nth-of-type(2) > div > div > div > div[class]:not([class=""]) > a:nth-child(1) > div:nth-child(2) {
    color: var(--text-color-title);
}
/* Ник Пользователя hover */
.layout__right-column > div > div > div:nth-of-type(2) > div > div > div > div[class]:not([class=""]) > a:nth-child(1):hover > div:nth-child(2) {
    color: var(--text-color-blue);
}
/* Время */
.layout__right-column > div > div > div:nth-of-type(2) > div > div:nth-child(2) > div > div[class]:not([class=""]) > a:nth-child(2) {
    color: var(--text-color-minor);
}
/* Время  hover*/
.layout__right-column > div > div > div:nth-of-type(2) > div > div:nth-child(2) > div > div[class]:not([class=""]) > a:nth-child(2):hover {
    color: var(--text-color-blue);
}
/* Текст комментария */
.layout__right-column > div > div > div:nth-of-type(2) > div > div > div > a {
    color: var(--text-color-gray);
}
/* Заголовок поста */
.layout__right-column > div > div > div:nth-of-type(2) > div > div > div > div {
    color: var(--text-color-title);
}
/* Заголовок поста hover */
.layout__right-column > div > div > div:nth-of-type(2) > div > div > div > div:hover,
.layout__right-column > div > div > div:nth-of-type(2) > div > div > div > div > a:hover {
    color: var(--text-color-blue);
}
/* Надпись Комментарии */
.layout__right-column > div > div > div > div > div > span {
    color: var(--text-color-title);
}

.page--index > div[class^="_"] > .l-island-a div {
    color: var(--text-color-title);
}

.page--index .slick-slider .slick-slide > div > div > a,
.page--index > div[class^="_"] > div:nth-child(2) > div:nth-child(2) > div {
    background-color: var(--color-01ev);
    color: var(--text-color-gray);
}

.popover {
   --search-bottom-offset: 0px !important;
}

.page--index > div[class^="_"] > div:nth-child(2) > div:nth-child(2) > div > svg > path {
    fill: var(--text-color-title);
}

.page--index .slick-slider .slick-slide > div > div > a > div > svg > path {
    fill: var(--text-color-blue);
}

body {
    background-color: var(--color-00ev) !important;
}

.updown:after {
    filter: grayscale(100%) sepia(100%) saturate(50%) brightness(25%);
}

/*  ELEVATION SETTINGS */
.notify .notify-item,
.live-stream,
.head-notifies__panel,
.messenger-panel__down {
    background-color: var(--color-24ev) !important;
}

.site-header__item .bubble,
.site-header__item .bubble:before,
.site-header__item .item,
.head-notifies__panel,
.messenger-panel__down,
.v-split-button__dropdown,
.search-dropdown,
.notification,
.item:hover,
.item--has-new-selected.item--selected,
.item--has-new-selected.item--focused,
.item--has-new-selected.item:hover {
    background-color: var(--color-16ev) !important;
}

.u-notification--unread,
.floating-popup__button .ui-button,
.andropov_uploader__preview_item__remove,
.ce-toolbox-search,
.cdx-inline-toolbar__input,
.mobile-bar {
    background-color: var(--color-12ev) !important;
}

.thesis__attach_something,
.gallery-item__remover-button,
.form-picture__remove,
.quote-tool__photo-wrapper__remove,
.etc_control__list,
.etc_control__list:before,
.vote .vote__users,
.comments__item__more--root,
.comments__item__more--root--5,
.ui-button--5,
.attacher__form,
.attacher__form:before,
.comments__subscribe__label,
.content-editorial-tick span,
.content-header-pin__label,
.subsite_head__description--edit span,
.ui-bubble,
.comments_updates,
.shares--desktop .shares__close,
.shares--desktop .shares__open,
.repost_button__list .bubble__container,
.repost_button__list .bubble:before,
.bubble__container .search input,
.reposters_list,
.reposters_list:before,
.vote .vote__value:hover .vote__users--not-empty:before,
.form-picture::before,
.quote-tool__photo-wrapper::before,
.chat-messages__day span,
.ui-limited-input::after,
.rc-anchor-light,
.repost_button__list .bubble,
.repost_button__list .bubble:before,
.bubble,
.bubble:before,
.herzen__command_list,
.andropov_preview,
.repost_button__list .bubble .item,
.v-shares-popover,
.site-names__list, .site-names__list.active,
.tjnames__list, .site-names__list,
.tab__content .item,
.__vcbf__popup,
.__vcbf__popup::before,
.popover,
.v-calendar__arrow,
.v-range__bar,
.v-range__point::after,
.v-checkbox:hover .v-checkbox__control,
.v-etc__dropdown,
.v-etc__item:first-child::before,
.league-block-card,
.v-radio:hover .v-radio__control,
.account-menu-root {
    background-color: var(--color-08ev) !important;
}

.page--editor .bubble,
.page--editor .bubble:before,
.page--editor .bubble__container .search input,
.cdx-helper,
.mf-header__menu .etc-controls .etc-controls__dropdown,
.m-floating .etc-controls .etc-controls__dropdown:before,
.avatar-input__remove,
.remover,
#INVADERS-NAVIGATION,
.header__left .v-button,
.editor-cp__left .v-button {
    background-color: var(--color-06ev) !important
}

.comments_pseudo_form,
.comment-form,
.andropov_link,
.authorCard,
.content-image--with_background,
.ce-toolbar__tools,
.ce-toolbar__tools-search-input,
.cdx-inline-toolbar,
.ce-settings__anchor-input,
.ce-settings__remove-block-button--confirm,
.ce-settings,
.ce-toolbar__mobile-block-actions,
.upload-button,
.gallery-item__image,
.form-text-input,
.media-item-zoomed__inner-inputs .input,
.quiz-tool-input,
.form-text-input,
.input,
.code-tool,
.audio-tool-cover,
.audio-tool-title,
.audio-tool-uploader,
.audio-tool-cover__remove,
.block-incut,
.block-quote--centered,
.block-quote--default,
.block-audio,
.block-number,
.quiz,
.quiz__loader,
.andropov_link,
.authorCard,
.etc-controls--active .etc-controls__dropdown,
.etc-controls__dropdown:before,
.ui_form input[type="text"]:disabled,
.ui_form input[type="password"]:disabled,
.ui_form input[type="email"]:disabled,
.ui_form input[type="name"]:disabled,
.ui_form textarea:disabled,
.ui_form select:disabled,
.ui_form input[type="text"],
.ui_form input[type="password"],
.ui_form input[type="email"],
.ui_form input[type="name"],
.ui_form textarea,
.ui_form select,
.form2__inline-editor,
.input-suggestion input,
.andropov_tweet,
.andropov_telegram,
.instagram-tool__widget iframe,
.m-floating,
.m-floating__header:hover,
.social-auth__button,
.search__input,
.messenger-panel__loader-image,
.messenger-panel__loader-line-1,
.messenger-panel__loader-line-2,
.m-floating .chat-form__textarea,
.cdx-plugin-external-settings__item,
.ui_sub_menu,
.ui_sub_menu--left-arrow:before,
.ui_sub_menu--right-arrow:before,
.ui_sub_menu--center-arrow:before,
.form2__field--text .text,
.form2__field--text .text__input,
.form2__field--advanced_list .text__input,
.inline-dropdown,
.u-notification,
.messenger-panel__down-list,
.audio_player__control__panel,
.etc-controls__dropdown,
.gallery-item,
.wtf_bc--skin--bg-primary,
.wtf_bubble-body textarea,
.ce-popover,
.anchor-tool input,
.remove-tool--confirm,
.tab__content,
.editor-history-item,
.editor-cp-tab__content,
.block-hidden,
.v-calendar,
.v-calendar__notice,
.social-links__item,
.content--embed,
.block-code,
.comments_pseudo_form--banned-panel .restriction--comments,
.comment-form--banned-panel .restriction--comments,
.v-field__wrapper,
.wrapper,
.notifications__loader,
.gallery-image__media-settings--small,
.amount-select__button {
    background-color: var(--color-04ev) !important;
}

.comments__item__space--pinned,
.comments__item__space--new,
.comments__item__space--highlighted,
.tg-legend__checkbox,
.attachButton,
.cdx-input,
.ce-redactor a.andropov_link,
.emoji-picker__panel,
.emoji-picker__panel-list-section-name,
.emoji-picker__tabs,
.emoji-picker__panel::after,
.island__social_links--type_1 .island__social_links__item,
.list-editable__item__remove,
.m-floating .chat-messages--compact,
.v-button,
.v-tabs-navigation,
.v-header-avatar-manage,
.tg-tooltip,
.chat-messages--compact .chat-messages__unread-label span,
.wtf_bc--skin--bg-gray,
.mini-editor__button,
.mobile-navbar,
.filters-popup__header {
    background-color: var(--color-03ev) !important;
}

.tg-header__details-item,
.tg-header__type-switcher,
.v-list-tab--active,
.v-list-tab:hover,
.media-item-zoomed__inner,
.messenger,
.aside-search input,
.chat-messages__unread-label span,
.chat-form__textarea,
.captcha_wall__box,
.ui_modal_window,
.daily-promo-unit__button,
.vacancies_widget__new,
.adviser__container,
.adviser__container::after,
.page--plus .plus-features,
.floating_screen_film--fixed,
.floating_player,
.chat-info__search,
.chat-info__bottom,
.subsites_tune__panel,
.popup__content--pay_card .card_form__card_number,
.popup__content--pay_card .card_form__card_number,
.popup__content--pay_card .card_form__cvv,
.popup__content--pay_card .card_form__exp_month,
.popup__content--pay_card .card_form__exp_year,
.company_card,
.avatar-grid__item,
.shares--mobile .shares__open,
.shares--open .shares__close,
.events_widget__new,
.v-shares-mobile-popover__list,
.v-form-card .v-form-input input,
.msngrConfirmWindow,
.header__content::before,
.editor-cp,
.editor-cp__content::before,
.writing__actions {
    background-color: var(--color-02ev) !important;
}

.l-island-bg,
.new_entries,
.ui-rounded-button__link,
.island--blogs_entries,
.content-header-label,
.tg-chart--line .tg-grid__counter,
.header,
.writing-title,
.gall,
.gl__container,
.aside__list-heading,
.feed__horizon,
.daily-promo-unit,
.daily-promo-unit-label__inner,
.vacancies_widget,
.v-ui-checkbox,
.popup__container__window--styled .popup__container__window__tpl,
.subsites_catalog__search__bar,
.chat-messages,
.special-vk-quiz,
.email_subscribe,
.auth-form,
.popup .popup__content .line,
.search--active .search__input,
.search--filled .search__input,
.widget_wrapper--type-blue,
.subsite-details-mobile-navbar,
.comments__item__expand,
.comments__item__more--inner,
.comments__link_to_all,
.widget_wrapper--type-yellow,
.widget_wrapper--type-pink,
.events_widget,
.island--company_entries,
.content-header__subscribe .ui-button,
.content-header__subscribe .ui-button:hover,
.entry_stub,
.v-popup-window--gray .v-popup-window__content,
.v-popup-window__content,
.v-form__legal:before,
.search_results__horizon,
.bp-unit,
.booster-promo__button,
.wtf_bubble-body,
.vacancy_footer,
.writing__authors,
.l-editor textarea,
.v-popup-fp-window,
.v-mobile-menu__header,
.block-hidden-wrapper::before,
.boost_panel,
.sidebar-tree-list-item--active,
.sidebar-tree-list-item:hover,
.gallery-image__inputs .input,
.mobile-tab__icon,
.commercial-tabs,
.comment__expand,
.auth__controls-container,
.search-filters-footer,
.v-popup-header,
.l-island-bg .u-notification,
.feed-navigation,
.filters-popup__content,
.writing__footer,
.writing-footer{
    background-color: var(--color-01ev) !important;
}

.site-header-burger, .site-header__section--right {
   color: var(--text-color-gray) !important;
}

.site-header-logo {
   color: var(--text-color-gray)
}

.media-item-zoomed__inner-media,
.ui-checkbox--disabled,
.page:after,
.l-page--loading,
.layout,
.v-checkbox__control,
.sidebar__footer,
.v-radio__control {
    background-color: var(--color-00ev) !important;
}

.sidebar,
.sidebar-tree-list__show-more-button,
.layout__left-column,
.layout__right-column  {
    background-color: var(--color-00ev) !important;
}

/* Hovers */
.site-header__item .item:hover,
.site-header__item .item--selected,
.v-split-button-option:hover,
.search-dropdown-item--focused,
.search-dropdown-item--submit:hover,
.input-suggestion__item--selected[data-v-608bac96],
.input-suggestion__item[data-v-608bac96]:hover,
.notify-new-items-label,
.anonymous-dummy__socials .v-button {
    background-color: var(--hover-16ev) !important;
}

.attacher--active .attacher__button,
.attacher__button:hover,
.attacher__button:hover .icon--ui_rouble,
.tc_control__item:hover,
.comments_updates:hover,
.ui-dropdown__item:hover,
.etc_control__item:hover,
.comments_updates:hover,
.ui-dropdown__item:hover,
.comments__item__more--root--5.comments__item__more--root--active,
.comments__item__more--root--5:hover,
.comments__item__more--root.comments__item__more--root--active,
.comments__item__more--root:hover,
.ui-button--5.ui-button--active,
.ui-button--5:hover,
.channel-item--focused,
.repost_button__list .bubble .item--selected,
.repost_button__list .bubble .item--focused,
.repost_button__list .bubble .item:hover,
.v-form-input input,
.herzen__command_list__item--selected,
.herzen__command_list__item:hover,
.v-shares-popover__item:hover,
.thesis__attach_something:hover,
.wtf_bc--feed-item--share--list,
.tab__content .item:hover,
.popover-item--selected,
.popover-item:hover, .popover-item--focused,
.v-calendar__arrow:hover,
.v-range__handle::after,
.v-etc__item:hover,
.v-etc__item:first-child:hover::before,
.comment__self--author .comment-user__name,
.comment__author--highlighted {
    background-color: var(--hover-08ev) !important;
}

.wtf_bc--feed-item--share--list:before {
    border-bottom-color: var(--hover-08ev) !important;
}

.wtf_broadcast .wtf_bc-feed .wtf_bc--feed-item .wtf_bc--feed-item--share .wtf_bc--feed-item--share--list span:not(:first-child) {
    border-top-color: var(--hover-08ev) !important;
}

@media (min-width: 720px) {
    .account-menu__user-card:hover,
    .account-menu__item:hover,
    .account-menu__subsite:hover,
    .account-menu__button:hover {
        background-color: var(--hover-08ev) !important;
    }
}

.page--editor .bubble .item--selected,
.page--editor .bubble .item--focused,
.page--editor .bubble .item:hover,
.add-members__icon,
.v-calendar__cell--selected-sequence:hover {
    background-color: var(--hover-06ev) !important;
}

.ce-toolbar__tools-item--selected,
.ce-toolbar__tools-item:hover,
.ce-toolbar__tools-item--selected:before,
.ce-toolbar__tools-item:hover:before,
.cdx-inline-toolbar__button:hover,
.cdx-inline-toolbar__link-remover:hover,
.cdx-plugin-settings__item:hover,
.ce-settings__item:hover,
.ce-settings__remove-block-button--confirm:hover,
.cdx-plugin-settings__item--active,
.ce-settings__remove-block-button--confirm:hover,
.upload-button:hover,
.avatar-input::after,
.etc-controls__dropdownItem:hover,
.ce-settings__anchor-wrapper:hover input,
.andropov_telegram__media--photo,
.andropov_telegram__media--video,
.andropov_tweet__media--photo,
.andropov_tweet__media--video,
.andropov_preview--image,
.donate-attachment,
.cdx-inline-toolbar__link-back:hover,
.media-tool-settings__item:hover,
.media-tool-settings__item--active,
.ui_sub_menu__item:hover,
.dropdown__found__item--selected,
.dropdown__found__item:hover,
.u-notification--unread,
.u-notification--hover:hover,
.u-notification--unread:hover,
.channel-item.channel-item--current:hover,
.wtf_broadcast .wtf_bc-feed .wtf_bc--feed-item.wtf_bc--hot .wtf_bc--feed-item--bg,
.ce-block-settings__item:not(.no-hover):hover,
.editor-history-item:hover,
.v-calendar__cell--selected-sequence,
.v-calendar__day:hover,
.v-calendar__button:hover,
.v-calendar__cell--hovered,
.v-calendar__cell--selected .v-calendar__day,
.social-links__item:hover,
.ce-toolbox__item--selected,
.ce-toolbox__item:not(.no-hover):hover,
.ce-block-settings__item--active,
.content--embed .content-image--with_background,
.content--embed .andropov_link,
.content--embed .block-incut,
.content--embed .block-quote--default,
.content--embed .block-code,
.content--embed .block-number,
.content--embed .quiz,
.content--embed .block-audio,
.content--embed .audio_player__control__panel,
.comment--new .andropov_link,
.comment--highlighted .andropov_link,
.comments__pinned .andropov_link,
.comment--pinned .andropov_link,
.content--embed .andropov_tweet,
.content--embed .andropov_telegram,
.l-island-bg .notify-new-items-label,
.upload-button:hover .upload-button__inner {
    background-color: var(--hover-04ev) !important;
}

.attachButton:hover,
.email_subscribe_vue__form,
.email_subscribe_vue__form input,
.comments__item__space--pinned .andropov_link,
.comments__item__space--new .andropov_link,
.comments__item__space--highlighted .andropov_link,
.mini-editor__button:hover {
    background-color: var(--hover-03ev) !important;
}

.tg-header__details-item--current,
.tg-header__type-switcher--current,
.channel-item--current,
.channel-item:hover,
.contacts:not(.contacts--disabled) .contacts__item:hover,
.message--selected,
.aside__button:hover,
.aside-placeholder__picture,
.aside-placeholder__line1,
.aside-placeholder__line2,
.chat-info-form__picture,
.chat-info-form .ui-input,
.chat-info__search .user,
.popup__container__window .select__current,
.ui_modal_window--unpublish textarea,
.wtf_bc--og.wtf_bc--skin--bg-gray {
    background-color: var(--hover-02ev) !important;
}

.ui-rounded-button__link:hover,
.new_entries:hover,
.v-island .u-notification--unread,
.v-island .u-notification--hover:hover,
.v-island .u-notification--unread:hover,
.vb > .vb-dragger > .vb-dragger-styler,
.daily-promo-unit-label__inner:hover,
.table__row--me,
.email_subscribe_form__inner,
.email_subscribe_form__input,
.ui_select,
.ui_select select,
.gallery-image--with-background .gallery-image__media,
.v-header-avatar,
.popup__content--misprint .selected_text span,
.v-popup-window__cover,
.booster-promo__button:hover,
.ui_modal_window__title__input,
.ui_modal_window__textarea,
.commercial-list__item:hover, .commercial-list__item--active,
.dstr-fl__outer,
.sidebar-tree-list-item__child-item:hover,
.comment__space--highlighted::before,
.comment__space--new::before,
.comment__space--pinned::before,
.comment__space--with-donate::before,
.comment--highlighted .comment__branches::before,
.comment--highlighted .comment__content::before,
.comment--new .comment__branches::before,
.comment--new .comment__content::before,
.comment--pinned .comment__branches::before,
.comment--pinned .comment__content::before,
.comment--with-donate .comment__branches::before,
.comment--with-donate .comment__content::before,
.l-island-bg .u-notification--unread,
.l-island-bg .u-notification:hover,
.league-block,
.get-api-token__text--token,
.uploader__inner,
.content-image {
    background-color: var(--hover-01ev) !important;
}

.comment--highlighted,
.comment--new {
    --background-color: var(--hover-01ev) !important;
}

.u-notification--blue.u-notification--bg,
.u-notification--green.u-notification--bg,
.u-notification--red.u-notification--bg {
    background-color: var(--hover-00ev) !important;
}

.search--active .search__input,
.search--filled .search__input,
.search-dropdown,
.search-dropdown-item--string,
.navigation-user-profile__toggle:hover,
.bubble,
.bubble:before,
.item,
.head-notifies__panel,
.messenger-panel__down,
.sidebar,
.sidebar-tree-list-item__icon,
.sidebar-tree-list-item__child-item,
.sidebar__footer,
.sidebar__footer__icon,
.u-notification__link,
.live__item--comment .live__item__content .live__item__text,
.l-island-bg,
.new_entries,
.ui-rounded-button__link,
.widget_entry__description,
.widget_wrapper--type-blue .widget_wrapper__title,
.widget_wrapper--type-yellow .widget_wrapper__title,
.widget_wrapper--type-pink .widget_wrapper__title,
.widget_subsite__rank,
.blogs_entries__desc,
.widget_comment__content__text,
.island--blogs_entries .blogs_entries__subsite,
.etc_control__item,
.reposters_list,
.reposters_list__item,
.bubble__container .search input,
.vacancies_widget__new,
.icon--ui_minify,
.special-vk-quiz__results,
.email_subscribe_form .icon--ui_email_2,
.email_subscribe_form__submit,
.social-auth,
.auth-form__back,
.attachButton,
.ce-toolbar__tools,
.ce-toolbar__tools-search-input,
.ce-block-indicator,
.ce-settings,
.ce-toolbar__mobile-block-actions,
.ce-settings__anchor-input,
.cdx-input,
.code-input,
.audio-tool-cover,
.audio-tool-title,
.audio-tool-uploader,
.ce-redactor a.andropov_link,
.adviser__container,
.adviser__toggler,
.adviser__container::after,
.andropov_link__description,
.cdx-helper,
.audio_player--theme-compact .audio_player__control--title,
.floating_screen_film__sourceLink,
.new-entries-horizon,
.channel-item__info-second-line,
.aside-search input,
.etc-controls--active .etc-controls__dropdown,
.message__content-text,
.chat-form__textarea,
.chat-form__attach,
.emoji-picker__invoker,
.emoji-picker__tabs span,
.chat-info__bottom .b:not(.b--submit),
.chat-info__search .user,
.chat-base-info__subtitle,
.chat-actions__item,
.add-members,
.message__content-reply-text,
.ui-limited-input::after,
.ui_modal_window__content,
.l-island-a,
.ui_form input[type="text"],
.ui_form input[type="password"],
.ui_form input[type="email"],
.ui_form input[type="name"],
.ui_form textarea,
.ui_form select,
.ui_form input[type="text"]:disabled,
.ui_form input[type="password"]:disabled,
.ui_form input[type="email"]:disabled,
.ui_form input[type="name"]:disabled,
.ui_form textarea:disabled,
.ui_form select:disabled,
.island__social_links--type_1 .island__social_links__item,
input,
.list-editable__item,
.icon--ui_email,
.icon--bell,
.select .icon--ui_arrow_down,
.popup__content--payments .payments_popup__label,
announcement-stats,
.popup__content--payments .payments_popup .agreement label,
.ui_select select,
.ui_select .icon,
.popup__content--pay_card .order_details__label,
.popup__content--pay_card .order_details__num,
.payments_popup__info,
.popup__container__window--styled .popup__container__window__tpl,
.popup__content--pay_card .order_details__line,
.donate-attachment,
.u-notification__content__title,
.select__current,
.ui_sub_menu,
.form2__field--checkbox label,
.inline-dropdown,
.inline-dropdown__found-item--hashtag::before,
.audio_player__control__mute,
.audio_player__control__rate,
.v-shares-popover__icon,
.v-shares-mobile-popover__list,
.v-shares-mobile-popover__icon,
.chat-form__reply-text,
.ui_modal_window--unpublish textarea,
.sidebar-tree-list-item--colored,
.v-receipt,
.v-message__text,
.andropov_preview__description,
.wtf_bc--skin--main-text,
.wtf_broadcast .wtf_bc-feed .wtf_bc--feed-item .wtf_bc--feed-item--share .wtf_bc--feed-item--share--list span,
.ng-binding,
.wtf_bubble-body textarea,
.ui_modal_window__textarea,
.adult__message,
.mdl-radio__sub-label,
.msngrConfirmMessage,
.v-form__content,
.v-popup-window__close--inside,
.auth__back,
.__vcbf__popup-content > div,
.v-shares-popover,
.commercial-list__name,
.v-mobile-menu,
.v-mobile-menu__icon,
.mini-editor__button,
.ancientrussia-branding__title,
.v-calendar__day--out,
.v-etc__button,
.popover-item,
.v-calendar__day .v-calendar__day--out,
.gallery-image__inputs .input--title:empty:before,
.mdl-radio__label,
.mdl-checkbox__label,
.gallery-image__media-settings--small .media-tool-settings__item .icon,
.mobile-tab__caption,
.user-settings__navigation .v-list-tab__icon,
.v-text-area__input,
.ce-popover__close svg path,
.cdx-inline-toolbar__button-wrapper,
.mobile-bar__feed,
.mobile-bar__messenger,
.mobile-bar__notifications,
.mobile-bar__profile,
.v-popup-header__btn,
.v-list-subsites-item__title,
.v-field__wrapper .v-text-input__input,
.bp-unit-link__description,
.v-popup-content__body,
.gallery-image__media-settings--small .upload-button,
.popover-item__main .popover-item__label,
.popover-item__icon,
.v-split-button__dropdown,
.v-island .icon--v_block_set,
.v-checkbox__caption,
.account-menu__item,
.v-header__tabs .v-tab {
    color: var(--text-color-gray) !important;
}

.item--selected,
.u-notification__content__title a,
.messenger-panel__down-head,
.channel-item__name,
.item__badge,
.sidebar__button .v-button,
.live__title,
.live__toggle,
.live__item--comment .live__item__user__name,
.live__item--comment .live__item__title,
.news_widget__load_more,
.news_widget__header,
.v-tab,
.content-header__title,
.widget_entry__subsite__avatar__title,
.widget_entry__title,
.widget_subsite__name,
.widget_comment__author,
.widget_comment__entry,
.widget_wrapper__more,
.blogs_entries__load_more,
.island--blogs_entries .blogs_entries__title,
.content-header-author__name,
.daily-promo-unit__title,
.vacancies_widget__load_more,
.sp-button--blue,
.sp-button--red,
.live-stream__title,
.ui-dotted-button,
.special-vk-quiz__title,
.subsites_tune__item__link,
.email_subscribe__subtitle,
.email_subscribe__title,
.auth-form__title,
.v-header-title__name,
.v-island__title,
.profile_comment_favorite__title,
.profile_comment_favorite__user__name,
.notifications-header__title,
.donate-cabinet-header__value,
.donate-cabinet-header__title,
.v-dummy__title,
.v-list-tab__icon,
.v-list-tab--active .v-list-tab__icon,
.subsite-details-mobile-navbar__name,
.icon--ui_close,
.icon--v_arrow_left,
.charts-title,
.chart .tg-header__title,
.v-list-subsites-item__label,
.v-button,
.v-tabs-navigation,
.v-header-avatar-manage,
.ui-tab--active .ui-tab__label,
.v-mini-header__title,
.tg-chart--line .tg-grid__counter,
.tg-legend__item--enabled,
attachButton:hover,
.writing-title,
.ce-block-indicator:hover,
.cdx-plugin-settings__item--active,
.ce-header,
.audio-tool-cover__remove,
.andropov_link__title,
.advice__title,
.u-notification__content__reply-text b,
.content h2 .l-island-a,
.content h3 .l-island-a,
.content h4 .l-island-a,
.gl__title,
.block-quote__author-name,
.icon--audio_play,
.icon--audio_rwd,
.icon--audio_fwd,
.icon--audio_pause,
.quiz__title,
.block-number__digit,
.block-person__title,
.authorCard__name,
.content b,
.content strong,
.editor .ce-redactor b,
.editor .ce-redactor strong,
.miniEditor .ce-redactor b,
.miniEditor .ce-redactor strong,
.subsite_head__description b,
.user-option b,
.comments__title__long,
.notify .notify-item,
.andropov_telegram__user__name,
.andropov_tweet__user__name,
.floating_screen_film__title,
.editor .marked-text,
.miniEditor .marked-text,
.profile_comment_favorite__text mark,
.profile_comment_self__text mark,
.subsite_card_simple__description mark,
.content mark,
.comments__item__self--major .comments__item__user__name,
.shares__close,
.shares__open,
.comments__item__self--minor .comments__item__user__name,
.page--error .error,
.popup__content h4,
.v-form-input input,
.contacts__item,
.chat-header-info__title,
.channel-item--current,
.chat-messages__day span,
.message__content-name,
.mf-header__user,
.chat-nav,
.b--submit,
.chat-base-info__title,
.message__content-reply-name,
.subsite_settings__head,
.subsite_settings__section__title,
.input-suggestion__item,
.captcha_wall__box,
.ui_modal_window__title,
.subsite_card_simple__title,
.subsite_head__name,
.table__row--header .table__cell:first-child,
.table__row--footer,
.page--plus .name,
.page--plus h1,
.plus-features__item__title,
.popup__content--payments .payments_popup__name,
.title--cancel,
.subsite_card_simple_short__title,
.subsites_catalog__dummy,
.subsites_catalog__label,
.block-special-button a,
.sidebar-tree-list-item--bold,
.ad-contacts__user__name,
.donate-attachment__sum,
.u-notification__content__title b,
.media-tool-settings__item--active,
.v-header-description mark,
.form2__inline-editor b,
.marked-text,
.v-header-description b,
.v-header-description strong,
#INVADERS-POINTS,
.floating-popup__title,
.andropov_preview__title,
.events_widget__title,
.events_widget__item__title,
.island--company_entries .island__header__title,
.island--company_entries .company_entries__title,
.content-title,
.v-shares-mobile-popover__name,
.chat-form__reply-name,
.content__thanks a:hover span,
.site-names__list b,
.v-form__title,
.v-message__title,
.bp-unit__title,
.subsite-card-title__item--name,
.block-warning__title,
.kojur-nav__item span,
.wtf_bc--skin--main-text.ng-binding,
.wtf_bc--skin--item-header .wtf_bc--skin--link,
.wtf_bc--skin--link,
.wtf_broadcast .wtf_bc-feed .wtf_bc--feed-item .wtf_bc--feed-item--share .wtf_bc--feed-item--share--list span:hover,
.list__category-name,
.wtf_bc--header--counter.ng-binding,
.wtf_bc--username.ng-binding,
.system-message a:hover,
.tjnames__list b,
.adult__title,
.__vcbf__popup-header_name,
.__vcbf__popup-content > div > span,
.l-editor textarea,
.v-mobile-menu__name,
.live-header,
.popover-item--selected .popover-item__label,
.bp-unit-entry__subsite-name,
.bp-unit-entry__title,
.v-calendar__title,
.v-calendar__day,
.v-form-section__label,
.bc-form-range__value,
.social-links__title,
.plus-info__quantity,
.mobile-navbar,
.mobile-tab__label,
.mobile-tab__icon,
.v-hashtag__text, .v-hashtag__close-button,
.v-list-tab--active .v-list-tab__label-text,
.v-list-tab--active .v-list-tab__icon,
.ad-contacts__title,
.ad-user__name,
.subsite-ban-popup__title,
.comment-user__name,
.comment__author,
.ce-popover__close:hover svg path,
.ce-popover__title,
.content b,
.content strong,
.editor .ce-redactor b,
.editor .ce-redactor strong,
.miniEditor .ce-redactor b,
.miniEditor .ce-redactor strong,
.subsite_head__description b,
.user-option b,
.editor h2.ce-header,
.miniEditor h2.ce-header,
.editor h3.ce-header,
.miniEditor h3.ce-header,
.editor h4.ce-header,
.miniEditor h4.ce-header,
.ce-block-settings__item--active,
.notifications__title,
.v-popup-header,
.bp-unit-link__title,
.news-widget__load-more,
.comments-header__title,
.writing-select__current,
.filters-popup__title,
#v_cross,
.search-filter__title,
.account-menu__user-card,
.v-header__tabs .v-tab--active,
.account-menu__title {
    color: var(--text-color-title) !important;
}

.search__input::placeholder,
.search-dropdown__title,
.bubble__title,
.u-notification__content__date,
.channel-item__time,
.channel-item__status,
.sidebar-tree-list-item__favourite,
.live__item--comment .live__item__date,
.andropov_link_mini,
.time,
.news_item .time,
.news_widget__toggle,
.news_widget__toggle .icon,
.comments_counter__count__unit,
.comments_counter__count__value,
.favorite_marker__count,
.favorite_marker__title,
.repost_button__button,
.island--blogs_entries .island__header__title,
.blogs_entries__title,
.blogs_entries__subsite,
.etc_control,
.vote .vote__value,
.vote .vote__button,
.bubble__container .search input::placeholder,
.list__dummy,
.content-header-author__repost,
.daily-promo-unit-label__hide,
.vacancies_widget__item__city,
.vacancies_widget__item__company,
.vacancies_widget__item__salary,
.content-header-promoted,
.email_subscribe_form__input::placeholder,
.auth-form__help,
.auth-form__note,
.v-tab__counter,
.v-island__counter,
.profile_comment_favorite time,
.profile_comment_self time,
.profile_comment_favorite__footer__reply,
.ui-tab__counter,
.tg-legend__item,
.tg-legend__item:hover,
.tg-legend__item--enabled:hover,
.miniEditor__text,
.writing-title::placeholder,
.ce-settings__anchor-input::placeholder,
.editor .cdx-gallery__caption::before,
.editor .cdx-input::before,
.editor .ce-header::before,
.editor .ce-paragraph::before,
.miniEditor .cdx-gallery__caption::before,
.miniEditor .cdx-input::before,
.miniEditor .ce-header::before,
.miniEditor .ce-paragraph::before,
.cdx-input::placeholder,
.code-input::placeholder,
.media-item-zoomed .input--author,
.andropov_link__host,
.content .content-image-caption__author,
.gl__author,
.gl__counter,
.audio_player__control--duration,
.content-header-number,
.andropov_telegram__user__nickname,
.andropov_tweet__user__nickname,
.andropov_telegram__date time,
.andropov_tweet__date time,
.andropov_telegram__social_activity,
.andropov_tweet__social_activity,
.andropov_telegram__text--forwarded-from,
.andropov_telegram__text--unsupported,
.andropov_tweet__text--forwarded-from,
.andropov_tweet__text--unsupported,
.audio_player__control--listens,
.v-island__grayed,
.thesis__placeholder,
.comments__item__self--ignored .comments__item__text,
.comments__item__self--removed .comments__item__text,
.comments__item__date,
.comments__item__replied_to,
.comments__item__reply,
.comments__item__ico,
.ui_form .help,
.ui_form .label,
.chat-header-info__title .icon--mute,
.channel-item__time,
.channel-item__status,
.chat-header-info__subline,
.chat-placeholder__content,
.message__time,
.chat-form__textarea::placeholder,
.emoji-picker__panel-list-section-name,
.chat-bottom-actions__right,
.chat-info-form .ui-input::placeholder,
.chat-info-form__picture,
.chat-info__label,
.aside-search,
.user__cross,
.aside-search input::placeholder,
.contacts__item-role,
.ui_form label,
.ui_form--nickname .caption,
.subsite_settings--description-field label,
.subsite_settings__section__label,
.ui_form--nickname .nickname-controls__button--cancel,
.input-suggestion input::placeholder,
.ui_modal_window--get_api_token .ui_modal_window__content__rules,
.ui_modal_window__close .icon,
.list-editable__more,
.content-footer-watchers,
.contentFilter__title,
.contentFilterCheckbox__counter,
.subsite_card_company__vacancies__title,
.feed_header__label,
.table__row--header .table__cell:not(:first-child),
.popup__content--payments .payments_popup__info p,
.sidebar-tree-list-item__favourite:hover,
.ui-button--4,
.navigationDropdown__current__button,
.navigationDropdown__current__link,
#INVADERS-NAVIGATION,
.form2__field label,
.andropov_preview--link .andropov_preview__hostname,
.content__updating,
.content-info,
.v-shares__button,
.entry_stub__option[data-state="2"],
.profile_comment_favorite__expand,
.comment-unspy-button .material-icons,
.v-date__main,
.audio_listen_button,
.v-form-card .v-form-input input::placeholder,
.v-form__legal,
.v-date__expires,
.widget_comment__label,
.booster-promo__hide,
.content-info__item,
.wtf_bc--skin--sec-text.ng-binding,
.wtf_bc--at-time.ng-binding,
.counter__number,
.dummy__text,
.ui_modal_window__textarea::placeholder,
.chat-dropdown-pointer,
.auth-email-recover,
.v-form-input input::placeholder,
.l-editor textarea::placeholder,
.mini-editor__placeholder,
.v-field__icon,
.popover-title,
.popover-item__details,
.v-select__placeholder,
.v-calendar__weekday,
.v-calendar__day--disabled,
.v-calendar__notice,
.bc-form-range__ends,
.bc-form-range__hint,
.editor-cp__autosave,
.gallery-image__inputs .input--author:empty::before,
.gallery-image__inputs .input--author,
.comments__item__replied_to span,
.comments__item__text__edited,
.settings-header,
.settings-header .icon--v_arrow_left,
.user-settings__dev-tools,
.v-list-tab__comment,
.v-field__caption,
.textarea-formatted__countdown,
.v-text-input__countdown,
.v-form-section__subtitle,
.v-list-subsites-item__subtitle,
.commercial-list__price,
.ad-user__position,
.v-text-area__input::placeholder,
.comment__reply,
.comment__replied_to,
.comment__text__edited,
.comment__ico,
.comment__self--ignored .comment__text,
.comment__self--removed .comment__text,
.ce-toolbox-search input::placeholder,
.ce-toolbox-search-icon,
.ce-toolbox__not-found,
.cdx-inline-toolbar__input::placeholder,
.anchor-tool__input::placeholder,
.v-repost__button,
.comment__icon,
.comment__action,
.v-popup-window__close,
.comment--removed,
.v-field__wrapper .v-text-input__input::placeholder,
.v-field__wrapper .v-text-input--disabled .v-text-input__input,
.bookmarks_return,
.get-api-token__text--warn,
.v-text-area__countdown,
.twitter-tweet p,
.andropov_telegram__text--reply-to,
.andropov_tweet__text--reply-to,
.comment__text--deleted,
.comment--is-frozen-creator .comment__author,
.comment--is-frozen-creator .comment__author:hover,
.comment--is-frozen-creator .comment__text,
.comment--is-removed-creator .comment__author,
.comment--is-removed-creator .comment__author:hover,
.comment--is-removed-creator .comment__text,
.bookmark__title,
.updown__icons,
.writing-footer__autosave,
.quote-tool [contenteditable]:empty::before,
.quote-tool [contenteditable] p:first-of-type:empty::before,
.writing .ce-paragraph::before,
.writing .ce-header::before,
.gallery-image__inputs .input--title:empty:before,
.writing .cdx-input::before,
.incut-tool [contenteditable]:empty::before,
.incut-tool [contenteditable] p:first-of-type:empty::before,
.audio-tool-title::-webkit-input-placeholder,
.quiz-tool-input:empty:before,
.like-button {
    color: var(--text-color-minor) !important;
}

.v-field__wrapper .v-text-input--disabled .v-text-input__input {
    -webkit-text-fill-color: var(--text-color-minor) !important;
}

.head-notifies--showed .head-notifies__toggler .icon,
.head-notifies__toggler:hover .icon,
.navigation-user-profile__toggle:hover,
.site-header-burger:hover,
.t-link-inline,
.u-notification__content__button,
.u-notification__content__title a:hover,
.u-notification__content__button:hover,
.notify-new-items-label,
.sidebar-tree-list-item--active,
.sidebar-tree-list-item--active:not(.sidebar-tree-list-item--with-active-child) .sidebar-tree-list-item__icon,
.sidebar-tree-list-item__child-item--active,
.email_subscribe_vue__form__button:hover,
.live__item--comment .live__item__user__name:hover,
.live__item--comment .live__item__title:hover,
.audit_log__item__log a:hover,
.live__item--comment .live__item__user:hover .live__item__user__name,
.t-link-hovered,
.live__item--comment .live__item__date:hover,
.live__item--comment .live__item__date:hover time,
.live__item--comment .live__item__title:hover,
.live__item--comment .live__item__title:hover time,
.profile_comment_favorite__title:hover,
.profile_comment_favorite__title:hover time,
.profile_comment_favorite__user:hover,
.profile_comment_favorite__user:hover time,
.profile_comment_self__title:hover,
.profile_comment_self__title:hover time,
.t-link:hover,
.t-link:hover time,
.vote .vote__users__item:hover,
.vote .vote__users__item:hover time,
a.content-header-author:hover,
a.content-header-author:hover time,
a.content-header-number:hover,
a.content-header-number:hover time,
.news_widget a:hover,
.comments_counter__count__value_new,
.comments_counter:hover .comments_counter__count__unit,
.comments_counter:hover .comments_counter__count__value,
.comments_counter:hover .comments_counter__count__value_new.comments_counter__count__value_new,
.news_widget__load_more:hover,
.new_entries:hover,
.ui-rounded-button--active .ui-rounded-button__link,
.repost_button__button:hover,
.etc_control:hover,
.t-link:hover .widget_entry__subsite__avatar__title,
.t-link:hover .widget_entry__title,
.t-link:hover .widget_subsite__name,
.t-link:hover .widget_comment__author,
.t-link:hover .widget_comment__entry,
a.content-header-author:hover .content-header-author__name,
.content-editorial-tick,
.ui-tab:hover,
.u-notification__controls .etc_control__list .etc_control__item:hover,
.daily-promo-unit-label__inner,
.daily-promo-unit__button:hover,
.vacancies_widget__new:hover,
.vacancies_widget__title,
.vacancies_widget__title:hover,
.vacancies_widget__item__title:hover,
.vacancies_widget__item__city:hover,
.vacancies_widget__item__company:hover,
.subsites_tune__select-all,
.t-link-inline,
.navigation-user-login:hover,
.profile_comment_favorite__user__name:hover,
.v-list__more,
.donate-cabinet-header a,
.v-dummy__text a,
.v-list-subsites-item__label:hover,
.v-list-subsites__more,
a.v-list-subsites-item__main:hover .v-list-subsites-item__label,
.select__current:hover,
.adviser__close,
.adviser__show-next,
.tab__label:hover,
.quiz__panel__button,
.quiz__item__voted__count,
.andropov_telegram__date:hover time,
.andropov_telegram__user:hover .andropov_telegram__user__name,
.andropov_telegram__user:hover .andropov_tweet__user__name,
.andropov_telegram__user:hover .andropov_tweet__user__nickname,
.andropov_tweet__date:hover time,
.andropov_tweet__user:hover .andropov_telegram__user__name,
.andropov_tweet__user:hover .andropov_tweet__user__name,
.andropov_tweet__user:hover .andropov_tweet__user__nickname,
.advice__caption a,
.advice__list a,
.andropov_telegram__text a,
.andropov_tweet__text a,
.island__container--with_links a,
.island__info a,
.island__list__link,
.subsite_about__text a,
.advice__caption a,
.advice__list a,
.andropov_telegram__text a,
.andropov_tweet__text a,
.island__container--with_links a,
.island__info a,
.island__list__link,
.subsite_about__text a,
.floating_screen_film__title:hover,
.floating_screen_film__control:hover,
a.v-list__item:hover,
.block-person a,
.block-quote a,
.block-warning a,
.comments__item__text a,
.content figcaption a,
.content h2 a,
.content h3 a,
.content h4 a,
.content ol a,
.content p a,
.l-island-a a b,
.content ul a,
.page--error .error__message a,
.profile_comment_favorite__text a,
.profile_comment_self__text a,
.sitemap a,
.subsite_card_simple__description a,
.subsite_head__description a,
.t-link-classic,
.t-link:hover .comments__item__user__name,
.comments__item__reply:hover,
.chat-messages__unread-label span,
.message--selected .message__actions-select,
.chat-bottom-actions__button,
.message__content-text a,
.emoji-picker__tabs span:hover,
.emoji-picker__invoker:hover,
.emoji-picker__tabs span.active,
.chat-form__attach:hover,
.chat-bottom-actions__right-button,
.mf-header__menu .etc-controls:hover .icon--dots,
.aside__button,
.message__status--read,
.chat-actions__item:hover,
.add-members:hover,
.select__current:hover .icon--ui_arrow_down,
.table__cell:hover .subsite__name,
.table__cell:hover .subsite__rank,
.table__row--footer:hover .table__more,
.page--plus p a,
.subsites_catalog__open_wrapped:hover,
.v-header-description a:not(.t-link-inline),
.comments__subscribe--active .icon--bell,
.comments__item__expand,
.comments__item__more--inner,
.editor .ce-redactor a,
.miniEditor .ce-redactor a,
.comments__item__go_to_original,
.u-notification__content__title a:hover b,
.cdx-plugin-external-settings__item--active,
.herzen .content_editable ce-command,
.subsite__cover__add__button:hover,
.item__check,
.ce-block__content a,
.inline-search-item,
.t-link-classic,
.form2__field--advanced_list .advanced_list__list .adv_list_item a,
.v-list__label a,
.events_widget__item a.events_widget__item__city:hover,
.events_widget__item__title:hover,
.events_widget__title:hover,
.andropov_telegram__text__more,
.andropov_tweet__text__more,
.audio_player__control--download:hover,
.with-icon:hover,
.audio_player__control__rwd:hover,
.audio_player__control__fwd:hover,
.audio_player__control__play:hover,
.audio_player__control__pause:hover,
.audio_player__control__rate:hover,
.audio_player__control__mute:hover,
.audio_player__control__volume:hover,
.v-shares__button:hover,
.content-header__subscribe .ui-button,
.content-header__subscribe .ui-button .icon,
.entry_stub__button,
.repost_button__button--active,
.profile_comment_favorite__expand:hover,
.audio_listen_button:hover,
.v-form__legal a,
.etc_control--open,
.t-link-site,
.kojur-nav__item a,
.wtf_bc--skin--item-header .wtf_bc--skin--link:hover,
.wtf_bc--skin--link:hover,
.wtf_broadcast .wtf_bc-copyright a:hover,
.wtf_bc--username.ng-binding:hover,
.restriction a,
.editor-subsite-select__current:hover,
.editor-cp-tab__label:hover,
.dstr-fl__text:hover,
.block-hidden__button,
.boost_panel__msg,
.bc-form-hidden-block__label,
.v-calendar__arrow,
.gallery-image__media-settings .media-tool-settings__item--active .icon,
.comment-user__name:hover,
.comment__reply:hover,
.comment__replied_to:hover,
.comment__expand,
.comment__text a,
.cdx-inline-toolbar__button-wrapper--active,
.v-repost__button:hover .v-repost__counter,
.v-repost--active .v-repost__button,
.v-repost .popover-item__slot,
.comment__action:hover,
.comment__detail:hover,
.comment__detail .time:hover,
.comment__icon-action:hover,
a.comment__author:hover,
a.comment__avatar:hover + a.comment__author,
.comment__inline-action,
.editor-cp-tab--active .editor-cp-tab__label,
.mobile-bar__feed--is-active,
.mobile-bar__messenger--is-active,
.mobile-bar__notifications--is-active,
.mobile-bar__link:hover .mobile-bar__icon,
.v-popup-window__close:hover,
.league-block-card a,
.v-tab:hover,
.league-block a,
.editor .ce-redactor a:not(.t-link-inline):not(.andropov_link),
.comment__detail.comment__detail--author,
.comments-header__action--active,
.uploader__upload-icon,
.search__button:hover,
.search--active .search__button,
.writing-select__current:hover,
.gallery-image .upload-button,
.gallery__items .upload-button,
.block-quote__content .icon,
.editor-content .quote-tool__layout-icon,
.v-subscribe-button--inline .v-button,
.v-repost:hover .v-repost__button {
    color: var(--text-color-blue) !important;
}

.league-block-card a,
.league-block a {
    border-bottom-color: var(--text-color-blue);
}

.gallery-item--preview::after,
.gallery-image--preview::after {
    border: 2px solid var(--back-color-blue-button);
    border-top-color: transparent;
}

.vote__button:hover {
    --color-background: transparent !important;
}

.t-link-inline:hover,
.sidebar__footer__icon--youtube,
.vote--sum-negative .vote__value,
.vote--voted-negative .vote__button--minus,
.vote__button--minus:hover,
.vote .vote__users__item--minus,
.subsites_tune__select-all:hover,
.t-link-inline:hover,
.auth-form__help:hover,
.v-list__more:hover,
.donate-cabinet-header a:hover,
.v-dummy__text a:hover,
.v-list-subsites__more:hover,
.v-subscribe-button .icon--ui_close,
.ce-settings__remove-block-button--confirm,
.adviser__close:hover,
.adviser__show-next:hover,
.authorCard__karma--negative,
.advice__caption a:hover,
.advice__list a:hover,
.andropov_telegram__text a:hover,
.andropov_tweet__text a:hover,
.island__container--with_links a:hover,
.island__info a:hover,
.island__list__link:hover,
.subsite_about__text a:hover,
.block-person a:hover,
.block-quote a:hover,
.block-warning a:hover,
.comments__item__text a:hover,
.content figcaption a:hover,
.content h2 a:hover,
.content h3 a:hover,
.content h4 a:hover,
.content ol a:hover,
.content p a:hover,
.l-island-a a b:hover,
.content ul a:hover,
.page--error .error__message a:hover,
.profile_comment_favorite__text a:hover,
.profile_comment_self__text a:hover,
.sitemap a:hover,
.subsite_card_simple__description a:hover,
.subsite_head__description a:hover,
.t-link-classic:hover,
.chat-bottom-actions__button--red,
.chat-info__bottom .b:hover:not(.b--submit),
.user__cross:hover .icon,
.chat-actions__item--important,
.subsite_subscribe_button .icon--ui_close,
.subsite__trend .icon--ui_arrow_down,
.v-header-description a:not(.t-link-inline):hover,
.remover,
.comments__item__expand:hover,
.comments__item__more--inner:hover,
.comments__item__go_to_original:hover,
.t-link-classic:hover,
.form2__field--advanced_list .advanced_list__list .adv_list_item a:hover,
.v-list__label a:hover,
.andropov_telegram__text__more:hover,
.andropov_tweet__text__more:hover,
.v-number-change--negative,
.v-form__legal a:hover,
.t-link-site:hover,
.kojur-nav__item a:hover,
.remove-tool--confirm,
.auth-email-recover:hover,
.__vcbf__popup-header_karma--negative,
.block-hidden__button:hover,
.bc-form-hidden-block__label:hover,
.v-calendar__day--current,
.comment__expand:hover,
.comment__text a:hover,
.comment__inline-action:hover,
.league-block-card a:hover,
.league-block a:hover,
.favorite_marker--active .bookmarks_return,
.favorite_marker:hover:not(.favorite_marker--just_clicked) .bookmarks_return,
.bookmark:hover .bookmark__title,
.bookmark--active .bookmark__title,
.v-field__error,
.like-button--active {
    color: var(--text-color-red) !important;
}

.league-block-card a:hover,
.league-block a:hover {
    border-bottom-color: var(--text-color-red);
}

.v-field--invalid > .v-field__wrapper {
    border-color: var(--text-color-red);
}

.vote--sum-positive .vote__value,
.vote--voted-positive .vote__button--plus,
.vote__button--plus:hover,
.vote .vote__users__item--plus,
.v-number-change--positive,
.v-subscribe-button .icon--ui_check,
.authorCard__karma--positive,
.widget_comment__likes,
.chat-header-info .online,
.subsite_subscribe_button .icon--ui_check,
.subsite__trend .icon--ui_arrow_up,
.ui-button--success .icon,
.v-message__title .icon--ui_check,
.__vcbf__popup-header_karma--positive,
.spotify-sidebar-button {
    color: var(--text-color-green) !important;
}

.typograph-success::before {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14'%3E%3Cpath fill='%2356D469' d='M7 0a7 7 0 100 14A7 7 0 007 0zM5.92 10.23L2.69 7.01l1.24-1.24 1.98 1.99 4.21-4.21 1.24 1.24-5.44 5.44z'/%3E%3C/svg%3E")
}

.content-header-label {
    color: var(--color-yellow) !important;
}

.v-split-button {
    box-shadow: none;
}

.mobile-bar__profile--is-active .navigation-user-profile__avatar-image {
    box-shadow: inset 0 0 0 2px var(--text-color-blue) !important;
}

.bubble,
.bubble:before,
.head-notifies__panel,
.messenger-panel__down,
.messenger-panel__down-footer,
.u-notification--border,
.notifications__header,
.notifications__footer,
.messenger-panel__down-footer,
.messenger-panel__down-head,
.email_subscribe_vue__form,
.comments__item__more--root,
.comments__item__more--root--5,
.ui-button--5,
.vote .vote__users,
.reposters_list,
.reposters_list .icon,
.subsites_tune__panel,
.subsites_tune__header,
.email_subscribe_form__inner,
.social-auth__button,
.donate-cabinet-header a,
.v-dummy__text a,
.tg-header__details-item,
.tg-header__type-switcher,
.gallery-item,
.ce-toolbar__tools-item--selected,
.ce-toolbar__tools-item:hover,
.ce-toolbar__tools,
.ce-toolbar__tools-search-input,
.code-tool,
.audio-tool-title,
.ce-redactor a.andropov_link,
.adviser__container,
.adviser__toggler,
.adviser__container::after,
.ui_select,
.company_card,
.form2__inline-editor,
.input-suggestion input,
.ui_modal_window__footer,
.ui_modal_window__header--border,
.ui_form input[type="text"],
.ui_form input[type="password"],
.ui_form input[type="email"],
.ui_form input[type="name"],
.ui_form textarea,
.ui_form select,
.ui_form input[type="text"]:disabled,
.ui_form input[type="password"]:disabled,
.ui_form input[type="email"]:disabled,
.ui_form input[type="name"]:disabled,
.ui_form textarea:disabled,
.ui_form select:disabled,
.island__social_links--type_1 .island__social_links__item,
.chat-info-form .ui-input,
.comments__item__more--root--5.comments__item__more--root--active,
.comments__item__more--root--5:hover,
.comments__item__more--root.comments__item__more--root--active,
.comments__item__more--root:hover,
.ui-button--5.ui-button--active,
.ui-button--5:hover,
.block-audio,
.block-number,
.block-code,
.andropov_link,
.authorCard,
.content--legacy .block-html iframe.framed,
.content--legacy .block-html img.framed,
.content-image--with_border > div,
.andropov_tweet,
.andropov_telegram,
.attacher__form,
.v-form-input input,
.popup__content--pay_card .card_form__card_number,
.popup__content--pay_card .card_form__cvv,
.popup__content--pay_card .card_form__exp_month,
.popup__content--pay_card .card_form__exp_year,
.subsites_catalog__search,
.tab__content,
.andropov_uploader__preview_item__remove,
.donate-attachment,
.select__current,
.andropov_iframe,
.ui_sub_menu--bordered,
.herzen__command_list__item,
.form2__field--text .text,
.form2__field--advanced_list .text__input,
.form2__field--advanced_list .advanced_list__list,
.form2__field--sticky,
.site-names__list, .site-names__list.active,
.wtf_bubble-body textarea,
.wtf_bc--og.wtf_bc--skin--bg-gray,
.ui_modal_window__title__input,
.tjnames__list, .site-names__list,
.ce-popover,
.editor-history-item,
.notifications__header,
.mobile-bar__profile--is-active .navigation-user-profile__avatar-image,
.comments_pseudo_form--banned-panel .restriction--comments,
.comment-form--banned-panel .restriction--comments,
.v-popup-header,
.get-api-token__text--token,
.uploader__inner,
.filters-popup__header {
    border: none !important;
}

.head-notifies__panel,
.messenger-panel__down,
.v-split-button__dropdown,
.search-dropdown,
.site-header__item .bubble,
.etc_control__list,
.vote .vote__users,
.bubble,
.reposters_list,
.ce-toolbar__tools,
.ce-settings,
.tab__content,
.attacher__form,
.content-editorial-tick span,
.shares--mobile .shares__open,
.shares--open .shares__close,
.etc-controls__dropdown,
.notify .notify-item,
.inline-dropdown,
.m-floating,
.v-shares-popover,
.site-names__list, .site-names__list.active,
.floating_player,
.floating_screen_film--fixed,
.tjnames__list, .site-names__list,
.ce-popover,
.__vcbf__popup,
.__vcbf__popup::before,
.gallery-image__media-settings--small,
.league-block-card {
    box-shadow: rgba(8, 8, 8, 0.25) 0px 6px 12px -2px, rgba(8, 8, 8, 0.3) 0px 3px 7px -3px !important;
}

.dstr-fl__text-link:hover,
.dstr-fl__close:hover,
.block-hidden__button:hover {
    opacity: 1;
}

.ripples {
    background-color: var(--text-color-blue);
}

.spotify-sidebar-button:hover {
    background-color: transparent;
}

.v-tab {
    font-weight: 400;
}

.v-tab--active,
.comments_updates__counter {
    font-weight: 500;
}

.user-card__text {
    font-weight: 500 !important;
}

.v-split-button,
.sidebar__button .v-button,
.sidebar-tree-list-item__child-item--with-badge::after,
.wtf_bc--need-more-items--button,
.sidebar-tree-list-item__badge,
.editor-cp__left .v-button--blue,
.v-calendar__button--primary,
.v-datepicker__date,
.v-range__fill,
.v-range__point--filled::before,
.v-checkbox--checked .v-checkbox__control,
.v-checkbox--checked:hover .v-checkbox__control,
.v-select-tag,
.ui-rounded-button__indicator,
.v-radio--checked .v-radio__control,
.v-radio--checked:hover .v-radio__control,
.navigation-create .v-button {
    background-color: var(--back-color-blue-button) !important;
}

.chat-dropdown-pointer {
    background-color: rgba(30, 30, 30, .94) !important;
}

.v-button--blue {
    box-shadow: none !important;
}

.auth-email-recover {
    border-color: var(--text-color-minor) !important;
}

.auth-email-recover:hover {
    border-color: var(--text-color-red) !important;
}

.favorite_marker .icon, .comments__item__replied_to .icon, .comments__item__reply .icon {
    stroke: transparent !important;
}

#v_chevron_right path {
    fill: var(--text-color-title) !important;
}

#ui_info path {
    fill: var(--color-01ev)
}

#v_cancel path:nth-child(4) {
    fill: var(--text-color-red);
    stroke: var(--text-color-red);
}

#v_success path:nth-child(4) {
    fill: var(--text-color-green);
    stroke: var(--text-color-green);
}

#v_success path:nth-last-child(3),
#v_success path:nth-last-child(2),
#v_cancel path:nth-last-child(3),
#v_cancel path:nth-last-child(2) {
    stroke-opacity: 0;
}

.v-checkbox:hover .v-checkbox__control,
.v-checkbox--checked .v-checkbox__control,
.v-checkbox--checked:hover .v-checkbox__control,
.v-radio:hover .v-radio__control,
.v-radio--checked .v-radio__control
.v-radio--checked:hover .v-radio__control {
    border-color: var(--back-color-blue-button);
}

.v-radio:hover .v-radio__control,
.v-checkbox:hover .v-checkbox__control {
    -webkit-box-shadow: 0 0 0 3px rgba(83, 75, 174, 0.12);
    box-shadow: 0 0 0 3px rgba(83, 75, 174, 0.12);
}

.loader {
    border: 2px solid var(--back-color-blue-button) !important;
    border-top-color: transparent !important
}

.v-calendar__button--primary:hover {
    background-color: var(--blue-button-hover) !important;
}

.comments__content_wrapper__button {
    border-color: transparent;
}

.news-widget-skeleton .line {
    --base-color: var(--text-color-minor);
    --shine-color: var(--text-color-gray);
}

.comment__avatar--online::after {
    background-color: var(--text-color-green);
    box-shadow: 0 0 0 var(--stroke) var(--color-01ev);
    -webkit-box-shadow: 0 0 0 var(--stroke) var(--color-01ev);
}

.dummy #site_logo path {
    fill: var(--text-color-gray);
}

.dummy .title {
    color: var(--text-color-title);
}

.dummy .text {
    color: var(--text-color-gray);
}

.dummy .share_button {
    color: var(--text-color-title);
    border: transparent;
    background-color: var(--hover-04ev);
}

.dummy .start {
    background-color: var(--back-color-blue-button);
    color: var(--text-color-title);
}

.dummy .start:hover {
    background-color: var(--blue-button-hover);
}

/* New Likes */
.comments_counter__count__ico::before,
.v-repost::before,
.bookmark::before,
.like-button__icon::before {
    background-color: transparent !important;
}

.like-button--action-like {
    --like-color-text-hover: var(--text-color-red);
    --like-color-background-hover: var(--text-color-red);
    --like-color-active: var(--text-color-red);
}

#v_like_active path {
    fill: var(--text-color-red);
}

.like-button--action-like .like-button__lottie svg defs linearGradient stop {
    stop-color: var(--text-color-red);
}

.like-button--action-like .like-button__lottie svg g g:first-child:last-child path {
    fill: var(--text-color-red);
}

.like-button--action-like .like-button__lottie svg g g:not(:first-child):not(:last-child) path {
    stroke: var(--text-color-red);
}

.like-button--action-dislike {
    --like-color-text-hover: var(--back-color-blue-button);
    --like-color-background-hover:  var(--back-color-blue-button);
    --like-color-active: var(--back-color-blue-button);
}

#v_dislike_active path {
    fill: var(--back-color-blue-button) !important;
}

.like-button--action-dislike .like-button__lottie svg defs linearGradient stop {
    stop-color: var(--back-color-blue-button);
}

.like-button--action-dislike .like-button__lottie svg g g:not(:nth-child(2)) path {
    fill: var(--back-color-blue-button);
}

.like-button--action-dislike .like-button__lottie svg g g:nth-child(2) path {
    stroke: var(--back-color-blue-button);
}

/* Header */
.site-header,
.site-header-container {
    background-color: var(--color-12ev) !important;
    color: var(--text-color-gray);
    box-shadow: none;
}

.site-header-logo:hover {
    color: var(--text-color-blue) !important;
}

.navigation-profile__toggle:hover {
    opacity: 1;
}

.head-notifies--showed .head-notifies__toggler .icon,
.head-notifies__toggler:hover .icon {
    color: var(--text-color-blue);
    fill: var(--text-color-blue);
}

.navigation-user-profile__toggle:hover,
.site-header-burger:hover {
    fill: var(--text-color-blue) !important;
    opacity: 1 !important;
}

.item--selected {
    font-weight: 500 !important;
}

.head-notifies--showed .head-notifies__toggler::after {
    border-bottom: 7px solid var(--color-24ev);
}

.head-notifies__badge {
    background-color: var(--text-color-red);
}

.site-header-progressbar__runner {
    background-color: var(--back-color-blue-button);
}

#ui_briefcase path {
    stroke: var(--text-color-gray) !important;
}

#ui_diamond path {
    fill: var(--text-color-gray) !important;
}

#ui_blank path {
    stroke: var(--text-color-gray) !important;
}

#v_google_night path,
#v_apple_night path {
    fill: var(--color-01ev);
}

.u-notification__content__button:hover {
    text-decoration: underline;
}

.ui_preloader__dot {
    background-color: var(--text-color-title) !important;
}

.messenger-panel .channel-item__info {
    border-top: 1px solid var(--border-color-dim) !important;
}

.item__badge {
    background-color: var(--back-color-blue-button) !important;
}

.messenger-panel__loader-image,
.messenger-panel__loader-line-1,
.messenger-panel__loader-line-2 {
    background: var(--hover-04ev) !important;
    /*НЕ ТРОГАТЬ*/
}

@media (max-width: 859px) {
    .search__field {
        background-color: var(--color-12ev);
    }
}



.v-split-button,
.v-button--blue .v-button__label,
.v-button--blue .v-button__icon,
.navigation-create .v-button .v-button__label,
.navigation-create .v-button .v-button__icon  {
    color: #FFF;
}

.uploader__inner--covered:hover .uploader__upload-icon--hidden {
    color: #fff !important;
}

.kojur-nav__item a {
    border-color: var(--text-color-blue);
}

.kojur-nav__item a:hover {
    opacity: 1;
}

.kojur-nav__item a:hover {
    border-color: var(--text-color-red);
}

.kojur-nav__item--link a:before {
    filter: hue-rotate(370deg) brightness(155%) saturate(40%);
}

.icon--verified path {
    fill: var(--text-color-blue) !important;
}

.comments__item__reply:hover .icon {
    stroke: var(--text-color-blue);
}

.comments__item__reply .icon {
    stroke: var(--text-color-minor);
}

.editor-cp-tab--active .editor-cp-tab__label:after {
    background-color: var(--text-color-blue);
}

.mini-editor__button:first-child {
    --icon-color: var(--text-color-green);
}

.mini-editor__button:last-child {
    --icon-color: var(--text-color-blue);
}

.v-popup-window__close {
    opacity: 1;
}

.ui_modal_window__close .icon {
    fill: var(--text-color-minor);
}

.v-split-button__dropdown .v-split-button-option:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}

.v-split-button__dropdown .v-split-button-option:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}

@css {
    .popover-item[style*="#2EA83A;"] .popover-item__label {
        color: var(--text-color-green) !important;
    }

    .popover-item[style*="#E52E3A;"] .popover-item__label,
    .popover-item[style*="#E92A40;"] .popover-item__label,
    .popover-item[style*="#E92A40;"] .popover-item__icon {
        color: var(--text-color-red) !important;
    }

    .animated-arrow path[fill="rgb(46,169,59)"] {
        fill: var(--text-color-green) !important;
    }

    .animated-arrow path[fill="rgb(230,46,59)"] {
        fill: var(--text-color-red) !important;
    }
}

.v-subscribe-button--inline .v-button {
    background-color: transparent !important;
}

.bookmarks .ui-rounded-button__link,
.sorting-filters .ui-rounded-button__link {
    color: var(--text-color-title) !important;
    background-color: transparent !important;
    font-weight: 500 !important;
}

.bookmarks .ui-rounded-button__link:hover,
.sorting-filters .ui-rounded-button__link:hover {
    color: var(--text-color-blue) !important;
}

.switcher {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    --size: 32px !important;
}

.switcher:before {
    background-color: var(--hover-08ev) !important;
}

/*--------------------------------------------------------*/
/* Left bar */
.sidebar-tree-list-item__child-item::before {
    background-color: var(--border-color) !important;
}

.sidebar__footer__item--sponsor span {
    background-image: none !important;
    background-color: var(--text-color-blue) !important;
    -webkit-text-fill-color: var(--text-color-blue) !important;
}

.sidebar-tree-list-item__favourite:hover {
    opacity: 1 !important;
}

.kojima-sidebar-item:hover {
    background-color: transparent !important;
}

.spotify-sidebar-button:hover {
    background-color: none !important;
}

.sidebar__footer::before {
    display: none;
}
/*--------------------------------------------------------*/
/* Right bar */
.live__item--comment .live__item__user__name,
.live__item--comment .live__item__title {
    font-weight: 500;
}

#ui_sidebar_live g rect {
    fill: var(--back-red) !important;
    fill-opacity: 1 !important;
}

#ui_sidebar_live g {
    opacity: 1;
}

.u-notification--blue .u-notification__avatar-icon {
    background: var(--back-color-blue-button);
}

.u-notification--green .u-notification__avatar-icon {
    background: var(--text-color-green);
}

.u-notification--red .u-notification__avatar-icon {
    background: var(--text-color-red);
}
/*--------------------------------------------------------*/
/* Center */
.ce-block__content a,
.t-link-classic,
.form2__field--advanced_list .advanced_list__list .adv_list_item a {
    border-color: var(--text-color-blue);
}

.t-link-classic:hover,
.form2__field--advanced_list .advanced_list__list .adv_list_item a:hover {
    border-color: var(--text-color-red);
}

.form2__field--advanced_list .advanced_list__list .adv_list_item__remove:before,
.form2__field--advanced_list .advanced_list__list .adv_list_item__remove:after {
    background-color: var(--text-color-red);
}

.comments_counter--has_new .comments_counter__count__value_new svg,
.comments_counter:hover .comments_counter__count__unit,
.comments_counter:hover .comments_counter__count__value,
.comments_counter:hover .comments_counter__count__value_new.comments_counter__count__value_new,
.comments_counter:hover .comments_counter__count__ico svg,
.v-repost__button:hover .icon {
    fill: var(--text-color-blue) !important;
}

.news_widget__load_more,
.news_widget__header p {
    font-weight: 500;
}

.new_entries__counter,
.new_entries:hover .new_entries__counter {
    background-color: var(--back-color-blue-button);
}

.bookmark .icon {
    fill: var(--text-color-minor) !important;
}

.comments_counter__count__ico svg {
    fill: var(--text-color-minor);
}

.comments__item__replied_to .icon {
    stroke: #747474;
}

.comments__item__replied_to:hover .icon {
    stroke: var(--text-color-blue);
}

.bookmark--active .icon {
    fill: var(--text-color-red) !important;
}

.widget_wrapper--type-blue .widget_wrapper__item {
    border-top-color: var(--border-color);
}

.comments__item__more--root,
.comments__item__more--root--5,
.ui-button--5 {
    color: var(--text-color-title);
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 4px 7px rgba(0, 0, 0, 0.08), 0 -1px 0 rgba(0, 0, 0, 0.05), -1px 0 0 rgba(0, 0, 0, 0.05), 1px 0 0 rgba(0, 0, 0, 0.05);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 4px 7px rgba(0, 0, 0, 0.08), 0 -1px 0 rgba(0, 0, 0, 0.05), -1px 0 0 rgba(0, 0, 0, 0.05), 1px 0 0 rgba(0, 0, 0, 0.05);
}

.ui-button--5:active {
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 5px rgba(0, 0, 0, 0.08), 0 -1px 0 rgba(0, 0, 0, 0.05), -1px 0 0 rgba(0, 0, 0, 0.05), 1px 0 0 rgba(0, 0, 0, 0.05);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 5px rgba(0, 0, 0, 0.08), 0 -1px 0 rgba(0, 0, 0, 0.05), -1px 0 0 rgba(0, 0, 0, 0.05), 1px 0 0 rgba(0, 0, 0, 0.05)
}

.content--embed {
    -webkit-box-shadow: none;
    box-shadow: none;
}

.widget_wrapper__more {
    font-weight: 500;
}

@media (max-width: 859px) {
    .ui-filters--responsive,
    .ui-rounded-button--active .ui-rounded-button__link {
        background-color: var(--color-01ev) !important;
    }

    .ui-filters__inner,
    .ui-rounded-button__link {
        background-color: var(--color-00ev) !important;
    }

    .ui-rounded-button__link:hover {
        background-color: var(--color-00ev) !important;
        color: var(--text-color-blue) !important;
    }

    .ui-rounded-button--active .ui-rounded-button__link:hover {
        background-color: var(--hover-01ev) !important;
    }

    .ui-rounded-button--has-active-child .ui-rounded-button__link {
        color: var(--text-color-blue) !important;
    }
}

.vote .vote__users .icon {
    fill: var(--color-12ev);
}

.vote .vote__users__item:before {
    background-color: var(--border-color-dim);
}

#vote_triangle path {
    stroke: var(--color-12ev) !important;
}

.vote .vote__users--overflowed .vote__users__content_wrapper:after {
    display: none
}

.reposters_list .icon {
    fill: var(--color-08ev);
}

.reposters_list__item:after {
    background-color: var(--border-color-dim);
}

.reposters_list--overflowed:after {
    display: none;
}

.bookmark:hover:not(.bookmark--just_clicked) .icon {
    fill: var(--text-color-red) !important;
}

.v-shares .popover .icon--v_bookmark_solid {
    fill: var(--text-color-red);
}

.daily-promo-unit__button,
.vacancies_widget__new {
    border-color: var(--text-color-minor) !important;
}

.daily-promo-unit-label__inner:hover {
    opacity: 1 !important;
}

.daily-promo-unit__button:hover,
.vacancies_widget__new:hover {
    box-shadow: none !important;
    border-color: var(--text-color-blue) !important;
}

.vacancies_widget__load_more,
.sp-button--blue,
.sp-button--red {
    font-weight: 500;
}

.vacancies_widget__item__company img {
    background: var(--color-00ev) !important;
    filter: opacity(85%);
}

.widget_wrapper--type-blue .widget_wrapper__col:after {
    background-color: var(--border-color);
}

.live-stream {
    --webkit-box-shadow: 1px 1px 6px 0px rgba(0, 18, 18, 0.6) !important;
    -moz-box-shadow: 1px 1px 6px 0px rgba(0, 18, 18, 0.6) !important;
    box-shadow: 1px 1px 6px 0px rgba(0, 18, 18, 0.6) !important;
}

#ui_success path {
    fill: var(--text-color-green) !important;
}

#ui_cancel path {
    fill: var(--text-color-red) !important;
}

#anon-notification path {
    fill: var(--text-color-blue);
}

#anon-notification rect:first-child {
    fill: var(--hover-16ev);
}

.ui-dotted-button span {
    border-color: var(--text-color-title) !important;
}

.subsites_tune__item__check {
    border-color: var(--text-color-minor);
}

.email_subscribe_form__inner {
    border-radius: 8px;
}

.email_subscribe_form,
.shares--mobile .shares__open,
.shares--open .shares__close {
    background: none;
}

.ui_form input[type="submit"] {
    background: var(--back-color-blue-button);
}

.ui_form input[type="submit"]:hover {
    background: var(--blue-button-hover);
}

.auth-form__help:hover {
    border-color: var(--text-color-red);
}

.auth-form__art {
    filter: opacity(70%);
}

.notification__image {
    filter: grayscale(100%) invert(1);
}

.content-header-author__avatar img {
    border-radius: 2px;
}

.ui_sub_menu--bordered:before {
    border-color: var(--color-04ev) !important;
}

.vote .vote__users {
    border-radius: 4px;
}

.page--error .error__ico {
    fill: var(--text-color-gray);
}

.booster-promo__button:hover {
    opacity: 1;
}

.subsite-card-entry {
    border-color: var(--border-color-dim);
}

.bp-unit__button .v-button {
    box-shadow: 0 1px 1px rgba(0,0,0,.1), 0 4px 7px rgba(0,0,0,.08), 0 -1px 0 rgba(0,0,0,.05), -1px 0 0 rgba(0,0,0,.05), 1px 0 0 rgba(0,0,0,.05);
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.1), 0 4px 7px rgba(0,0,0,.08), 0 -1px 0 rgba(0,0,0,.05), -1px 0 0 rgba(0,0,0,.05), 1px 0 0 rgba(0,0,0,.05);
}
/************************************************************************************************************/
/*Profile*/
.v-header-avatar {
    -webkit-box-shadow: 0 0 0 4px var(--color-01ev), inset 0 0 0 1px rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
}

.v-button--blue,
.header__left .v-button--blue {
    background-color: var(--back-color-blue-button) !important;
}


.v-tabs--overflown::after {
    background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, var(--color-01ev) 40%);
}

.v-tabs--overflown::before {
    background-image: linear-gradient(-90deg, rgba(255, 255, 255, 0) 0%, var(--color-01ev) 40%);
}

.ui-border--bottom {
    border-bottom: 1px solid var(--border-color-dim);
}

.v-tab--active .v-tab__label::after,
.ui-tab--active .ui-tab__label:after {
    background-color: var(--text-color-blue);
}

.v-island__header::after {
    background-color: var(--border-color-dim) !important;
}

.v-table__row:not(:last-child) {
    border-color: var(--color-01ev);
}

.tg-grid__section {
    border-bottom: 1px solid var(--border-color);
}

.tg-minimap__left,
.tg-minimap__right {
    background-color: rgba(87, 87, 87, .65);
}


@media (min-width: 860px) {
    .notifications-header::after {
        background: var(--border-color-dim);
    }
}

@media (max-width: 999px) {
    .subsite-details {
        background-color: var(--color-00ev) !important;
    }
}

.v-list__label a {
    border-color: var(--text-color-blue);
}

.v-list__label a:hover {
    border-color: var(--text-color-red);
}

.v-list-subsites-item__icon-container {
    background-image: none;
    background-color: var(--color-01ev);
    color:  var(--text-color-title);
}

/*Post editor*/
.comments__item__more--root--1,
.ui-button--1 {
    background-color: var(--back-color-blue-button) !important;
}

#writing-typograph path {
    fill: var(--text-color-title);
}

.cdx-icon {
    filter: invert(1) opacity(69%);
}

.ce-toolbar__tools,
.ce-toolbar__tools-search-input {
    box-shadow: none;
}

.ce-toolbar__tools-item--selected,
.ce-toolbar__tools-item:hover,
.ce-toolbar__tools,
.ce-toolbar__tools-search-input {
    box-shadow: none;
}

.cdx-inline-toolbar__button-wrapper--active .cdx-icon {
    filter: none;
}

.ce-toolbar__mobile-block-actions {
    box-shadow: none;
}

.ce-settings::before,
.ce-settings::after {
    border-color: transparent transparent var(--color-04ev);
}

.ce-settings_plugin {
    border-color: var(--border-color-dim);
}

.cdx-plugin-settings__item svg path {
    stroke: var(--text-color-gray);
}

.ce-settings__anchor-hash {
    filter: invert(1) opacity(95%);
}

.form-picture__remove::before,
.quote-tool__photo-wrapper__remove::before,
.form-picture__remove::after,
.quote-tool__photo-wrapper__remove::after {
    background-color: var(--text-color-title);
}

.audio-tool-cover:after {
    border-color: var(--border-color) !important;
}

.audio-tool-cover__remove {
    border-radius: 4px;
}

.andropov_link .andropov_image {
    /*filter: invert(1) opacity(80%)*/
    border-radius: 4px;
}

.adviser__toggler {
    background-color: var(--color-00ev) !important;
}

.advice__list li::before {
    background: var(--text-color-gray);
}

.adviser__cross::after,
.adviser__cross::before {
    background-color: var(--text-color-minor);
}

@media (max-width: 1024px) {
    .ce-toolbar {
        background-color: var(--color-04ev);
    }
}

.advice video {
    filter: invert(1) opacity(69%);
}

.tab--active .tab__label[data-v-9dab5d00]:after {
    background-color: var(--text-color-blue);
}

.cdx-inline-toolbar__button-wrapper--active .cdx-icon {
    filter: hue-rotate(370deg) brightness(130%) saturate(40%);
}

.cdx-inline-toolbar__link-back,
.cdx-inline-toolbar__link-remover:before {
    filter: invert(1) opacity(69%)
}

.cdx-inline-toolbar__link-back:hover {
    filter: none;
}

.editor .ce-redactor a,
.miniEditor .ce-redactor a,
.editor .ce-redactor a:not(.t-link-inline):not(.andropov_link) {
    border-color: var(--text-color-blue);
}

.cdx-helper:before {
    border-color: transparent transparent var(--color-06ev);
}

.gallery-image--with-border .gallery-image__media img,
.gallery-image--with-border .gallery-image__media video {
    border-color: var(--text-color-gray);
}

.cdx-icon--cover-blue {
    filter: invert(0) grayscale(100%) opacity(100%) brightness(130%) !important;
}

.v-popup-fp-window__controls {
    color: #FFF;
}

.ce-block-indicator--cover {
    display: block;
}

.codex-editor--covers-limit-exceeded .ce-block-indicator--cover:not(.ce-block-indicator--active) {
    display: none;
}

.v-popup--zoomed-image .v-popup-window__content {
    background: transparent !important;
}

.gallery-image__media-settings .upload-button,
.gallery-image__media-settings .media-tool-settings,
.gallery-image__media-dots {
    background-color: rgba(0, 0, 0, 0.75) !important;
    color: var(--text-color-title) !important;
}

.gallery-image__media-settings .media-tool-settings__item--active {
    background-color: rgba(255,255,255,0.15) !important;
}

.gallery-image__media-settings--small .upload-button,
.gallery-image__media-settings--small .media-tool-settings {
    background-color: var(--color-04ev) !important;
}

.gallery-image__media-settings--small .upload-button:hover,
.gallery-image__media-settings--small .media-tool-settings-item:hover,
.gallery-image__media-settings--small .media-tool-settings__item--active {
    background-color: var(--hover-04ev) !important;
}

.gallery-image__media-settings--small .upload-button__inner {
    background-color: transparent !important;
}

.ce-toolbox__item-icon {
    filter: invert(100%) opacity(69%);
}

.ce-block-settings__item svg {
    filter: invert(100%) opacity(69%);
}

.ce-block-settings__item--active svg {
    filter: invert(1) opacity(0.87) grayscale(1) brightness(1.75);
}

/*Posts*/
#ui_verified path {
    fill: var(--text-color-blue);
}

.gall__item {
    border-color: var(--color-01ev) !important;
}

.audio_player__control__slider__bar {
    background-color: var(--text-color-title);
}

.audio_player__control__slider__bg {
    background-color: var(--color-01ev);
}

.quiz__item__check {
    border: 2px solid var(--text-color-blue);
}

.quiz__item__voted__count {
    opacity: 1;
}

.cdx-helper {
    --webkit-box-shadow: 1px 1px 6px 0px rgba(0, 18, 18, 0.6) !important;
    -moz-box-shadow: 1px 1px 6px 0px rgba(0, 18, 18, 0.6) !important;
    box-shadow: 1px 1px 6px 0px rgba(0, 18, 18, 0.6) !important;
}

.content__thanks {
    color: var(--color-00ev);
    background-color: var(--text-color-blue);
}

.advice__caption a:hover,
.advice__list a:hover,
.andropov_telegram__text a:hover,
.andropov_tweet__text a:hover,
.island__container--with_links a:hover,
.island__info a:hover,
.island__list__link:hover,
.subsite_about__text a:hover {
    border-color: var(--text-color-red);
}

.andropov_telegram__logo .icon,
.andropov_tweet__logo .icon {
    fill: var(--text-color-blue) !important;
}

.text_loop__grd--r {
    background-image: -webkit-gradient(linear, right top, left top, from(var(--color-04ev)), to(rgba(255, 255, 255, 0)));
    background-image: linear-gradient(to left, var(--color-04ev), rgba(255, 255, 255, 0));
}

.text_loop__grd--l {
    background-image: -webkit-gradient(linear, left top, right top, from(var(--color-04ev)), to(rgba(255, 255, 255, 0)));
    background-image: linear-gradient(to right, var(--color-04ev), rgba(255, 255, 255, 0));
}

.quiz__panel__button__label {
    border-color: var(--text-color-blue);
}

.quiz__item__progressbar__runner,
.quiz__item__progressbar {
    background-color: var(--text-color-blue);
}

.editor .marked-text,
.miniEditor .marked-text,
.profile_comment_favorite__text mark,
.profile_comment_self__text mark,
.subsite_card_simple__description mark,
.content mark,
.v-header-description mark,
.marked-text {
    background: var(--hover-08ev);
}

#ui_telegram_round path:first-of-type {
    fill: transparent !important;
}

#ui_telegram_round path:nth-of-type(2) {
    fill: var(--text-color-blue) !important;
}

#ui_telegram_round path:nth-of-type(3),
#ui_telegram_round path:nth-of-type(4) {
    fill: var(--color-04ev) !important;
}

.sidebar__footer, .sidebar__footer__container {
   display: none !important;
}

.editor .marked-text,
.miniEditor .marked-text,
.profile_comment_favorite__text mark,
.profile_comment_self__text mark,
.subsite_card_simple__description mark,
.channel-item__name .searched,
.contacts .searched {
    background-color: rgba(168, 187, 200, .16) !important;
}

.block-warning {
    background-color: #3e2723;
}

.kojur-progressbar:before {
    background-color: #666ad1;
}

.kojur-progressbar__bar {
    background-color: #303f9f;
}
/*******************************************************************************************************************/
/*** Comments ***/
.comments__subscribe__label:after,
.content-editorial-tick span:after,
.content-header-pin__label:after,
.subsite_head__description--edit span:after,
.ui-bubble:after {
    border-top: 6px solid var(--color-12ev);
}

.comments__item__collapse_subtree:hover {
    border-color: var(--text-color-blue);
}

.authorCard,
.comments_pseudo_form,
.comment-form {
    border-radius: 8px;
}

.attacher__button:hover,
.attacher__button:hover .icon--ui_rouble {
    color: #FFF !important;
}

.comments__item__user__status {
    background: var(--text-color-green);
    border-color: var(--color-01ev);
}

.thesis__attach_something .icon--ui_rouble {
    color: #b183d7;
}

.comments_pseudo_form__button .icon--ui_rouble {
    fill: #b183d7;
}

@media (max-width: 859px) {
    .vote--comment .vote__value {
        background-color: transparent !important;
    }
}

.comments__item__children {
    border-color: var(--border-color);
}

#updates_arrows path {
    stroke: var(--text-color-title) !important;
}

.comments__item__self--author .comments__item__user__name .user_name {
    background-color: var(--color-08ev);
}

.block-person a,
.block-quote a,
.block-warning a,
.comments__item__text a,
.content figcaption a,
.content h2 a,
.content h3 a,
.content h4 a,
.content ol a,
.content p a,
.content ul a,
.page--error .error__message a,
.profile_comment_favorite__text a,
.profile_comment_self__text a,
.sitemap a,
.subsite_card_simple__description a,
.subsite_head__description a,
.t-link-classic,
.profile_comment_favorite__expand:hover
{
    border-color: var(--text-color-blue);
}

.block-person a:hover,
.block-quote a:hover,
.block-warning a:hover,
.comments__item__text a:hover,
.content figcaption a:hover,
.content h2 a:hover,
.content h3 a:hover,
.content h4 a:hover,
.content ol a:hover,
.content p a:hover,
.content ul a:hover,
.page--error .error__message a:hover,
.profile_comment_favorite__text a:hover,
.profile_comment_self__text a:hover,
.sitemap a:hover,
.subsite_card_simple__description a:hover,
.subsite_head__description a:hover,
.t-link-classic:hover {
    border-color: var(--text-color-red);
}

.mdl-radio__outer-circle,
.mdl-checkbox__box-outline {
    border-color: var(--text-color-minor);
}

.switcher-layout__header__supporting-text {
    color: var(--text-color-minor);
}

.league-block-card::before {
    border-top-color: var(--color-08ev);
}

.shares--desktop .shares__close,
.shares--desktop .shares__open {
    background-color: var(--color-12ev);
}

.new-entries-horizon svg path:nth-of-type(4) {
    stroke: var(--color-00ev) !important;
}

.new-entries-horizon svg [data-accent-color-fill] {
    fill: var(--back-color-blue-button);
}

.new-entries-horizon svg [data-accent-color-stroke] {
    stroke: var(--text-color-blue);
}

.comments__item__user__name {
    font-weight: 500;
}

.comments_updates__counter {
    background-color: var(--back-color-blue-button);
}

.v-form-input input:focus {
    border-color: var(--text-color-blue);
}

.v-form-range .vue-slider-rail,
.v-form-range .vue-slider-dot-handle {
    background: var(--text-color-title);
}

.v-form-range .vue-slider-process {
    background: var(--back-color-blue-button);
}

.ui-button--4::after {
    border-bottom-color: var(--text-color-minor);
}

.profile_comment_favorite__expand {
    border-color: var(--text-color-minor);
}

.thesis__spy_button.thesis__attach_something {
    color: #26a69a;
}

.comment-unspy-button.is-active, .comment-unspy-button.is-active .material-icons {
    color: var(--back-color-blue-button) !important;
}

.v-receipt__separator {
    border-color: var(--text-color-gray);
}

.v-form-card__front, .v-form-card__back {
    background-color: #181818;
}

.v-form-card__back {
    border: none;
}

.v-form-card__back:after {
    background-color: #333;
}

.v-form-card__back:before {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='302' height='13' fill='none' viewBox='0 0 302 13'%3E%3Cpath fill='%23232323' d='M291.935 12.3733c-5.388 0-9.487-2.69385-13.587-5.38769-4.099-2.69384-7.964-5.27055-13-5.27055-5.037 0-8.902 2.57671-13.001 5.27055-4.099 2.69384-8.199 5.38769-13.586 5.38769-5.388 0-9.487-2.69385-13.587-5.38769-4.099-2.69384-7.964-5.27055-13-5.27055s-8.902 2.57671-13.001 5.27055c-4.099 2.69384-8.199 5.38769-13.586 5.38769-5.388 0-9.487-2.69385-13.586-5.38769-4.1-2.69384-7.965-5.27055-13.001-5.27055s-8.902 2.57671-13.001 5.27055c-4.099 2.69384-8.198 5.38769-13.586 5.38769s-9.487-2.69385-13.586-5.38769c-4.1-2.69384-7.965-5.27055-13.001-5.27055s-8.9015 2.57671-13.0008 5.27055c-4.0993 2.69384-8.1987 5.38769-13.5863 5.38769-5.3877 0-9.487-2.69385-13.5863-5.38769-4.0993-2.69384-7.9644-5.27055-13.0007-5.27055s-8.9014 2.57671-13.0007 5.27055c-4.0993 2.69384-8.1986 5.38769-13.5863 5.38769-5.3877 0-9.487-2.69385-13.5863-5.38769C8.37928 4.29177 4.51422 1.71506-.522085 1.71506c-4.099315 0-7.378765 1.75685-10.424015 3.5137l-.4685-.81986C-8.36935 2.53493-4.85565.778076-.522085.778076 4.86559.778076 8.9649 3.47191 13.0642 6.16575c4.0993 2.69383 7.9644 5.27055 13.0007 5.27055s8.9014-2.57672 13.0007-5.27055C43.1649 3.47191 47.2642.778076 52.6519.778076c5.3877 0 9.487 2.693834 13.5863 5.387674 4.0993 2.69383 7.9644 5.27055 13.0007 5.27055s8.9013-2.57672 13.0007-5.27055C96.3389 3.47191 100.438.778076 105.826.778076s9.487 2.693834 13.586 5.387674c4.099 2.69383 7.965 5.27055 13.001 5.27055s8.901-2.57672 13.001-5.27055C149.513 3.47191 153.612.778076 159 .778076c5.387 0 9.487 2.693834 13.586 5.387674 4.099 2.69383 7.965 5.27055 13.001 5.27055s8.901-2.57672 13.001-5.27055c4.099-2.69384 8.198-5.387674 13.586-5.387674 5.387 0 9.487 2.693834 13.586 5.387674 4.099 2.69383 7.964 5.27055 13.001 5.27055 5.036 0 8.901-2.57672 13-5.27055 4.1-2.69384 8.199-5.387674 13.587-5.387674 5.387 0 9.487 2.693834 13.586 5.387674 4.099 2.69383 7.964 5.27055 13.001 5.27055 5.036 0 8.901-2.57672 13-5.27055 4.1-2.69384 8.199-5.387674 13.587-5.387674 4.333 0 7.847 1.756854 10.892 3.630824l-.468.81986c-2.928-1.87397-6.325-3.5137-10.424-3.5137-5.037 0-8.902 2.57671-13.001 5.27055-3.982 2.57671-8.199 5.38769-13.586 5.38769z'/%3E%3C/svg%3E"), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='302' height='13' fill='none' viewBox='0 0 302 13'%3E%3Cpath fill='%23232323' d='M291.935 12.3733c-5.388 0-9.487-2.69385-13.587-5.38769-4.099-2.69384-7.964-5.27055-13-5.27055-5.037 0-8.902 2.57671-13.001 5.27055-4.099 2.69384-8.199 5.38769-13.586 5.38769-5.388 0-9.487-2.69385-13.587-5.38769-4.099-2.69384-7.964-5.27055-13-5.27055s-8.902 2.57671-13.001 5.27055c-4.099 2.69384-8.199 5.38769-13.586 5.38769-5.388 0-9.487-2.69385-13.586-5.38769-4.1-2.69384-7.965-5.27055-13.001-5.27055s-8.902 2.57671-13.001 5.27055c-4.099 2.69384-8.198 5.38769-13.586 5.38769s-9.487-2.69385-13.586-5.38769c-4.1-2.69384-7.965-5.27055-13.001-5.27055s-8.9015 2.57671-13.0008 5.27055c-4.0993 2.69384-8.1987 5.38769-13.5863 5.38769-5.3877 0-9.487-2.69385-13.5863-5.38769-4.0993-2.69384-7.9644-5.27055-13.0007-5.27055s-8.9014 2.57671-13.0007 5.27055c-4.0993 2.69384-8.1986 5.38769-13.5863 5.38769-5.3877 0-9.487-2.69385-13.5863-5.38769C8.37928 4.29177 4.51422 1.71506-.522085 1.71506c-4.099315 0-7.378765 1.75685-10.424015 3.5137l-.4685-.81986C-8.36935 2.53493-4.85565.778076-.522085.778076 4.86559.778076 8.9649 3.47191 13.0642 6.16575c4.0993 2.69383 7.9644 5.27055 13.0007 5.27055s8.9014-2.57672 13.0007-5.27055C43.1649 3.47191 47.2642.778076 52.6519.778076c5.3877 0 9.487 2.693834 13.5863 5.387674 4.0993 2.69383 7.9644 5.27055 13.0007 5.27055s8.9013-2.57672 13.0007-5.27055C96.3389 3.47191 100.438.778076 105.826.778076s9.487 2.693834 13.586 5.387674c4.099 2.69383 7.965 5.27055 13.001 5.27055s8.901-2.57672 13.001-5.27055C149.513 3.47191 153.612.778076 159 .778076c5.387 0 9.487 2.693834 13.586 5.387674 4.099 2.69383 7.965 5.27055 13.001 5.27055s8.901-2.57672 13.001-5.27055c4.099-2.69384 8.198-5.387674 13.586-5.387674 5.387 0 9.487 2.693834 13.586 5.387674 4.099 2.69383 7.964 5.27055 13.001 5.27055 5.036 0 8.901-2.57672 13-5.27055 4.1-2.69384 8.199-5.387674 13.587-5.387674 5.387 0 9.487 2.693834 13.586 5.387674 4.099 2.69383 7.964 5.27055 13.001 5.27055 5.036 0 8.901-2.57672 13-5.27055 4.1-2.69384 8.199-5.387674 13.587-5.387674 4.333 0 7.847 1.756854 10.892 3.630824l-.468.81986c-2.928-1.87397-6.325-3.5137-10.424-3.5137-5.037 0-8.902 2.57671-13.001 5.27055-3.982 2.57671-8.199 5.38769-13.586 5.38769z'/%3E%3C/svg%3E"), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='302' height='13' fill='none' viewBox='0 0 302 13'%3E%3Cpath fill='%23232323' d='M291.935 12.3733c-5.388 0-9.487-2.69385-13.587-5.38769-4.099-2.69384-7.964-5.27055-13-5.27055-5.037 0-8.902 2.57671-13.001 5.27055-4.099 2.69384-8.199 5.38769-13.586 5.38769-5.388 0-9.487-2.69385-13.587-5.38769-4.099-2.69384-7.964-5.27055-13-5.27055s-8.902 2.57671-13.001 5.27055c-4.099 2.69384-8.199 5.38769-13.586 5.38769-5.388 0-9.487-2.69385-13.586-5.38769-4.1-2.69384-7.965-5.27055-13.001-5.27055s-8.902 2.57671-13.001 5.27055c-4.099 2.69384-8.198 5.38769-13.586 5.38769s-9.487-2.69385-13.586-5.38769c-4.1-2.69384-7.965-5.27055-13.001-5.27055s-8.9015 2.57671-13.0008 5.27055c-4.0993 2.69384-8.1987 5.38769-13.5863 5.38769-5.3877 0-9.487-2.69385-13.5863-5.38769-4.0993-2.69384-7.9644-5.27055-13.0007-5.27055s-8.9014 2.57671-13.0007 5.27055c-4.0993 2.69384-8.1986 5.38769-13.5863 5.38769-5.3877 0-9.487-2.69385-13.5863-5.38769C8.37928 4.29177 4.51422 1.71506-.522085 1.71506c-4.099315 0-7.378765 1.75685-10.424015 3.5137l-.4685-.81986C-8.36935 2.53493-4.85565.778076-.522085.778076 4.86559.778076 8.9649 3.47191 13.0642 6.16575c4.0993 2.69383 7.9644 5.27055 13.0007 5.27055s8.9014-2.57672 13.0007-5.27055C43.1649 3.47191 47.2642.778076 52.6519.778076c5.3877 0 9.487 2.693834 13.5863 5.387674 4.0993 2.69383 7.9644 5.27055 13.0007 5.27055s8.9013-2.57672 13.0007-5.27055C96.3389 3.47191 100.438.778076 105.826.778076s9.487 2.693834 13.586 5.387674c4.099 2.69383 7.965 5.27055 13.001 5.27055s8.901-2.57672 13.001-5.27055C149.513 3.47191 153.612.778076 159 .778076c5.387 0 9.487 2.693834 13.586 5.387674 4.099 2.69383 7.965 5.27055 13.001 5.27055s8.901-2.57672 13.001-5.27055c4.099-2.69384 8.198-5.387674 13.586-5.387674 5.387 0 9.487 2.693834 13.586 5.387674 4.099 2.69383 7.964 5.27055 13.001 5.27055 5.036 0 8.901-2.57672 13-5.27055 4.1-2.69384 8.199-5.387674 13.587-5.387674 5.387 0 9.487 2.693834 13.586 5.387674 4.099 2.69383 7.964 5.27055 13.001 5.27055 5.036 0 8.901-2.57672 13-5.27055 4.1-2.69384 8.199-5.387674 13.587-5.387674 4.333 0 7.847 1.756854 10.892 3.630824l-.468.81986c-2.928-1.87397-6.325-3.5137-10.424-3.5137-5.037 0-8.902 2.57671-13.001 5.27055-3.982 2.57671-8.199 5.38769-13.586 5.38769z'/%3E%3C/svg%3E") !important;
}

.v-form__legal a {
    border-color: var(--text-color-blue) !important;
}

.v-form__legal a:hover {
    border-color: var(--text-color-red) !important;
}

.andropov_preview {
    color: rgba(18, 18, 18, 0.6);
}

.comment-form--focused {
    border-color: var(--back-color-blue-button) !important;
    -webkit-box-shadow: 0 0 0 3px rgba(83, 75, 174, 0.2);
    box-shadow: 0 0 0 3px rgba(83, 75, 174, 0.2);
}

.comment-form:hover {
    border-color: var(--text-color-blue);
    -webkit-box-shadow: 0 0 0 3px rgba(83, 75, 174, 0.2);
    box-shadow: 0 0 0 3px rgba(83, 75, 174, 0.2);
}

.thesis__attach_something .icon--v_image,
.comments_pseudo_form__button .icon--v_image {
    fill: var(--text-color-green);
}

.thesis__attach_something .icon--v_link,
.comments_pseudo_form__button .icon--v_link {
    fill: var(--text-color-blue);
}

.thesis__attach_something .icon--v_rouble,
.comments_pseudo_form__button .icon--v_rouble{
    fill: var(--back-color-blue-button);
}

.thesis__custom_button {
    color: var(--text-color-minor);
    border-color: var(--text-color-minor);
}

.comments_pseudo_form__text {
    color: var(--text-color-minor)
}

.comment__branch,
.comment__branch:not(.comment__branch--max-level):last-child::before {
    border-color: #595959;
}

.comment__branch--highlighted:not(.comment__branch--no-border),
.comment__branch--highlighted:not(.comment__branch--max-level):last-child::before {
    border-color: var(--text-color-blue);
    box-shadow: inset 1px 0 0 0 var(--text-color-blue);
    -webkit-box-shadow: inset 1px 0 0 0 var(--text-color-blue);
}

.comments__item__status::after {
    background-color: var(--text-color-green);
    border-color: var(--color-01ev);
}

.comment__space--highlighted::before,
.comment__space--new::before,
.comment__space--pinned::before,
.comment__space--with-donate::before {
    box-shadow: 0 0 0 4px var(--color-01ev);
    -webkit-box-shadow: 0 0 0 4px var(--color-01ev);
}

.comment__self--author .comment-user__name,
.comment__author--highlighted {
    padding: 0 5px;
}

@media (min-width: 860px) and (hover: hover) {
    .comment .comment__copy-link {
        color:  var(--text-color-minor);
    }

    .comment .comment__copy-link:hover {
        color: var(--text-color-blue);
    }
}

.comment-more--root, .comment-more--root--5, .ui-button--5 {
    background-color: var(--color-03ev);
    border:  none;
    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.08),inset 0 0 0 1px rgba(0,0,0,.06),inset 0 -1px 0 rgba(0,0,0,.12),inset 1px 0 0 rgba(0,0,0,.06),inset -1px 0 0 rgba(0,0,0,.06);
    box-shadow: 0 1px 2px rgba(0,0,0,.08),inset 0 0 0 1px rgba(0,0,0,.06),inset 0 -1px 0 rgba(0,0,0,.12),inset 1px 0 0 rgba(0,0,0,.06),inset -1px 0 0 rgba(0,0,0,.06);
}

.v-field:not(.v-field--focused).v-field--disabled .v-field__wrapper:hover {
    border-color: transparent !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
}

.v-field:not(.v-field--focused) .v-field__wrapper:hover {
    border-color: var(--text-color-blue) !important;
    -webkit-box-shadow: 0 0 0 3px rgba(83, 75, 174, 0.2) !important;
    box-shadow: 0 0 0 3px rgba(83, 75, 174, 0.2) !important;
}

.v-field--focused .v-field__wrapper {
    border-color: var(--back-color-blue-button) !important;
    -webkit-box-shadow: 0 0 0 3px rgba(83, 75, 174, 0.2) !important;
    box-shadow: 0 0 0 3px rgba(83, 75, 174, 0.2) !important;
}

.amount-select .v-field--selected .v-field__wrapper {
    border-color: var(--back-color-blue-button) !important;
}

.amount-select__button--active {
    border-color: var(--back-color-blue-button) !important;
    color: var(--text-color-gray) !important;
}

.amount-select__button:hover {
    -webkit-box-shadow: 0 0 0 3px rgba(83, 75, 174, 0.2) !important;
    box-shadow: 0 0 0 3px rgba(83, 75, 174, 0.2) !important;
}

@media (min-width: 1025px) {
    .writing-footer__right {
        padding-bottom: var(--offset-bottom);
    }

    .editor-cp-tabs {
        display: flex !important;
    }

    .writing-footer__etc {
        display: none;
    }
}
/******************************************************************/
/* Messenger */
.aside__header-button svg path,
.etc-controls {
    fill: var(--text-color-gray) !important;
    color: var(--text-color-gray) !important;
}

.channel-item__name .searched,
.contacts .searched {
    background: rgba(78, 160, 204, .64) !important;
}

.channel-item__unread-count {
    background-color: var(--text-color-blue);
    color: #000;
}

.chat-messages__unread-label {
    background: var(--color-02ev) !important;
}

.message--selected .message__actions-select {
    border-color: var(--text-color-blue) !important;
    background-color: var(--text-color-blue) !important;
}

.message__actions-select {
    border-color: var(--text-color-minor);
}

.chat-form__send {
    color: var(--back-color-blue-button) !important;
}

.emoji-picker__panel-list-section-name {
    box-shadow: 0px 2px 5px var(--color-03ev) !important;
}

.channel-item__online,
.channel-item:hover .channel-item__online {
    border: 1px solid var(--color-02ev);
    background: var(--text-color-green);
}

.chat__header-back svg g path {
    fill: var(--text-color-gray) !important;
}

.mf-header__close .icon--cross g path,
.etc-controls__dropdownIcon .icon--toggle-down g path,
.etc-controls__dropdownIcon .icon--maximize g path {
    fill: var(--text-color-gray);
}

.mf-header__close:hover .icon--cross g path,
.aside__button svg g g path {
    fill: var(--text-color-blue) !important;
}

.b--submit {
    background: var(--back-color-blue-button) !important;
}

.b--submit:hover {
    background: var(--blue-button-hover) !important;
}

.contacts__item--selected .contacts__item-checkbox {
    border-color: var(--back-color-blue-button) !important;
}

.contacts__item--selected .contacts__item-checkbox::after {
    background: var(--back-color-blue-button) !important;
}

.chat-nav {
    font-weight: 500;
}

.chat-form__send--disabled {
    color: var(--text-color-minor) !important;
    /*НЕ ТРОГАТЬ*/
}

.chat-actions__item:hover {
    opacity: 1;
}

.message__content-reply {
    border-color: var(--border-color);
}

.chat-header-info__title .icon--verified g path,
.channel-item__name path {
    fill: var(--text-color-blue) !important;
}

.mf-header__badge {
    background-color: var(--back-color-blue-button);
}

.v-etc__button {
    opacity: 1;
}

/* Settings */
.icon--toggle-up g path {
    fill: var(--text-color-gray);
}
.paid_account__number {
    color: #000;
    filter: invert(90%);
}

.ui-button--1:hover,
.ui-button--1.ui-button--hovered {
    background-color: var(--blue-button-hover) !important;
}

.ui-checkbox,
.ui_form--nickname .nickname-controls__button--cancel {
    border-color: var(--text-color-minor);
}

.ui-checkbox--checked::before {
    border-color: var(--text-color-gray);
}

.subsite_settings__section {
    border-color: var(--border-color);
}

.ui_modal_window__close:hover .icon {
    fill: var(--text-color-blue);
}

.island__social_links--type_1 .island__social_links__item__delete {
    border: none;
}
.island__social_links--type_1 .island__social_links__item--active {
    background-color: var(--text-color-blue) !important;
    color: #000 !important;
}

.island__social_links--type_1 .island__social_links__item__delete .icon {
    fill: #000 !important;
}

.v-hashtag {
    background-image: none !important;
    background-color: var(--color-08ev) !important;
}

.v-hashtag__close-button::before {
    background-color: var(--color-01ev) !important;
}

@media (max-width: 999px) {
    .user-settings {
        background-color: var(--color-01ev) !important;
    }
}

.social-links__item--active,
.social-links__item--active:hover {
    background-color: var(--text-color-blue) !important;
}

.social-links__item--active .social-links__title,
.social-links__item--active .social-links__icon,,
.social-links__item--active .social-links__item-delete
.social-links__item--active .social-links__item-delete:hover {
    color:  var(--color-01ev) !important;
}

/* Vacancies */
.v-button--blue:hover {
    background-color: var(--blue-button-hover) !important;
}

.content-footer-watchers:before {
    background-color: var(--text-color-green);
}

.v-ui-checkbox {
    border-color: var(--text-color-minor);
}

.v-ui-checkbox--checked:before {
    border-color: var(--text-color-gray);
}

.v-header-cover {
    background-color: var(--hover-01ev) !important;
}

/* Rating */
.table__row:not(:last-child):not(.table__row--header) {
    border-color: var(--border-color-dim) !important;
}

/* PLUS page */

.v-plus-badge {
    background-image: -webkit-gradient(linear, left top, right top, color-stop(-41%, #a49aee), color-stop(7%, #534bae), to(#333a82));
    background-image: linear-gradient(90deg, #a49aee -41%, #534bae 7%, #333a82 100%);
}

.plus-badge {
    background-image: -webkit-gradient(linear, left top, right top, color-stop(-41%, #a49aee), color-stop(7%, #534bae), to(#333a82));
    background-image: linear-gradient(90deg, #a49aee -41%, #534bae 7%, #333a82 100%);
}

.v-button--plus {
    background-image: linear-gradient(72.98deg, #7463ea 0%, #534bae 25%, #333a82 100%);
    -webkit-box-shadow: none;
    box-shadow: none;
}

.v-button--plus:hover {
    background-image: linear-gradient(-72.98deg, #7463ea 0%, #534bae 25%, #333a82 100%);
}

.page--plus .plus-avatar {
    border-color: var(--back-color-blue-button);
}

.page--plus .plus-features__item .icon {
    color: #8577e1;
}

.page--plus p a {
    border-color: var(--text-color-blue);
}

.card_form__bg {
    filter: invert(1) opacity(40%);
}

/* Subscriptions */
.subsites_catalog_item:before {
    background: transparent;
}

.subsites_catalog__label--bordered {
    border-color: var(--border-color);
}

/*About */
.block-special-button a {
    background-color: var(--back-color-blue-button) !important;
}

.v-header-description a:not(.t-link-inline) {
    border-color: var(--text-color-blue);
}

.v-header-description a:not(.t-link-inline):hover {
    border-color: var(--text-color-red);
}

.ad-contacts__user:after {
    background: none;
}

.andropov_telegram__text b,
.andropov_telegram__text strong {
    font-weight: 700 !important;
}
/*******************************************************************************************************************/
/******* HLJS THEME FOR BLOCK CODE *******/
.hljs-comment,
.hljs-quote {
    color: #999999;
}

/* Tomorrow Red */
.hljs-variable,
.hljs-template-variable,
.hljs-tag,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class,
.hljs-regexp,
.hljs-deletion {
    color: #f2777a;
}

/* Tomorrow Orange */
.hljs-number,
.hljs-built_in,
.hljs-builtin-name,
.hljs-literal,
.hljs-type,
.hljs-params,
.hljs-meta,
.hljs-link {
    color: #f99157;
}

/* Tomorrow Yellow */
.hljs-attribute {
    color: #ffcc66;
}

/* Tomorrow Green */
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-addition {
    color: #99cc99;
}

/* Tomorrow Blue */
.hljs-title,
.hljs-section {
    color: #6699cc;
}

/* Tomorrow Purple */
.hljs-keyword,
.hljs-selector-tag {
    color: #cc99cc;
}

.hljs {
    display: block;
    overflow-x: auto;
    background: var(--color-04ev);
    color: #cccccc;
    padding: 0.5em;
}

.hljs-emphasis {
    font-style: italic;
}

.hljs-strong {
    font-weight: bold;
}

/**KEKW TAGS**/
input[type="color" i] {
    background-color: var(--hover-03ev) !important;
    border: none !important;
}

.popup__content--misprint .ui_form .selected_text span {
    background-color: var(--color-01ev) !important;
}

#_kekw_dtf_tag_set_user, #_kekw_dtf_tag_clear_user {
    color: var(--text-color-title) !important;
}

#_kekw_dtf_tag::placeholder {
    color: var(--text-color-minor) !important;
}
/****/
/**КТО ЭТО?**/
.__vcbf__popup-header_karma--positive {
    background-color: var(--back-green);
}

.__vcbf__popup-header_karma--negative {
    background-color: var(--back-red);
}

.__vcbf__popup-header {
    border: none;
}

/**KEKW BLOCK**/
#blockListId {
    color: var(--text-color-gray);
}

#blockListId:hover {
    color: var(--text-color-blue);
}

#listedBlockDTFKEKW ol li::marker{
    color: var(--text-color-gray) !important;
}

.editor-cp-tab__content {
    -webkit-box-shadow: 0 4px 8px rgba(0,0,0,0.06), 0 0 1px rgba(0,0,0,0.25);
    box-shadow: 0 4px 8px rgba(0,0,0,0.06), 0 0 1px rgba(0,0,0,0.25);
}

.sidebar-tree-list-item--active,
.sidebar-tree-list-item--active:not(.sidebar-tree-list-item--with-active-child) .sidebar-tree-list-item__icon,
.sidebar-tree-list-item__child-item--active,
.ui-rounded-button--active .ui-rounded-button__link,
.content-editorial-tick,
.navigation-user-login:hover,
.quiz__panel__button,
.quiz__panel__button__label,
.quiz__item__voted__count,
.page--plus .plus-features__item .icon,
.block-quote__content .icon {
    color: var(--site-color) !important;
}

.bookmarks .ui-rounded-button__link,
.sorting-filters .ui-rounded-button__link {
    color: var(--text-color-title) !important;
}

.sidebar__footer__item--sponsor span,
.v-tab--active .v-tab__label::after,
.quiz__item__progressbar__runner,
.quiz__item__progressbar,
.ui-tab--active .ui-tab__label:after {
    background-color: var(--site-color) !important;
}

.v-radio:hover .v-radio__control,
.v-checkbox:hover .v-checkbox__control {
    -webkit-box-shadow: 0 0 0 3px rgba(175, 68, 72, 0.12);
    box-shadow: 0 0 0 3px rgba(175, 68, 72, 0.12);
}

.v-field--focused .v-field__wrapper,
.comment-form--focused {
    -webkit-box-shadow: 0 0 0 3px rgba(175, 68, 72, 0.12) !important;
    box-shadow: 0 0 0 3px rgba(175, 68, 72, 0.12) !important;
}

.sidebar__footer__item--sponsor span {
    -webkit-text-fill-color: var(--site-color) !important;
}

.st0 {
    fill: var(--text-color-gray) !important;
}

.new-entries-horizon svg [data-accent-color-stroke] {
    stroke: var(--site-color);
}

#ui_flag2 path {
    stroke: var(--text-color-gray) !important;
}

.widget_wrapper--type-pink .widget_wrapper__item {
    border-color: var(--border-color) !important;
}

.quiz__item__check {
    border-color: var(--site-color);
}

.quiz__panel__button__label {
    border-color: var(--site-color);
}

.stub h1,
.content-header__title,
.post__title,
.block-header {
    color: var(--text-color-title)
}

.app__header {
    background-color: var(--color-12ev)
}

.archive-item:hover {
    opacity: 1
}

.archive-item:hover .archive-item__title {
    color: var(--text-color-blue)
}

.block-warning {
    background-color: var(--hover-01ev)
}

}
`)
})();
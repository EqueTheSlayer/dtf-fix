// ==UserScript==
// @name         starfield-theme
// @namespace    https://github.com/EqueTheSlayer/dtf-fix/
// @updateURL    https://github.com/EqueTheSlayer/dtf-fix/raw/master/starfield-theme/index.meta.js
// @downloadURL  https://github.com/EqueTheSlayer/dtf-fix/raw/master/starfield-theme/index.user.js
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
    if (!head) {
        return;
    }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}


(function () {

    addGlobalStyle(`
    :root {
        --primary-white: #EFEFEF;
        --primary-black: #000000;
        --red: rgba(237,29,51,1);
        --red-light: rgba(237,29,51,0.3);
        --orange: rgba(255,98,50,1);
        --orange-light: rgba(255,98,50,0.3);
        --yellow: rgba(230,173,92,1);
        --yellow-light: rgba(230,173,92,0.3);
        --blue: rgba(21,75,121,1);
        --blue-light: rgba(21,75,121,0.3);
        --gold: #b39a49;
        --silver: #A4A9A3;
        --grey: #B5B4B9;
    }
    
    .icon--ui_badge_plus * {
        display: none;
    }

.main, .sidebar, .sidebar-tree-list__show-more-button {
    background: var(--primary-white) !important;
}

.icon--ui_badge_plus {
   background: url('https://media.discordapp.net/stickers/1104760402719551599.png?size=240');
   background-size: cover;
   height: 30px !important;
   width: 30px !important;
}

.site-header, .site-header-container {
    background-color: var(--primary-white) !important;
    color: var(--primary-black);
}

.sidebar__footer {
    display: none !important;
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
    color: var(--primary-black) !important;
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
    background-color: var(--primary-white) !important;
    position: relative;
    border: none !important;
    box-shadow: none !important;
    border-radius: 0 !important;
}

.sidebar-tree-list-item--active, .sidebar-tree-list-item {
    border-radius: 0 !important;
}

.sidebar-tree-list-item--active {
    position: relative;
    overflow:hidden;

    &:before {
        content: '';
        background: linear-gradient(90deg, var(--red) 25%, var(--orange) 25%, var(--orange) 50%, var(--yellow) 50%, var(--yellow) 75%, var(--blue) 75%);
        position: absolute;
        width: 20px;
        right: 0;
        height: 100px;
        transform: rotate(45deg);
        bottom: -43px;
    }
}

.v-field--focused, .v-field__wrapper:hover {
    border: none !important;
    box-shadow: none !important;
}

.v-field__wrapper:before {
    content: '';
    position: absolute;
    background: linear-gradient(90deg, var(--red) 25%, var(--orange) 25%, var(--orange) 50%, var(--yellow) 50%, var(--yellow) 75%, var(--blue) 75%);
    height: 5px;
    width: 100%;
    bottom: 0;
}

.navigation-user-profile__avatar-image {
    position: relative;
}

.navigation-user-profile__avatar:hover .navigation-user-profile__avatar-image {
    opacity: 1 !important;     
}

.navigation-user-profile__avatar-image:after {
    content: '';
    position: absolute;
    width: calc(100% + 4px);
    background: conic-gradient(var(--red) 25%, var(--orange) 25%, var(--orange) 50%, var(--yellow) 50%, var(--yellow) 75%, var(--blue) 75%) !important;
    height: calc(100% + 4px);
    border-radius: 50%;
    left: -2px;
    top: -2px;
    z-index: -1;
}

.content-editorial-tick {
    color: var(--red);
}

.content-header-label--draft {
    color: var(--primary-white) !important;
    background: var(--blue) !important; 
}

.comment__branch {
    &:nth-child(-n + 10) {
        border-left: 1px solid var(--blue) !important;
        
        &::before {
            border: solid var(--blue) !important;
            border-width: 0 0 1px 1px !important;
        }
    }

    &:nth-child(1) {
        border-left: 1px solid var(--orange) !important;
        
        &::before {
            border: solid var(--orange) !important;
            border-width: 0 0 1px 1px !important;
        }
    }
    
    &:nth-child(2) {
        border-left: 1px solid var(--yellow) !important;
        &::before {
            border: solid var(--yellow) !important;
            border-width: 0 0 1px 1px !important;
        }
    }
    
    &:not(.comment__branch--max-level):last-child::before {
        border: solid var(--blue);
        border-width: 0 0 1px 1px;
    }
} 

.comments_counter__count__value_new {
    color: var(--red) !important; 
}

.like-button--action-like,
.comment__inline-action,
.comment__action,
.like-button--action-dislike,
.comments_counter__count,
.v-repost,
.content-footer__item,
.v-repost__button,
.v-repost__counter,
.etc_control{
    color: var(--primary-black) !important;
} 



.v-button--default, .v-button--blue {
    color: var(--gold);
    background: var(--primary-white);
    box-shadow: 5px 5px 0px 0px var(--red) !important;
    border-radius: 0 !important;
    box-sizing: content-box;
    outline: 2px solid var(--gold);
}

.v-header-cover-manage__item .v-button--default,
.v-header-cover-manage__item,
.subsite-card__actions button,
.content-header__item button,
.v-header__actions .v-button--default,
.v-header__actions button,
.writing__body button,
.v-popup-container button {
    outline: 2px solid var(--silver);
    color: var(--silver) !important;
    box-shadow: 5px 5px 0px 0px var(--blue) !important;
    border-radius: 0 !important;
    
    &:hover {
        background: var(--primary-white) !important;
    }
}

.feed__container button.v-subscribe-button__subscribe, .feed__container button.v-subscribe-button__unsubscribe, .feed__container button.v-subscribe-button__subscribed {
    color: var(--gold) !important;
    border-radius: 0 !important;
    outline: none !important;
    box-shadow: none !important;
    
    &:hover {
        background: transparent !important;
    }
} 

.v-header__actions {
    & svg {
        color: var(--silver);
        fill: var(--silver);
    }
}

.subsite-card__actions svg {
    fill: var(--silver);
    color: var(--silver);
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
    fill: var(--blue) !important;
    color: var(--blue) !important;
}

.l-island-round  {
    border-radius: 0 !important;
 }

.news-widget {
    border-radius: 0 !important;
}

@media (min-width: 860px) {
.app--content-feed.app--left-column-on.app--right-column-on .layout__left-column {
    width: 250px;
}

.sidebar-tree-list {
    position: relative;
    padding-right: 30px;
    
    &:first-child {
        &:before {
            content: '';
            width: calc(100% - 20px);
            height: calc(100% + 12px);
            position: absolute;
            border-right: 4px solid var(--grey);
            border-bottom: 4px solid var(--grey);
            left: 0;
            top: 0;
        }
    }
    
    &:not(:first-child):after {
            content: '';
            width: 10px;
            height: 200px;
            border-bottom: 4px solid;
            border-right: 4px solid;
            border-color: var(--grey);
            position: absolute;
            right: 0;
            top: 0;
        }
    
    &:first-child {
        &:after {
            content: '';
            width: 10px;
            height: 200px;
            border-top: 4px solid;
            border-right: 4px solid;
            border-color: var(--grey);
            position: absolute;
            right: 0;
            top: 50%;
        }
    }
}

    `)
})()
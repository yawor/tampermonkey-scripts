// ==UserScript==
// @name         Fix OLX Gallery
// @namespace    https://github.com/yawor/tampermonkey-scripts
// @version      0.1
// @description  Fixes image gallery on olx.pl website
// @author       Marcin Jaworski
// @match        https://www.olx.pl/d/oferta/*
// @grant        window.onurlchange
// ==/UserScript==

(function() {
    'use strict';

    if (window.onurlchange === null) {
        // feature is supported
        window.addEventListener('urlchange', (info) => {
            let url = new URL(info.url);
            let previewActive = url.searchParams.get('isPreviewActive') === '1';

            if (previewActive) {
                setTimeout(() => {
                    document.querySelectorAll('#modalRoot .swiper-zoom-container > img').forEach((img) => {
                        img.removeAttribute('srcset');
                        img.style.height = 'auto';
                    });
                }, 500);
            }
        });
    }
})();


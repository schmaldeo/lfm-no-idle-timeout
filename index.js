// ==UserScript==
// @name         LFM no idle
// @namespace    http://lowfuelmotorsport.com/
// @version      0.1
// @description  Remove idle timeout from LFM
// @author       github.com/schmatteo
// @match        https://lowfuelmotorsport.com/*
// @icon         https://avatars.githubusercontent.com/u/83863839?v=4
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
  window.addEventListener('focus', function() {

      document.hasFocus = function(){return true;}

  });

  window.addEventListener('blur', function() {

      document.hasFocus = function(){return true;}

  });

  document.hasFocus = function(){return true;}

  setInterval(() => window.location.reload(), 299900);
})();
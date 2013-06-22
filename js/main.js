"use strict";
var Cromac = {};
Cromac.main = (function( window, document, undefined) {
  var switchClass = function() {
    $('.logo-container').addClass('flipped');
  };
  $(document).ready(function() {
    console.log('hello');
    switchClass();
  })
}(window, document));

// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .

ready = function() {
  
  var windowHeight = $(window).height() + 22;
  
  // Set screen div height as window height
  $(".view").height(windowHeight);
  $("#button-to-div2").click(function() {
    $('html, body').animate({
        scrollTop: $("#second").offset().top
    }, 1500);
  });
}

$(document).ready(ready);
$(document).on('page:load', ready);
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery3
//= require popper
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
// require_tree .
//= require user
//= require problem

$(document).ready(function () {
  $('#flashF').on('click', function () {
    $(this).hide();
  });
  $('#mainImage').on('click', function () {
    alert('Робоче місце створено за допомогою: ' +
	'Ruby on rals 5.1.5, Ruby 2.5.0, Bootstrap 4, postgres database, JS, jQuery.'	);
  })


});

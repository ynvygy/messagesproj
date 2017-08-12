// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var validateForm;

validateForm = function() {
  if (document.getElementById('message_name').value.length < 3) {
    alert('Your name is too short!');
    return false;
  }
  if (document.getElementById('message_message').value.length < 5) {
    alert('Your message is too short!');
    return false;
  }
  var email_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
  if (!document.getElementById('message_email').value.match(email_format)) {
  	alert('Your email address format is wrong!');
  	return false;
  }
}
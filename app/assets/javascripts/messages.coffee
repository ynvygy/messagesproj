# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

validateForm = ->
  console.log($('message_name').length)
  return false
  if $('message_name').length < 3
    alert 'Your name is too short!'
    return false
  if $('message_message').length < 3
    alert 'Your name is too short!'
    return false
  return
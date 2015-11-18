var host = 'https://node-slack-christopherjkim.c9.io';
var sendRoute = host + '/send';
var messagesRoute = host + '/messages';

function sendMessage (user, content, callback) {
  $.post(sendRoute, {user: user, content: content})
  .done(callback);
}

function getMessages (callback) {
  $.get(messagesRoute)
  .done(callback);
}


$('#submit-message').submit(function (e) {
  e.preventDefault();

  /* TODO: send message to server */
  // # is for ID
  var user = $('#submit-user').val();
  var content = $('#submit-content').val();
  var callback = function () {
    $('#submit-content').val("");
  }
  sendMessage(user, content, callback)
    
});


/* use setInterval to periodically get new messages and update the list */

window.setInterval(function () {
  
  getMessages(function (messages) {
    // messages is an array of messages
  
    // empty message log
    $('.messages').empty();

    // TODO: append messages to <ul class="messages">
    for (var i = 0; i < messages.length; i++){
      
      
      // message.user
      // message.content 
      // put those things in between li tags
      
      
      
      // output --> <li>steven: something LOLOLOLOL</li>
      $('.messages').append(produceMessage(messages[i].user, messages[i].content)  
    )}
    
  });

}, 300);


function produceMessage(user, content){
  return '<li>' + user + ': ' +  content + '</li>'
}

//while(1) {
  //sendMessage("France", "THIS IS WHAT HAPPENS WHEN YOU HAVE MUSLIM REFUGEES", function() { })
//}



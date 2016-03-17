// escornabot.js
// License: GPLv3 (see LICENSE.txt)
// (c) 2016 Rafa Couto <caligari@treboada.net>

//////////////////////////////////////////////////////////////////////

$(function() {
  var escornabot = new RemoteEscornabot();
  escornabot.setKeypad(new Keypad('keypad'));
})

//////////////////////////////////////////////////////////////////////

function Keypad(id) {
  this.keypadId = id;
  this.listener = null;
  this._catchButtons();
}

Keypad.prototype = {

  setListener: function(listener) {
    this.listener = listener;
  },

  _catchButtons: function() {
    var ctx = this;
    $('#' + this.keypadId).find('.btn').click(function(){
      var action = $(this).attr('data-action');
      if (ctx.listener) ctx.listener.onKeypadAction(action);
    });
  }

}

//////////////////////////////////////////////////////////////////////

function RemoteEscornabot() {
  this.href = $(location).prop('href');
  this.link();
}

RemoteEscornabot.prototype = {

  link: function() {
    $.get(this.href + '?link')
      .done(function(data) {
        console.log(data)
        });
  },

  setKeypad: function(keypad) {
    this.keypad = keypad;
    keypad.setListener(this);
  },

  onKeypadAction(action) {
    console.log("keypadAction: " + action);
    $.get(this.href + '?action=' + action)
      .done(function(data) {
        console.log(data);
        });
  }

}

//////////////////////////////////////////////////////////////////////

// vim:set ai et sw=2 tw=79:

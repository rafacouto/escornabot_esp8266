// escornabot.js
// License: GPLv3 (see LICENSE.txt)
// (c) 2016 Rafa Couto <caligari@treboada.net>

//////////////////////////////////////////////////////////////////////

$(function() {
  var keypad = new Keypad('keypad');
})

//////////////////////////////////////////////////////////////////////

function Keypad(id) {
  this.keypadId = id;
  this._catchButtons();
}

Keypad.prototype = {

  _catchButtons: function() {
    $('#' + this.keypadId).find('.btn').click(function(){
      Keypad.clickBtn($(this).attr('data-action'));
    });
  }

}

Keypad.clickBtn = function(action) {
  console.log("click: " + action);
}

//////////////////////////////////////////////////////////////////////

// vim:set ai et sw=2 tw=79:

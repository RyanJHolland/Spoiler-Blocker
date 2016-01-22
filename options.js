
//only matters before the user has ever toggled it on or off.
if (typeof localStorage.toggle == "undefined") {
  localStorage.toggle = "ON";
  document.getElementById('onOff').style.color = 'red';
  document.getElementById('onOff').innerText = 'TURN OFF';
  document.getElementById('onOffSpan').innerText = localStorage.toggle;
};

//makes the toggle setting persist when window is closed and reopened.
if (localStorage.toggle == "OFF") {
  document.getElementById('onOff').style.color = 'green';
  document.getElementById('onOff').innerText = 'TURN ON';
  document.getElementById('onOffSpan').innerText = localStorage.toggle;
} else {
  document.getElementById('onOff').style.color = 'red';
  document.getElementById('onOff').innerText = 'TURN OFF';
  document.getElementById('onOffSpan').innerText = localStorage.toggle;
};

//when on/off toggle is clicked.
document.getElementById('onOff').onclick = function() {
    if (localStorage.toggle == "OFF") {
      document.getElementById('onOff').innerText = 'TURN OFF';
      document.getElementById('onOff').style.color = 'red';
      localStorage.toggle = "ON";
      document.getElementById('onOffSpan').innerText = localStorage.toggle;
    } else {
      document.getElementById('onOff').innerText = 'TURN ON';
      document.getElementById('onOff').style.color = 'green';
      localStorage.toggle = "OFF";
      document.getElementById('onOffSpan').innerText = localStorage.toggle;
    }
};

//when the Save button is clicked:
document.getElementById('saveButton').addEventListener('click', function() {

  //stores the words from the text box:
  var wordListStr = document.getElementById('words_HTML').value;
  localStorage["storedWordList"] = wordListStr;
  //background.js can access this variable, and is what sends this to content.js.

  //flashes a message to tell the user it worked:
  document.getElementById('statusMsg_HTML').innerText = 'Options saved!';
  setTimeout(function() {
    document.getElementById('statusMsg_HTML').innerText = '';
  }, 3500);

});

//puts the saved word list in the text box
if (localStorage["storedWordList"]) {
  document.getElementById('words_HTML').value = localStorage["storedWordList"];
}

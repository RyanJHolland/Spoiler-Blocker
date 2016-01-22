var wordListString;


  //asks the background page for the list, and scans when it returns. The call is asynch, so the scan is in the callback.
function mainFunction() {
  chrome.runtime.sendMessage(
    "gimme", function(response) {
      wordListString = response;
    
    wordListString = wordListString.split(',');
    var taboo = [];
    for (var i in wordListString) {
        taboo.push(new RegExp(wordListString[i], 'gi'));
    };

    for (var i = 0; i < document.getElementsByTagName('*').length; i++) {
        for (var j = 0; j < document.getElementsByTagName('*')[i].childNodes.length; j++) {
            if (document.getElementsByTagName('*')[i].childNodes[j].nodeType === 3) {
                for (var x in taboo) {
                    if (document.getElementsByTagName('*')[i].childNodes[j].nodeValue.search(taboo[x]) !== -1) {
                        document.getElementsByTagName('*')[i].replaceChild(document.createTextNode("[TEXT BLOCKED]"), document.getElementsByTagName('*')[i].childNodes[j]);
                    }
                }
            }
        }
    }
    }
  );
}

//runs the scan when the page loads.
window.addEventListener("DOMContentLoaded", mainFunction());

//runs the scan every second! This is the only way I could filter text which loads through Javascript, such as comments on YT or FB.
scan = setInterval(mainFunction, 1000);

//this makes it only run when the tab is active.
document.addEventListener("visibilitychange", function() {
    if (document["hidden"]) {
        clearInterval(scan);
    } else {
        scan = setInterval(mainFunction, 1000);
    };
})
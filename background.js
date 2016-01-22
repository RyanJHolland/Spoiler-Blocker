chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	if (localStorage.toggle == "ON") {
      sendResponse(localStorage["storedWordList"]);
  	}
  });
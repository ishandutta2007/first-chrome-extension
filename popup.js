document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', onclick, false)
  function onclick () {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
      // alert("button inside popup clicked, total tabs open=" + tabs.length);
      chrome.tabs.sendMessage(tabs[0].id, "msg to content.js for all tabs");
    })
  }
}, false)

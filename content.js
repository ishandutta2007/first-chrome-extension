// alert("content.js executing means extension is enabled");
chrome.runtime.onMessage.addListener(function(request){
	alert(request);
});
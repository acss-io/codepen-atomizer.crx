var src = document.createElement('script');
src.src = chrome.extension.getURL('script.js');    
document.body.appendChild(src);
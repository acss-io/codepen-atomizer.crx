function injectJS(link) {
    var src = document.createElement('script');
    src.src = link;    
    document.body.appendChild(src);
}


injectJS(chrome.extension.getURL('script.js'));